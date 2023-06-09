import ListResponseDataItemStatusDetails from './list-response-data-item-status-details';

/**
 * Represents a single item in a list response data.
 * @interface
 * @property {string} id - The unique identifier of the item.
 * @property {string} object - The type of object this item represents.
 * @property {number} bytes - The size of the item in bytes.
 * @property {number} created_at - The timestamp of when the item was created.
 * @property {string} filename - The name of the file associated with the item.
 * @property {string} purpose - The purpose of the item.
 * @property {string | undefined} [status] - The status of the item, if available.
 * @property {ListResponseDataItemStatusDetails | null | undefined} [status_details] - The details of the item's status, if available.
 */
export default interface ListResponseDataItem {
  id: string;
  object: string;
  bytes: number;
  created_at: number;
  filename: string;
  purpose: string;
  status?: string;
  status_details?: ListResponseDataItemStatusDetails | null;
}
