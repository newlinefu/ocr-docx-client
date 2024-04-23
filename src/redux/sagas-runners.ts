import { SagaMiddleware } from 'redux-saga';
import {watchUploadFileAsync} from "../modules/file-uploader/sagas/upload-file.ts";

const runAllSagas = (sagaMiddleware: SagaMiddleware) => {
    sagaMiddleware.run(watchUploadFileAsync);
};

export { runAllSagas };
