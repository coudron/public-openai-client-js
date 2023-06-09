import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise } from '../client';
import CreateRequest from '../models/embeddings/create-request';
import CreateResponse from '../models/embeddings/create-response';
export default class Embeddings {
  client: Client;
  constructor(Client: Client);
  /**
   * Creates an embedding vector representing the input text.
   * @param {CreateRequest} data - The data to create the embedding vector.
   * @param {AxiosRequestConfig} [config] - Optional configuration for the Axios request.
   * @returns {ClientPromise<CreateResponse>} A promise that resolves with the created embedding vector.
   * @operation POST /embeddings
   * @operationId createEmbedding
   */
  create(data: CreateRequest, config?: AxiosRequestConfig): ClientPromise<CreateResponse>;
}
