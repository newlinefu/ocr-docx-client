const UPLOAD_FILE = "UPLOAD_FILE";
const UPLOAD_FILE_REQUESTED = "UPLOAD_FILE_REQUESTED";
const UPLOAD_FILE_SUCCESS = "UPLOAD_FILE_SUCCESS";
const UPLOAD_FILE_FAILURE = "UPLOAD_FILE_FAILURE";

interface UploadFilePayload {
  files: Blob[];
}

interface UploadFileSuccessPayload {
  resultFile: string;
}

export interface UploadFileAction {
  type: typeof UPLOAD_FILE;
  payload: UploadFilePayload;
}

interface UploadFileRequestedAction {
  type: typeof UPLOAD_FILE_REQUESTED;
}

interface UploadFileSuccessAction {
  type: typeof UPLOAD_FILE_SUCCESS;
  payload: UploadFileSuccessPayload;
}

interface UploadFileFailureAction {
  type: typeof UPLOAD_FILE_FAILURE;
  error: string;
}

export type FileUploaderActions =
  | UploadFileRequestedAction
  | UploadFileSuccessAction
  | UploadFileFailureAction;

const uploadFile = (payload: UploadFilePayload): UploadFileAction => ({
  type: UPLOAD_FILE,
  payload,
});

const uploadFileRequested = (): FileUploaderActions => ({
  type: UPLOAD_FILE_REQUESTED,
});

const uploadFileSuccess = (
  payload: UploadFileSuccessPayload
): FileUploaderActions => ({
  type: UPLOAD_FILE_SUCCESS,
  payload,
});

const uploadFileFailure = (error: string): FileUploaderActions => ({
  type: UPLOAD_FILE_FAILURE,
  error,
});

export {
  UPLOAD_FILE,
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_FAILURE,
  UPLOAD_FILE_REQUESTED,
  uploadFile,
  uploadFileSuccess,
  uploadFileRequested,
  uploadFileFailure,
};
