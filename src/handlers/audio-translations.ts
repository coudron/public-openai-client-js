import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise } from '../client';
import CreateRequest from '../models/audio-translations/create-request';
import CreateResponse from '../models/audio-translations/create-response';

/**
 * Represents a class for translating audio into English.
 * @class
 */
export default class AudioTranslations {
  client: Client;
  constructor(Client: Client) {
    this.client = Client;
  }

  /**
   * Creates a translation of audio into English.
   *
   * @param {CreateRequest} data - The data needed to create the translation.
   * @param {AxiosRequestConfig} [config] - Optional configuration for the Axios request.
   * @returns {ClientPromise<CreateResponse>} A promise that resolves with the created translation.
   *
   * Operation URL: POST /audio/translations
   * Operation ID: createTranslation
   */
  create(data: CreateRequest, config?: AxiosRequestConfig): ClientPromise<CreateResponse> {
    const path = '/audio/translations';
    return this.client.request<CreateResponse>(
      {
        method: 'POST',
        path,
        data,
        headers: { 'Content-Type': 'multipart/form-data' },
        uploads: ['file']
      },
      config
    );
  }
}
