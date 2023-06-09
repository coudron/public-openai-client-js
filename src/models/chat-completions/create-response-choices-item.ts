import CreateResponseChoicesItemMessage from './create-response-choices-item-message';

/**
 * Interface for creating a response choices item.
 * @param {number} [index] - The index of the item.
 * @param {CreateResponseChoicesItemMessage} [message] - The message of the item.
 * @param {string} [finish_reason] - The reason for finishing the item.
 */
export default interface CreateResponseChoicesItem {
  index?: number;
  message?: CreateResponseChoicesItemMessage;
  finish_reason?: string;
}
