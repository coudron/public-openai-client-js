import CreateImageResponseDataItem from './create-image-response-data-item';
/**
 * Interface for the response object returned by the CreateImage API endpoint.
 * @interface
 * @property {number} created - The timestamp of when the image was created.
 * @property {CreateImageResponseDataItem[]} data - An array of objects containing information about the created image.
 */
export default interface CreateImageResponse {
  created: number;
  data: CreateImageResponseDataItem[];
}
