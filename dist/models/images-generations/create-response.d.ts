import CreateResponseDataItem from './create-response-data-item';
/**
 * Interface for the response object returned by the Create method.
 * @interface CreateResponse
 * @property {number} created - The timestamp of when the data was created.
 * @property {CreateResponseDataItem[]} data - An array of data items created.
 */
export default interface CreateResponse {
  created: number;
  data: CreateResponseDataItem[];
}
