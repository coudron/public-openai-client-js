import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise } from '../client';
import CreateRequest from '../models/edits/create-request';
import CreateResponse from '../models/edits/create-response';
/**
 * Represents a class for making edits using the provided client.
 *
 * @class Edits
 */
export default class Edits {
  client: Client;
  constructor(Client: Client);
  /**
   * Creates a new edit with the provided input data and configuration.
   *
   * @param {CreateRequest} data - The input data for the edit.
   * @param {AxiosRequestConfig} [config] - Optional configuration for the Axios request.
   * @returns {ClientPromise<CreateResponse>} A promise that resolves with the response data.
   *
   * Operation URL: POST /edits
   * Operation ID: createEdit
   */
  create(data: CreateRequest, config?: AxiosRequestConfig): ClientPromise<CreateResponse>;
}
