/**
 * Interface for a single item in a list response.
 * @property {string} id - The unique identifier for the item.
 * @property {string} object - The type of object represented by the item.
 * @property {number} created - The timestamp of when the item was created.
 * @property {string} owned_by - The identifier of the user who owns the item.
 */
export default interface ListResponseDataItem {
  id: string;
  object: string;
  created: number;
  owned_by: string;
}
