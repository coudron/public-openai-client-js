/**
 * Interface for creating a request to upload a JSON Lines file.
 * @param {string} file - Name of the JSON Lines file to be uploaded. Must be an absolute path to a file.
 * @param {string} purpose - The intended purpose of the uploaded documents. Use "fine-tune" for Fine-tuning.
 * @remarks If the purpose is set to "fine-tune", each line is a JSON record with "prompt" and "completion" fields representing your training examples.
 * This allows us to validate the format of the uploaded file.
 */
export default interface CreateRequest {
  /**
   * Name of the JSON Lines file to be uploaded.
   * If the purpose is set to "fine-tune", each line is a JSON record with "prompt"
   * and "completion" fields representing your training examples.
   *
   * Must be an absolute path to a file.
   */
  file: string;
  /**
   * The intended purpose of the uploaded documents.
   * Use "fine-tune" for Fine-tuning. This allows us to validate the format of the
   * uploaded file.
   *
   * Example: 'fine-tune'
   */
  purpose: string;
}
