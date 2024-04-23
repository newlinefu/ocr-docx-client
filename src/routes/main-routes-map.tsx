import styled from "styled-components";
import MainPage from "../modules/file-uploader";
import MainLoader from "../lib/components/main-loader";

const mainRoutesMap = {
  "/general/*": {
    component: () => (
      <DummyPage>
        <MainLoader />
      </DummyPage>
    ),
  },
  "/login": {
    component: () => <></>,
  },
  "/registration": {
    component: () => <></>,
  },
  "/": {
    component: () => <MainPage />,
  },
};

const DummyPage = styled.div`
  height: 100%;
`;

export default mainRoutesMap;
