import CreateRequestMessagesItem from './create-request-messages-item';
import CreateRequestLogitBias from './create-request-logit-bias';
/**
 * Interface for creating a request to generate chat completions using OpenAI's GPT-3 API.
 * @interface
 * @property {string} model - ID of the model to use. Currently, only gpt-3.5-turbo and gpt-3.5-turbo-0301 are supported.
 * @property {CreateRequestMessagesItem[]} messages - The messages to generate chat completions for, in the chat format.
 * @property {number|null} [temperature=1] - What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
 * @property {number|null} [top_p=1] - An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
 * @property {number|null} [n=1] - How many chat completion choices to generate for each input message.
 * @property {boolean|null} [stream=false] - If set, partial message deltas will be sent, like in ChatGPT. Tokens will be sent as data-only server-sent events as they become available, with the stream terminated by a data: [DONE] message.
 * @property {any} [stop=null] - Up to 4 sequences where the API will stop generating further tokens.
 * @property {number} [max_tokens] - The maximum number of tokens allowed for the generated answer. By default, the number of tokens the model can return will be (4096 - prompt tokens).
 * @property {number|null} [presence_penalty=0] - Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
 * @property {number|null} [frequency_penalty=0] - Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
 * @property {CreateRequestLogitBias|null} [logit_bias=null] - Modify the likelihood of specified tokens appearing in the completion. Accepts a json object that maps tokens (specified by their token ID in the tokenizer) to an associated bias value from -100 to 100.
 * @property {string} [user] - A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse.
 */
export default interface CreateRequest {
  /**
   * ID of the model to use. Currently, only gpt-3.5-turbo and gpt-3.5-turbo-0301 are
   * supported.
   */
  model: string;
  /**
   * The messages to generate chat completions for, in the chat format.
   */
  messages: CreateRequestMessagesItem[];
  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will
   * make the output more random, while lower values like 0.2 will make it more
   * focused and deterministic.
   * We generally recommend altering this or top_p but not both.
   *
   * Default Value: 1
   *
   * Example: 1
   */
  temperature?: number | null;
  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the
   * model considers the results of the tokens with top_p probability mass. So 0.1
   * means only the tokens comprising the top 10% probability mass are considered.
   * We generally recommend altering this or temperature but not both.
   *
   * Default Value: 1
   *
   * Example: 1
   */
  top_p?: number | null;
  /**
   * How many chat completion choices to generate for each input message.
   *
   * Default Value: 1
   *
   * Example: 1
   */
  n?: number | null;
  /**
   * If set, partial message deltas will be sent, like in ChatGPT. Tokens will be
   * sent as data-only server-sent events as they become available, with the stream
   * terminated by a data: [DONE] message.
   *
   * Default Value: false
   */
  stream?: boolean | null;
  /**
   * Up to 4 sequences where the API will stop generating further tokens.
   *
   * Default Value: null
   */
  stop?: any;
  /**
   * The maximum number of tokens allowed for the generated answer. By default, the
   * number of tokens the model can return will be (4096 - prompt tokens).
   */
  max_tokens?: number;
  /**
   * Number between -2.0 and 2.0. Positive values penalize new tokens based on
   * whether they appear in the text so far, increasing the model's likelihood to
   * talk about new topics.
   * See more information about frequency and presence penalties.
   *
   * Default Value: 0
   */
  presence_penalty?: number | null;
  /**
   * Number between -2.0 and 2.0. Positive values penalize new tokens based on their
   * existing frequency in the text so far, decreasing the model's likelihood to
   * repeat the same line verbatim.
   * See more information about frequency and presence penalties.
   *
   * Default Value: 0
   */
  frequency_penalty?: number | null;
  /**
   * Modify the likelihood of specified tokens appearing in the completion.
   * Accepts a json object that maps tokens (specified by their token ID in the
   * tokenizer) to an associated bias value from -100 to 100. Mathematically, the
   * bias is added to the logits generated by the model prior to sampling. The exact
   * effect will vary per model, but values between -1 and 1 should decrease or
   * increase likelihood of selection; values like -100 or 100 should result in a ban
   * or exclusive selection of the relevant token.
   *
   * Default Value: null
   */
  logit_bias?: CreateRequestLogitBias | null;
  /**
   * A unique identifier representing your end-user, which can help OpenAI to monitor
   * and detect abuse. Learn more.
   *
   * Example: 'user-1234'
   */
  user?: string;
}
