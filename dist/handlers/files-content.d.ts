import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise } from '../client';
import DownloadResponse from '../models/files-content/download-response';
export default class FilesContent {
  client: Client;
  constructor(Client: Client);
  /**
   * Downloads the contents of the specified file.
   *
   * @param fileId The ID of the file to download.
   * @param config Optional Axios request configuration.
   *
   * @returns A Promise that resolves with a DownloadResponse object.
   */
  download(fileId: string, config?: AxiosRequestConfig): ClientPromise<DownloadResponse>;
}
