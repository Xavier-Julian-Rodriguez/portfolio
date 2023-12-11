import * as React from "react";
import { ReactElement } from "react";

import { Theme, styled } from "@mui/material/styles";
import MuiSnackbar, { SnackbarProps } from "@mui/material/Snackbar";
import { snackbarContentClasses } from "@mui/material/SnackbarContent";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import { TransitionProps } from "@mui/material/transitions/transition";

const styles = ({ theme }: { theme: Theme }) =>
  ({
    [`& .${snackbarContentClasses.root}`]: {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.text.primary,
      flexWrap: "inherit",
      [theme.breakpoints.up("md")]: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
      },
    },
    [`& .${snackbarContentClasses.message}`]: {
      fontSize: 16,
      display: "flex",
      alignItems: "center",
    },
    [`& .${snackbarContentClasses.action}`]: {
      paddingLeft: theme.spacing(2),
    },
    "& .MuiSnackbarContent-info": {
      flexShrink: 0,
      marginRight: theme.spacing(2),
    },
    "& .MuiSnackbarContent-close": {
      padding: theme.spacing(1),
    },
  } as const);

const Transition = (props: TransitionProps & { children: ReactElement }) => {
  return <Slide {...props} direction="down" />;
};

const Snackbar = (props: SnackbarProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { message, closeFunc, ...other } = props as any;
  const classes = {
    info: "MuiSnackbarContent-info",
    close: "MuiSnackbarContent-close",
  };

  return (
    <MuiSnackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={6000}
      TransitionComponent={Transition}
      message={
        <React.Fragment>
          <InfoIcon className={classes.info} />
          <span>{message}</span>
        </React.Fragment>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          className={classes.close}
          onClick={() => closeFunc && closeFunc()}
        >
          <CloseIcon />
        </IconButton>,
      ]}
      {...other}
    />
  );
};

const StyledSnackbar = styled(Snackbar)(styles);
export default StyledSnackbar;
