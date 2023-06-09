import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise } from '../client';
import CreateRequest from '../models/audio-transcriptions/create-request';
import CreateResponse from '../models/audio-transcriptions/create-response';

/**
 * Represents a class for transcribing audio into the input language.
 *
 * @class
 * @constructor
 * @param {Client} Client - The client used to make requests.
 */
export default class AudioTranscriptions {
  client: Client;
  constructor(Client: Client) {
    this.client = Client;
  }

  /**
   * Creates a transcription of audio in the input language.
   * @param {CreateRequest} data - The data required to create the transcription.
   * @param {AxiosRequestConfig} [config] - Optional configuration for the Axios request.
   * @returns {ClientPromise<CreateResponse>} A promise that resolves with the created transcription.
   *
   * Operation URL: POST /audio/transcriptions
   * Operation ID: createTranscription
   */
  create(data: CreateRequest, config?: AxiosRequestConfig): ClientPromise<CreateResponse> {
    const path = '/audio/transcriptions';
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
