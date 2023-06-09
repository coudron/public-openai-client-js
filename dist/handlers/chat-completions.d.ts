import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise } from '../client';
import CreateRequest from '../models/chat-completions/create-request';
import CreateResponse from '../models/chat-completions/create-response';
/**
 * Represents a class for creating completions for chat messages.
 * @class
 */
export default class ChatCompletions {
  client: Client;
  constructor(Client: Client);
  /**
   * Creates a completion for the chat message
   *
   * @param {CreateRequest} data - The data for creating the completion
   * @param {AxiosRequestConfig} [config] - Optional Axios request configuration
   * @returns {ClientPromise<CreateResponse>} A promise that resolves to the created completion response
   *
   * Operation URL: POST /chat/completions
   * Operation ID: createChatCompletion
   */
  create(data: CreateRequest, config?: AxiosRequestConfig): ClientPromise<CreateResponse>;
}
