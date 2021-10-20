import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { CreatePassword } from "./components/CreatePassword";
import { GlobalStyles } from "./styles/GlobalStyles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#664d8fa6",
      darker: "#053e85",
    },
  },
  secondary: "#664d8fa6",
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <AppWrapper>
          <CreatePassword />
        </AppWrapper>
    </ThemeProvider>
  );
};

const AppWrapper = styled("div")`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
