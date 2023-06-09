import ListResponseDataItem from './list-response-data-item';

/**
 * Interface for a list response object.
 * @property {string} object - The type of object returned.
 * @property {ListResponseDataItem[]} data - An array of data items returned.
 */
export default interface ListResponse {
  object: string;
  data: ListResponseDataItem[];
}
