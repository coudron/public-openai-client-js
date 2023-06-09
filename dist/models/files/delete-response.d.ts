/**
 * Interface for the response of a delete operation.
 * @param {string} id - The ID of the deleted object.
 * @param {string} object - The type of the deleted object.
 * @param {boolean} deleted - Whether the object was successfully deleted.
 */
export default interface DeleteResponse {
  id: string;
  object: string;
  deleted: boolean;
}
