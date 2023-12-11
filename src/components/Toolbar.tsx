import { styled } from "@mui/material/styles";
import MuiToolbar from "@mui/material/Toolbar";
import React from 'react'
const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  height: 64,
  [theme.breakpoints.up("sm")]: {
    height: 70,
  },
}));

export default Toolbar;
