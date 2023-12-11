import MuiAppBar, { AppBarProps } from "@mui/material/AppBar";
import React from 'react'
const AppBar = (props: AppBarProps) => {
  return <MuiAppBar elevation={0} position="fixed" {...props} />;
};

export default AppBar;
