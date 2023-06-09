import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise, ClientRequest } from '../client';
import CreateRequest from '../models/images-variations/create-image-request';
import CreateResponse from '../models/images-variations/create-image-response';

/**
 * Class representing a collection of methods for creating variations of images.
 * @class
 */
export default class ImagesVariations {
  client: Client;
  constructor(Client: Client) {
    this.client = Client;
  }

  /**
   * Creates a variation of a given image.
   * @param {CreateRequest} data - The data for creating the image variation.
   * @param {AxiosRequestConfig} [config] - Optional configuration for the Axios request.
   * @returns {ClientPromise<CreateResponse>} A promise that resolves to the response data for creating the image variation.
   * @operation POST /images/variations
   * @operationId createImageVariation
   */
  createImage(data: CreateRequest, config?: AxiosRequestConfig): ClientPromise<CreateResponse> {
    const path = '/images/variations';
    return this.client.request<CreateResponse>(
      {
        method: 'POST',
        path,
        data,
        headers: { 'Content-Type': 'multipart/form-data' },
        uploads: ['image']
      },
      config
    );
  }
}
