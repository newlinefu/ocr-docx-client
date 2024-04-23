import styled from "styled-components";
import { Input } from "antd";
import { ERROR_COLOR, MAIN_COLOR } from "../constants";

const StyledInput = styled(Input)<{ $maxWidth?: string; height?: number }>`
  border-radius: 6px;
  max-width: ${({ $maxWidth }) => $maxWidth || ""};
  height: ${({ height }) => height || 40}px;

  &.ant-input:hover {
    border-color: ${MAIN_COLOR} !important;
  }

  &.ant-input:focus {
    border-color: ${MAIN_COLOR} !important;
  }

  &.ant-input-status-error {
    border-color: ${ERROR_COLOR} !important;
  }
`;

export default StyledInput;
