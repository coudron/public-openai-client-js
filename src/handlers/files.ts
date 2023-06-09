import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise, ClientRequest } from '../client';
import CreateRequest from '../models/files/create-request';
import CreateResponse from '../models/files/create-response';
import DeleteResponse from '../models/files/delete-response';
import ListResponse from '../models/files/list-response';
import RetrieveResponse from '../models/files/retrieve-response';

/**
 * Class representing a collection of methods for interacting with files belonging to the user's organization.
 */
export default class Files {
  client: Client;
  constructor(Client: Client) {
    this.client = Client;
  }

  /**
   * Retrieves a list of files that belong to the user's organization.
   *
   * @param {AxiosRequestConfig} [config] Optional configuration for the request
   * @returns {ClientPromise<ListResponse>} A promise that resolves to a ListResponse object
   *
   * @operation
   * GET /files
   *
   * @remarks
   * This method requires authentication.
   */
  list(config?: AxiosRequestConfig): ClientPromise<ListResponse> {
    const path = '/files';
    return this.client.request<ListResponse>(
      {
        method: 'GET',
        path
      },
      config
    );
  }

  /**
   * Creates a file by uploading a document(s) to be used across various endpoints/features.
   * The size of all the files uploaded by one organization can be up to 1 GB.
   * Please contact us if you need to increase the storage limit.
   *
   * @param {CreateRequest} data - The data for creating the file.
   * @param {AxiosRequestConfig} [config] - The optional Axios request configuration.
   * @returns {ClientPromise<CreateResponse>} A promise that resolves to the created file response.
   *
   * @remarks
   * Operation URL: POST /files
   * Operation ID: createFile
   */
  create(data: CreateRequest, config?: AxiosRequestConfig): ClientPromise<CreateResponse> {
    const path = '/files';
    return this.client.request<CreateResponse>(
      {
        method: 'POST',
        path,
        data,
        headers: { 'Content-Type': 'multipart/form-data' },
        uploads: ['file']
      },
      config
    );
  }

  /**
   * Returns information about a specific file.
   *
   * Operation URL: GET /files/{file_id}
   * Operation ID:  retrieveFile
   */
  retrieve(fileID: string, config?: AxiosRequestConfig): ClientPromise<RetrieveResponse> {
    const path = `/files/${fileID}`;
    return this.client.request<RetrieveResponse>(
      {
        method: 'GET',
        path
      },
      config
    );
  }

  /**
   * Delete a file.
   *
   * Operation URL: DELETE /files/{file_id}
   * Operation ID:  deleteFile
   */
  delete(fileID: string, config?: AxiosRequestConfig): ClientPromise<DeleteResponse> {
    const path = `/files/${fileID}`;
    return this.client.request<DeleteResponse>(
      {
        method: 'DELETE',
        path
      },
      config
    );
  }
}
