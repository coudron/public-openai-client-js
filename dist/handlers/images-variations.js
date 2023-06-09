'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * Class representing ImagesVariations.
 * @class
 */
class ImagesVariations {
  constructor (Client) {
    this.client = Client;
  }

  /**
   * Creates a variation of a given image.
   * @param {FormData} data - The data containing the image to create a variation of.
   * @param {AxiosRequestConfig} config - Optional configuration for the Axios request.
   * @returns {Promise<AxiosResponse>} A Promise that resolves to the AxiosResponse object containing the response data.
   * @operation POST /images/variations
   * @operationId createImageVariation
   */
  createImage (data, config) {
    const path = '/images/variations';
    return this.client.request(
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
exports.default = ImagesVariations;
