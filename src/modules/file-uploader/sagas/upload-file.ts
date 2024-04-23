import { put, call, takeEvery } from "redux-saga/effects";
import {
  UPLOAD_FILE,
  uploadFileSuccess,
  uploadFileFailure,
  uploadFileRequested,
  UploadFileAction,
} from "../actions/file-uploader.ts";
import { AxiosError } from "axios";
import { uploadFiles } from "../../../rest-handlers/file-uploading.ts";

function* uploadFileAsync(action: UploadFileAction) {
  const { files } = action.payload;
  try {
    yield put(uploadFileRequested());
    const result: { resultFile: string } = yield call(() =>
      uploadFiles(files)
    );
    const { resultFile } = result;
    yield put(uploadFileSuccess({ resultFile }));
  } catch (error) {
    const err = error as AxiosError;
    const errMessage =
      err.message || "Something went wrong. Please try again later";
    yield put(uploadFileFailure(errMessage));
  }
}

export function* watchUploadFileAsync() {
  yield takeEvery(UPLOAD_FILE, uploadFileAsync);
}
