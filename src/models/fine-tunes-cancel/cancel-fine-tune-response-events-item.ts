/**
 * Interface for the response item of a fine tune cancellation event.
 * @property {string} object - The type of object associated with the event.
 * @property {number} created_at - The timestamp of when the event was created.
 * @property {string} level - The level of the event.
 * @property {string} message - The message associated with the event.
 */
export default interface CancelFineTuneResponseEventsItem {
  object: string;
  created_at: number;
  level: string;
  message: string;
}
