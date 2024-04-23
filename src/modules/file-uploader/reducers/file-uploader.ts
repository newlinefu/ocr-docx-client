import {
  FileUploaderActions,
  UPLOAD_FILE_SUCCESS,
} from "../actions/file-uploader.ts";

export interface FileUploaderState {
  resultFilesUrls: string[];
}

const initialState: FileUploaderState = {
  resultFilesUrls: [],
};

const fileUploaderReducer = (
  state: FileUploaderState = initialState,
  action: FileUploaderActions
) => {
  switch (action.type) {
    case UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        resultFilesUrls: [...state.resultFilesUrls, action.payload.resultFile],
      };
    default: {
      return state;
    }
  }
};

export default fileUploaderReducer;
