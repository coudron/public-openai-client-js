'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * Represents a class for interacting with files belonging to the user's organization.
 */
class Files {
  constructor (Client) {
    this.client = Client;
  }

  /**
   * Returns a list of files that belong to the user's organization.
   *
   * Operation URL: GET /files
   * Operation ID:  listFiles
   */
  list (config) {
    const path = '/files';
    return this.client.request(
      {
        method: 'GET',
        path
      },
      config
    );
  }

  /**
   * Uploads a file to be used across various endpoints/features.
   *
   * @param {FormData} data - The file to be uploaded.
   * @param {AxiosRequestConfig} config - Optional configuration for the request.
   * @returns {Promise<AxiosResponse>} A Promise that resolves to the response from the server.
   *
   * Operation URL: POST /files
   * Operation ID: createFile
   */
  create (data, config) {
    const path = '/files';
    return this.client.request(
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
  retrieve (fileID, config) {
    const path = `/files/${fileID}`;
    return this.client.request(
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
  delete (fileID, config) {
    const path = `/files/${fileID}`;
    return this.client.request(
      {
        method: 'DELETE',
        path
      },
      config
    );
  }
}
exports.default = Files;
