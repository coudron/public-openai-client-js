import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise } from '../client';
import CreateRequest from '../models/audio-transcriptions/create-request';
import CreateResponse from '../models/audio-transcriptions/create-response';
export default class AudioTranscriptions {
  client: Client;
  constructor(Client: Client);
  /**
   * Creates a transcription of audio into the input language.
   * @param {CreateRequest} data - The data needed to create the transcription.
   * @param {AxiosRequestConfig} [config] - Optional configuration for the Axios request.
   * @returns {ClientPromise<CreateResponse>} A promise that resolves with the created transcription.
   * @throws {ApiError} If the request fails.
   * @remarks Operation URL: POST /audio/transcriptions
   * @remarks Operation ID: createTranscription
   */
  create(data: CreateRequest, config?: AxiosRequestConfig): ClientPromise<CreateResponse>;
}
