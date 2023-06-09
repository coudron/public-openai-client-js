'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const axios_1 = require('axios');
/**
 * Represents a client error that extends the AxiosError class.
 * @class
 * @extends axios_1.AxiosError
 * @param {Error|string} from - The error or error message to create the ClientError from.
 * @returns {ClientError} A new instance of the ClientError class.
 * @remarks
 * If the provided 'from' parameter is an instance of Error, the message and stack trace will be used to create the new ClientError instance. If it is a string, the string will be used as the message for the new instance.
 * If the provided 'from' parameter is an instance of AxiosError, the code, config, request, and response properties will be copied to the new ClientError instance.
 */
class ClientError extends axios_1.AxiosError {
  constructor (from) {
    const message = from instanceof Error ? from.message : from;
    super(message);
    this.name = 'ClientError';
    if (from instanceof Error) {
      this.stack = from.stack;
    }
    if (from instanceof axios_1.AxiosError) {
      this.code = from.code;
      this.config = from.config;
      this.request = from.request;
      this.response = from.response;
    }
  }
}
exports.default = ClientError;
