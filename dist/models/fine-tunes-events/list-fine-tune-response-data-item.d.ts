/**
 * Interface for the response data item of a fine-tuned list.
 * @property {string} object - The type of object returned.
 * @property {number} created_at - The timestamp of when the item was created.
 * @property {string} level - The level of the item.
 * @property {string} message - The message associated with the item.
 */
export default interface ListFineTuneResponseDataItem {
  object: string;
  created_at: number;
  level: string;
  message: string;
}
