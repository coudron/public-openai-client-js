import CreateResponseChoicesItemLogprobs from './create-response-choices-item-logprobs';
/**
 * Interface for creating a response choices item.
 * @param {string} [text] - The text of the response choice.
 * @param {number} [index] - The index of the response choice.
 * @param {CreateResponseChoicesItemLogprobs | null} [logprobs] - The log probabilities of the response choice.
 * @param {string} [finish_reason] - The finish reason of the response choice.
 */
export default interface CreateResponseChoicesItem {
  text?: string;
  index?: number;
  logprobs?: CreateResponseChoicesItemLogprobs | null;
  finish_reason?: string;
}
