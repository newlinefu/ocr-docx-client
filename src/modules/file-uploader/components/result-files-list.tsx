import styled from "styled-components";
import { ACCENT_COLOR, ICONS_COLOR } from "../../../lib/constants.ts";
import { FileOutlined } from "@ant-design/icons";

interface ResultFilesListProps {
  resultFilesUrls: string[];
}

const ResultFilesList = (props: ResultFilesListProps) => {
  const { resultFilesUrls } = props;

  return (
    <ResultFileListWrapper>
      {resultFilesUrls.map((url, index) => (
        <SingleFileWrapper>
          <DownloadLink href={`${import.meta.env.VITE_OCR_BACKEND}${url}`}>
            <LinkContent>
              <LinkContentIcon>
                <FileOutlined />
              </LinkContentIcon>
              <LinkContentLabel>
                Результат {index > 0 ? `(${index})` : ""}
              </LinkContentLabel>
            </LinkContent>
          </DownloadLink>
        </SingleFileWrapper>
      ))}
    </ResultFileListWrapper>
  );
};

const ResultFileListWrapper = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
`;

const SingleFileWrapper = styled.div`
  border-radius: 8px;
  width: 100px;
  height: 100px;
  margin: 10px 0;
  background-color: ${ACCENT_COLOR};
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;

  svg {
    width: 30px;
    height: 30px;
  }
`;

const DownloadLink = styled.a`
  text-decoration: none;
  color: ${ICONS_COLOR};
  font-size: 18px;
`;

const LinkContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  text-align: center;
`;

const LinkContentIcon = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkContentLabel = styled.p`
  display: flex;
  justify-content: center;
  margin: 0;
  font-size: 14px;
`;

export default ResultFilesList;
