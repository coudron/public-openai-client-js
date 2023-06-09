import CreateResponseValidationFilesItemStatusDetails from './create-response-validation-files-item-status-details';

/**
 * Interface for creating response validation files item.
 * @interface
 * @property {string} id - The id of the item.
 * @property {string} object - The object of the item.
 * @property {number} bytes - The size of the item in bytes.
 * @property {number} created_at - The timestamp when the item was created.
 * @property {string} filename - The name of the file.
 * @property {string} purpose - The purpose of the file.
 * @property {string | undefined} [status] - The status of the item.
 * @property {CreateResponseValidationFilesItemStatusDetails | null | undefined} [status_details] - The details of the item's status.
 */
export default interface CreateResponseValidationFilesItem {
  id: string;
  object: string;
  bytes: number;
  created_at: number;
  filename: string;
  purpose: string;
  status?: string;
  status_details?: CreateResponseValidationFilesItemStatusDetails | null;
}
