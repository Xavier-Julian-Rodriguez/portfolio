import Box from "@mui/material/Box";
import AppBar from "../../components/AppBar";
import Toolbar from "../../components/Toolbar";
import Typography from "../../components/Typography";
import { FC } from "react";

export interface Props {
  title: string;
}

const AppAppBar: FC<Props> = ({ title }) => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "center" }}>
          <Box sx={{ alignItems: "center" }} />
          <Typography variant="h6" color="inherit" sx={{ fontSize: 24 }}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default AppAppBar;
