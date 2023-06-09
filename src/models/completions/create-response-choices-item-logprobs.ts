import CreateResponseChoicesItemLogprobsTopLogprobsItem from './create-response-choices-item-logprobs-top-logprobs-item';

/**
 * Interface for the response object of creating a choices item logprobs.
 * @interface
 * @property {string[]} [tokens] - Array of tokens.
 * @property {number[]} [token_logprobs] - Array of token log probabilities.
 * @property {CreateResponseChoicesItemLogprobsTopLogprobsItem[]} [top_logprobs] - Array of top log probabilities.
 * @property {number[]} [text_offset] - Array of text offsets.
 */
export default interface CreateResponseChoicesItemLogprobs {
  tokens?: string[];
  token_logprobs?: number[];
  top_logprobs?: CreateResponseChoicesItemLogprobsTopLogprobsItem[];
  text_offset?: number[];
}
