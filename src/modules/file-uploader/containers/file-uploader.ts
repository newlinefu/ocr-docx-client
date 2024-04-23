import { connect } from "react-redux";
import { compose } from "redux";
import { uploadFile } from "../actions/file-uploader.ts";
import { StateType } from "../../../redux/state-type.ts";
import FileUploader from "../components/file-uploader.tsx";

const mapStateToProps = (state: StateType) => {
  const {
    fileUploader: { resultFilesUrls },
  } = state;
  return { resultFilesUrls };
};

const mapDispatchToProps = {
  uploadFile: uploadFile,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  FileUploader
);
