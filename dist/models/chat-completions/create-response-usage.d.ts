/**
 * Interface for the response object returned by the create method.
 * @interface CreateResponseUsage
 * @property {number} prompt_tokens - The number of prompt tokens in the response.
 * @property {number} completion_tokens - The number of completion tokens in the response.
 * @property {number} total_tokens - The total number of tokens in the response.
 */
export default interface CreateResponseUsage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}
