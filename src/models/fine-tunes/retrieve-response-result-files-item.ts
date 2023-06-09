import RetrieveResponseResultFilesItemStatusDetails from './retrieve-response-result-files-item-status-details';

/**
 * Interface for a single file item in the response of a retrieve request.
 * @interface
 * @property {string} id - The unique identifier of the file.
 * @property {string} object - The object type of the file.
 * @property {number} bytes - The size of the file in bytes.
 * @property {number} created_at - The timestamp of when the file was created.
 * @property {string} filename - The name of the file.
 * @property {string} purpose - The purpose of the file.
 * @property {string | undefined} [status] - The status of the file, if available.
 * @property {RetrieveResponseResultFilesItemStatusDetails | null | undefined} [status_details] - The details of the file status, if available.
 */
export default interface RetrieveResponseResultFilesItem {
  id: string;
  object: string;
  bytes: number;
  created_at: number;
  filename: string;
  purpose: string;
  status?: string;
  status_details?: RetrieveResponseResultFilesItemStatusDetails | null;
}
