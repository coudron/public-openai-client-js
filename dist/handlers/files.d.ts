import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise } from '../client';
import CreateRequest from '../models/files/create-request';
import CreateResponse from '../models/files/create-response';
import DeleteResponse from '../models/files/delete-response';
import ListResponse from '../models/files/list-response';
import RetrieveResponse from '../models/files/retrieve-response';
/**
 * Represents a class for interacting with files in the user's organization.
 */
export default class Files {
  client: Client;
  constructor(Client: Client);
  /**
   * Returns a list of files that belong to the user's organization.
   *
   * Operation URL: GET /files
   * Operation ID:  listFiles
   */
  list(config?: AxiosRequestConfig): ClientPromise<ListResponse>;
  /**
   * Creates a new edit with the provided input data and configuration.
   *
   * @param {CreateRequest} data - The input data for the edit.
   * @param {AxiosRequestConfig} [config] - Optional configuration for the Axios request.
   * @returns {ClientPromise<CreateResponse>} A promise that resolves with the response data.
   *
   * Operation URL: POST /edits
   * Operation ID: createEdit
   */
  create(data: CreateRequest, config?: AxiosRequestConfig): ClientPromise<CreateResponse>;
  /**
   * Retrieves information about a specific file.
   * @param {string} fileID - The ID of the file to retrieve information for.
   * @param {AxiosRequestConfig} [config] - Optional configuration for the Axios request.
   * @returns {ClientPromise<RetrieveResponse>} - A promise that resolves with the retrieved file information.
   * @operation GET /files/{file_id}
   * @operationId retrieveFile
   */
  retrieve(fileID: string, config?: AxiosRequestConfig): ClientPromise<RetrieveResponse>;
  /**
   * Deletes a file with the specified ID.
   * @param {string} fileID - The ID of the file to delete.
   * @param {AxiosRequestConfig} [config] - Optional configuration for the Axios request.
   * @returns {ClientPromise<DeleteResponse>} A promise that resolves with a DeleteResponse object.
   * @throws {ApiError} If the API returns an error.
   * @remarks This method sends a DELETE request to the API endpoint at /files/{file_id}.
   */
  delete(fileID: string, config?: AxiosRequestConfig): ClientPromise<DeleteResponse>;
}
