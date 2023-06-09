import RetrieveResponseHyperparams from './retrieve-response-hyperparams';
import RetrieveResponseTrainingFilesItem from './retrieve-response-training-files-item';
import RetrieveResponseValidationFilesItem from './retrieve-response-validation-files-item';
import RetrieveResponseResultFilesItem from './retrieve-response-result-files-item';
import RetrieveResponseEventsItem from './retrieve-response-events-item';

/**
 * Interface for the response of a retrieve operation.
 * @param {string} id - The ID of the retrieved object.
 * @param {string} object - The type of object retrieved.
 * @param {number} created_at - The timestamp of when the object was created.
 * @param {number} updated_at - The timestamp of when the object was last updated.
 * @param {string} model - The name of the model used for training.
 * @param {string | null} fine_tuned_model - The name of the fine-tuned model used for training, if applicable.
 * @param {string} organization_id - The ID of the organization that owns the object.
 * @param {string} status - The current status of the object.
 * @param {RetrieveResponseHyperparams} hyperparams - The hyperparameters used for training.
 * @param {RetrieveResponseTrainingFilesItem[]} training_files - An array of training files used for training.
 * @param {RetrieveResponseValidationFilesItem[]} validation_files - An array of validation files used for training.
 * @param {RetrieveResponseResultFilesItem[]} result_files - An array of result files generated during training.
 * @param {RetrieveResponseEventsItem[] | undefined} events - An optional array of events associated with the object.
 */
export default interface RetrieveResponse {
  id: string;
  object: string;
  created_at: number;
  updated_at: number;
  model: string;
  fine_tuned_model: string | null;
  organization_id: string;
  status: string;
  hyperparams: RetrieveResponseHyperparams;
  training_files: RetrieveResponseTrainingFilesItem[];
  validation_files: RetrieveResponseValidationFilesItem[];
  result_files: RetrieveResponseResultFilesItem[];
  events?: RetrieveResponseEventsItem[];
}
