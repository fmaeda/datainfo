import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import UploadForm from "./components/UploadForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

function App() {
  return (
    <Container>
      <Global
        styles={css`
          body {
            display: flex;
            flex-direction: column;
            width: 100vw;
            height: 100vh;
            background: white;
          }
          #root {
            display: flex;
            flex-direction: column;
            flex: 1;
            background: white;
          }
        `}
      />
      <UploadForm />
    </Container>
  );
}

export default App;
