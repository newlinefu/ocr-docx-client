import styled from "styled-components";
import { Form } from "antd";
import { LAYOUT_COLOR } from "../constants.ts";
const { Item } = Form;

const StyledItem = styled(Item)`
  & .ant-form-item-label {
    label {
      font-size: 26px !important;
      line-height: 40px !important;
      font-family: "Montserrat" !important;
      font-weight: 400;
      color: ${LAYOUT_COLOR};
    }
  }

  & .ant-col.ant-form-item-label {
    padding: 0 !important;
  }
`;

export default StyledItem;
