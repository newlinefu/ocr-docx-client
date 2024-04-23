import styled from "styled-components";
import { Button } from "antd";
import {
  ACCENT_COLOR,
  ICONS_COLOR,
  LAYOUT_COLOR,
  MAIN_COLOR,
  TEXT_COLOR,
} from "../constants";

const StyledButton = styled(Button)<{
  $isPrimary?: boolean;
  $height?: number;
  $width?: string;
  $outlined?: boolean;
}>`
  border-radius: 12px;
  width: ${({ $width }) => $width || "100%"};
  height: ${({ $height }) => $height || 40}px;
  font-family: "Sulphur Point" !important;
  font-size: 22px;
  line-height: 22px;
  color: ${({ $isPrimary }) => ($isPrimary ? ICONS_COLOR : TEXT_COLOR)};
  background-color: ${({ $isPrimary }) =>
    $isPrimary ? ACCENT_COLOR : LAYOUT_COLOR};

  box-shadow: none;
  border: ${({ $outlined }) =>
    $outlined ? "none" : `1px solid ${MAIN_COLOR} !important`};

  &:hover {
    &:not(:disabled) {
      color: ${({ $isPrimary }) =>
        $isPrimary ? ICONS_COLOR : TEXT_COLOR} !important;
      background-color: ${({ $isPrimary }) =>
        $isPrimary ? ACCENT_COLOR : LAYOUT_COLOR} !important;
      border-radius: 24px;
    }
  }

  &:disabled,
  &[disabled] {
    cursor: default;
    color: ${({ $isPrimary }) => ($isPrimary ? ICONS_COLOR : TEXT_COLOR)};
    background-color: ${({ $isPrimary }) =>
      $isPrimary ? ACCENT_COLOR : LAYOUT_COLOR};

    opacity: 0.6;
  }
`;

export default StyledButton;
