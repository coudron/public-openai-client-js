import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise } from '../client';
import CreateRequest from '../models/images-variations/create-image-request';
import CreateResponse from '../models/images-variations/create-image-response';
/**
 * Class representing a collection of methods for creating variations of images.
 * @class
 */
export default class ImagesVariations {
  client: Client;
  constructor(Client: Client);
  /**
   * Creates a variation of a given image.
   * @param {CreateRequest} data - The data needed to create the image variation.
   * @param {AxiosRequestConfig} [config] - Optional configuration for the Axios request.
   * @returns {ClientPromise<CreateResponse>} A promise that resolves with the response data from the API.
   * @operation POST /images/variations
   * @operationId createImageVariation
   */
  createImage(data: CreateRequest, config?: AxiosRequestConfig): ClientPromise<CreateResponse>;
}
