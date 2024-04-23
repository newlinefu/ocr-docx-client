import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import RoutesMap from "./routes/routes-mapper";
import mainRoutesMap from "./routes/main-routes-map";
import { CookiesProvider } from "react-cookie";
import styled from "styled-components";

function App() {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <BrowserRouter>
          <MainHTMLContentContainer>
            <RoutesMap routesMap={mainRoutesMap} />
          </MainHTMLContentContainer>
        </BrowserRouter>
      </Provider>
    </CookiesProvider>
  );
}

const MainHTMLContentContainer = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
  margin: 0 30px;
`;
export default App;
