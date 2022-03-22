import React, { FC } from "react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

import customTheme from "../theme";

const App: FC = () => (
  <ThemeProvider theme={customTheme}>
    <CssBaseline>
      <Typography variant="h2">Going Sunny</Typography>
    </CssBaseline>
  </ThemeProvider>
);

export default App;
