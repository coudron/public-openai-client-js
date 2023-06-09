import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise } from '../client';
import ListFineTuneResponse from '../models/fine-tunes-events/list-fine-tune-response';
export default class FineTunesEvents {
  client: Client;
  constructor(Client: Client);
  /**
   * Retrieves fine-grained status updates for a fine-tune job.
   * @param fineTuneId The ID of the fine-tune job to retrieve events for.
   * @param params Optional parameters for the request.
   * @returns A promise that resolves with the response data.
   */
  listFineTune(fineTuneId: string, params?: Object, config?: AxiosRequestConfig): ClientPromise<ListFineTuneResponse>;
}
