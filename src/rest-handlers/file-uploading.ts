import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8000",
});

const uploadFiles = async (files: Blob[]) => {
  const formData = new FormData();
  files.forEach((file, index) => formData.append(`file-${index}`, file));
  const response = await request.post(
    "/ocr-doc-transformer/api/upload-file/",
    formData
  );
  return response.data;
};

export { uploadFiles };
