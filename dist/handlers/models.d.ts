import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise } from '../client';
import ListResponse from '../models/models/list-response';
import RetrieveResponse from '../models/models/retrieve-response';
import DeleteResponse from '../models/models/delete-response';
export default class Models {
  client: Client;
  constructor(Client: Client);
  /**
   * Lists the currently available models, and provides basic information about each
   * one such as the owner and availability.
   *
   * Operation URL: GET /models
   * Operation ID:  listModels
   */
  list(config?: AxiosRequestConfig): ClientPromise<ListResponse>;
  /**
   * Retrieves a model instance, providing basic information about the model such as
   * the owner and permissioning.
   *
   * Operation URL: GET /models/{model}
   * Operation ID:  retrieveModel
   *
   * @param model The ID of the model to use for this request
   */
  retrieve(model: string, config?: AxiosRequestConfig): ClientPromise<RetrieveResponse>;
  /**
   * Deletes a fine-tuned model.
   * @param model - The model to delete.
   * @param config - Optional Axios request configuration.
   * @returns A promise that resolves with a DeleteResponse object.
   */
  delete(model: string, config?: AxiosRequestConfig): ClientPromise<DeleteResponse>;
}
