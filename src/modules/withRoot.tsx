import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../styles/theme";

 const  withRoot = <P extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<P>
) => {
  const WithRoot = (props: P) => {
    return (
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </ThemeProvider>
    );
  };

  return WithRoot;
}

export default withRoot;
