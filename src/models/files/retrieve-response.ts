import RetrieveResponseStatusDetails from './retrieve-response-status-details';

/**
 * Interface for the response object returned by the Retrieve API endpoint.
 * @interface
 * @property {string} id - The unique identifier of the retrieved object.
 * @property {string} object - The type of object retrieved.
 * @property {number} bytes - The size of the retrieved object in bytes.
 * @property {number} created_at - The timestamp of when the retrieved object was created.
 * @property {string} filename - The name of the retrieved file.
 * @property {string} purpose - The purpose of the retrieved object.
 * @property {string | undefined} [status] - The status of the retrieved object, if available.
 * @property {RetrieveResponseStatusDetails | null | undefined} [status_details] - Additional details about the status of the retrieved object, if available.
 */
export default interface RetrieveResponse {
  id: string;
  object: string;
  bytes: number;
  created_at: number;
  filename: string;
  purpose: string;
  status?: string;
  status_details?: RetrieveResponseStatusDetails | null;
}
