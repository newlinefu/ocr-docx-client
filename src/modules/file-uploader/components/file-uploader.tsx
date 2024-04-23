import styled from "styled-components";
import { FileAddOutlined } from "@ant-design/icons";
import { UploadFile, UploadProps } from "antd";
import { message, Upload } from "antd";
import {
  ACCENT_COLOR,
  FILE_TYPES_UPLOAD,
  ICONS_COLOR,
  LAYOUT_COLOR,
  MAIN_COLOR,
} from "../../../lib/constants.ts";
import { uploadFile } from "../actions/file-uploader.ts";
import { useEffect, useState } from "react";
import { RcFile } from "antd/es/upload";
import ResultFilesList from "./result-files-list.tsx";
import StyledButton from "../../../lib/styled-components/styled-button.ts";

const { Dragger } = Upload;

interface FileUploaderProps {
  uploadFile: typeof uploadFile;
  resultFilesUrls: string[];
}

const FileUploader = (props: FileUploaderProps) => {
  const { uploadFile, resultFilesUrls } = props;

  const [files, setFiles] = useState<RcFile[]>([]);
  const [uploaderData, setUploaderData] = useState<UploadFile[]>([]);

  useEffect(() => {
    setFiles(
      uploaderData.flatMap((data) =>
        data.originFileObj ? data.originFileObj : []
      )
    );
  }, [uploaderData]);

  const uploadProps: UploadProps = {
    name: "file",
    multiple: true,
    accept: FILE_TYPES_UPLOAD.join(", "),
    action: () => Promise.resolve("done"),
    customRequest: ({ onSuccess }) => {
      setTimeout(() => {
        onSuccess?.("ok");
      }, 0);
    },
    onChange(info) {
      const { fileList } = info;
      const { status } = info.file;
      if (status !== "uploading") {
        setUploaderData(fileList);
      }
      if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const onSubmit = () => {
    if (files.length > 0) {
      uploadFile({
        files,
      });
    }
  };

  return (
    <MainWrapper>
      <FileUploaderContainer>
        <StyledDragger {...uploadProps} listType="picture-card">
          <UploadContentContainer>
            <UploadIconWrapper className="ant-upload-drag-icon">
              <FileAddOutlined />
            </UploadIconWrapper>
            <UploadText>
              Выберите или перетащите файлы для преобразования
            </UploadText>
          </UploadContentContainer>
        </StyledDragger>
      </FileUploaderContainer>
      <FileUploaderSubmitButton onClick={onSubmit} $isPrimary={false}>
        Начать
      </FileUploaderSubmitButton>
      <ResultFilesList resultFilesUrls={resultFilesUrls}></ResultFilesList>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  max-width: 70%;
  margin: 50px auto;
`;

const FileUploaderContainer = styled.div`
  background-color: transparent;
  width: 100%;
`;

const UploadContentContainer = styled.div``;

const FileUploaderSubmitButton = styled(StyledButton)`
  max-width: 30%;
  margin: 20px 0;
`;

const UploadText = styled.p`
  font-size: 18px;
  font-family: "Montserrat" !important;
  color: ${ICONS_COLOR};
  transition: 0.3s;
`;

const UploadIconWrapper = styled.p`
  svg {
    fill: ${ICONS_COLOR};
    transition: 0.3s;
  }
`;

const StyledDragger = styled(Dragger)`
  .ant-upload-drag {
    background: ${MAIN_COLOR} !important;
    transition: 0.3s;

    :hover {
      box-shadow: 0 0 5px 2px ${ACCENT_COLOR};
      background: ${LAYOUT_COLOR} !important;

      p {
        color: ${ACCENT_COLOR};
      }

      svg {
        fill: ${ACCENT_COLOR};
      }
    }
  }

  .ant-upload-list {
    padding-top: 10px;
  }

  .ant-upload-list-item-name {
    font-family: "Montserrat" !important;
  }

  .ant-upload-list-item-container {
    background-color: ${LAYOUT_COLOR};
  }

  .ant-upload-list-item.ant-upload-list-item-done {
    &:before {
      background-color: ${MAIN_COLOR} !important;
      width: 100% !important;
      height: 100% !important;
      left: 0;
      border-radius: 8px;
    }
  }
`;

export default FileUploader;
