/**
 * Interface for creating a response choices item message.
 * @property {string} role - The role of the author of this message. Allowed values: 'system', 'user', 'assistant'.
 * @property {string} content - The contents of the message.
 */
export default interface CreateResponseChoicesItemMessage {
  /**
   * The role of the author of this message.
   *
   * Allowed values: 'system', 'user', 'assistant'
   */
  role: string;

  /**
   * The contents of the message
   */
  content: string;
}
