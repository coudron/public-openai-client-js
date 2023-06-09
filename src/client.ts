import { AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import FormData from 'form-data';
import { createReadStream } from 'fs';
import path from 'path';
import qs from 'qs';
import ClientError from './client-error';
import AudioTranscriptions from './handlers/audio-transcriptions';
import AudioTranslations from './handlers/audio-translations';
import ChatCompletions from './handlers/chat-completions';
import Completions from './handlers/completions';
import Edits from './handlers/edits';
import Embeddings from './handlers/embeddings';
import Files from './handlers/files';
import FilesContent from './handlers/files-content';
import FineTunes from './handlers/fine-tunes';
import FineTunesCancel from './handlers/fine-tunes-cancel';
import FineTunesEvents from './handlers/fine-tunes-events';
import ImagesEdits from './handlers/images-edits';
import ImagesGenerations from './handlers/images-generations';
import ImagesVariations from './handlers/images-variations';
import Models from './handlers/models';
import Moderations from './handlers/moderations';

/**
 * Represents a promise that will resolve with data of type `Data`.
 * Extends `AxiosPromise<Data>`.
 */
export interface ClientPromise<Data> extends AxiosPromise<Data> {}

/**
 * Represents an HTTP request made by a client.
 * @interface
 * @property {string} method - The HTTP method used for the request. Can be 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', or 'OPTIONS'.
 * @property {string} path - The path of the requested resource.
 * @property {AxiosRequestConfig['data']} [data] - The data to be sent with the request.
 * @property {AxiosRequestHeaders} [headers] - The headers to be included in the request.
 * @property {AxiosRequestConfig['params']} [params] - The query parameters to be included in the request.
 * @property {string[]} [uploads] - An array of file paths to be uploaded with the request.
 */
export interface ClientRequest {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
  path: string;
  data?: AxiosRequestConfig['data'];
  headers?: AxiosRequestHeaders;
  params?: AxiosRequestConfig['params'];
  uploads?: string[];
}

/**
 * Represents a client for interacting with the Axios HTTP library.
 * @class
 * @template Data - The type of data returned by the HTTP response.
 * @property {AxiosInstance} instance - The Axios instance used for making HTTP requests.
 * @property {Completions} completions - Access to the Completions handler.
 * @property {ChatCompletions} chatCompletions - Access to the ChatCompletions handler.
 * @property {Edits} edits - Access to the Edits handler.
 * @property {Embeddings} embeddings - Access to the Embeddings handler.
 * @property {AudioTranscriptions} audioTranscriptions - Access to the AudioTranscriptions handler.
 * @property {AudioTranslations} audioTranslations - Access to the AudioTranslations handler.
 * @property {Files} files - Access to the Files handler.
 * @property {FilesContent} filesContent - Access to the FilesContent handler.
 * @property {FineTunes} fineTunes - Access to the FineTunes handler.
 * @property {FineTunesCancel} fineTunesCancel - Access to the FineTunesCancel handler.
 * @property {FineTunesEvents} fineTunesEvents - Access to the FineTunesEvents handler.
 * @property {ImagesEdits} imagesEdits - Access to the ImagesEdits handler.
 * @property {ImagesGenerations} imagesGenerations - Access to the ImagesGenerations handler.
 * @property {ImagesVariations} imagesVariations - Access to the ImagesVariations handler.
 * @property {Models} models - Access to the Models handler.
 * @property {Moderations} moderations - Access to the Moderations handler.
 * @param {AxiosInstance} instance - The Axios instance used for making HTTP requests.
 * @returns {ClientPromise<Data>} - A promise that resolves with the HTTP response data or rejects with a ClientError.
 */
export default class {
  instance: AxiosInstance;

  /**
   * Access to the Completions handler.
   */
  completions = new Completions(this);

  /**
   * Access to the ChatCompletions handler.
   */
  chatCompletions = new ChatCompletions(this);

  /**
   * Access to the Edits handler.
   */
  edits = new Edits(this);

  /**
   * Access to the Embeddings handler.
   */
  embeddings = new Embeddings(this);

  /**
   * Access to the AudioTranscriptions handler.
   */
  audioTranscriptions = new AudioTranscriptions(this);

  /**
   * Access to the AudioTranslations handler.
   */
  audioTranslations = new AudioTranslations(this);

  /**
   * Access to the Files handler.
   */
  files = new Files(this);

  /**
   * Access to the FilesContent handler.
   */
  filesContent = new FilesContent(this);

  /**
   * Access to the FineTunes handler.
   */
  fineTunes = new FineTunes(this);

  /**
   * Access to the FineTunesCancel handler.
   */
  fineTunesCancel = new FineTunesCancel(this);

  /**
   * Access to the FineTunesEvents handler.
   */
  fineTunesEvents = new FineTunesEvents(this);

  /**
   * Access to the ImagesEdits handler.
   */
  imagesEdits = new ImagesEdits(this);

  /**
   * Access to the ImagesGenerations handler.
   */
  imagesGenerations = new ImagesGenerations(this);

  /**
   * Access to the ImagesVariations handler.
   */
  imagesVariations = new ImagesVariations(this);

  /**
   * Access to the Models handler.
   */
  models = new Models(this);

  /**
   * Access to the Moderations handler.
   */
  moderations = new Moderations(this);

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  /**
   * Encodes the request body based on the Content-Type header in the AxiosRequestConfig object.
   * @param {ClientRequest} request - The request object containing the data to be encoded.
   * @param {AxiosRequestConfig} config - The AxiosRequestConfig object containing the headers.
   * @returns {AxiosRequestConfig['data']} - The encoded request body.
   * @throws {ClientError} - If the Content-Type header is not set or has an unexpected value.
   */
  #encodeBody(request: ClientRequest, config: AxiosRequestConfig): AxiosRequestConfig['data'] {
    if (!config.headers || !config.headers['Content-Type']) {
      throw new ClientError('Unable to encode body. Content-Type request header must be set.');
    }

    const contentType = config.headers['Content-Type'].toString();

    if (contentType.includes('application/json')) {
      return request.data;
    }

    if (contentType.includes('application/x-www-form-urlencoded')) {
      return qs.stringify(request.data);
    }

    if (contentType.includes('multipart/form-data')) {
      const form = new FormData();
      for (const field in request.data) {
        if (Object.prototype.hasOwnProperty.call(request.data, field) && request.uploads?.includes(field)) {
          const stream = createReadStream(request.data[field]);
          stream.on('error', function (err) {
            throw new ClientError(err);
          });
          form.append(field, stream, { filename: path.basename(request.data[field]) });
          continue;
        }
        const value = Array.isArray(request.data[field]) ? JSON.stringify(request.data[field]) : request.data[field];
        form.append(field, value);
      }
      return form;
    }

    throw new ClientError(`Unexpected Content-Type header value: ${contentType}`);
  }

  /**
   * Searches for a header key in the header object case insensitively.
   * @param key - The header key to search for.
   * @param headers - The headers object to search in.
   * @returns The matched header key from the headers object or false if not found.
   */
  #includeInHeader(key: string, headers: AxiosRequestHeaders): string | false {
    const headerKeys = Object.keys(headers).reduce((keys, key) => {
      keys[key.toLowerCase()] = key;
      return keys;
    }, {} as Record<string, string>);
    if (Object.keys(headerKeys).includes(key.toLowerCase())) {
      return headerKeys[key.toLowerCase()];
    }
    return false;
  }

  /**
   * Merges two sets of headers together.
   *
   * @param {AxiosRequestHeaders} targetHeader - The target header to merge into.
   * @param {AxiosRequestHeaders} sourceHeader - The source header to merge from.
   * @returns {AxiosRequestHeaders} - The merged headers.
   *
   * @remarks
   * If the User-Agent or Content-Type headers are not present in either header set, they will be added with default values.
   * If a header key already exists in the target header, the source header's value will not be added.
   */
  #mergeHeaders(targetHeader: AxiosRequestHeaders, sourceHeader: AxiosRequestHeaders): AxiosRequestHeaders {
    if (!targetHeader['User-Agent'] && !this.#includeInHeader('User-Agent', sourceHeader)) {
      // User-Agent is Tectalic OpenAI REST API Client by default.
      targetHeader['User-Agent'] = 'Tectalic OpenAI REST API Client';
    }

    if (!targetHeader['Content-Type'] && !this.#includeInHeader('Content-Type', sourceHeader)) {
      // Content type is application/json by default.
      targetHeader['Content-Type'] = 'application/json';
    }

    for (let headerKey of Object.keys(sourceHeader)) {
      if (!targetHeader[headerKey]) {
        // If lowercase matches use keys from targetHeader.
        const targetKey = this.#includeInHeader(headerKey, targetHeader) || headerKey;
        targetHeader[targetKey] = sourceHeader[headerKey];
      }
    }

    return targetHeader;
  }

  /**
   * Merge various parts to the request.
   * @internal
   */
  configRequest(request: ClientRequest, config?: AxiosRequestConfig): AxiosRequestConfig {
    if (!config) {
      config = {} as AxiosRequestConfig;
    }

    config.url = request.path;

    config.method = request.method;

    // HTTP Parameters.
    if (request.params) {
      if (!config.params) {
        config.params = {};
      }
      for (const param of Object.keys(request.params)) {
        if (!config.params[param]) {
          config.params[param] = request.params[param];
        }
      }
    }

    // Merge Headers.
    if (!config.headers) {
      config.headers = {};
    }
    if (!request.headers) {
      request.headers = {};
    }
    config.headers = this.#mergeHeaders(config.headers, request.headers);

    // Request Body.
    config.data = this.#encodeBody(request, config);
    if (config.data instanceof FormData) {
      config.headers = this.#mergeHeaders(config.headers, config.data.getHeaders());
    }
    return config;
  }

  /**
   * Perform the specified HTTP request.
   */
  request<Data>(request: ClientRequest, config?: AxiosRequestConfig): ClientPromise<Data> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<Data>(this.configRequest(request, config))
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(new ClientError(error));
        });
    });
  }
}
