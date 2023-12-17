import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiSnackbar from "@mui/material/Snackbar";
import { snackbarContentClasses } from "@mui/material/SnackbarContent";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
const styles = ({ theme }) => ({
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
});
const Transition = (props) => {
    return _jsx(Slide, { ...props, direction: "down" });
};
const Snackbar = (props) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { message, closeFunc, ...other } = props;
    const classes = {
        info: "MuiSnackbarContent-info",
        close: "MuiSnackbarContent-close",
    };
    return (_jsx(MuiSnackbar, { anchorOrigin: { vertical: "top", horizontal: "center" }, autoHideDuration: 6000, TransitionComponent: Transition, message: _jsxs(React.Fragment, { children: [_jsx(InfoIcon, { className: classes.info }), _jsx("span", { children: message })] }), action: [
            _jsx(IconButton, { "aria-label": "close", color: "inherit", className: classes.close, onClick: () => closeFunc && closeFunc(), children: _jsx(CloseIcon, {}) }, "close"),
        ], ...other }));
};
const StyledSnackbar = styled(Snackbar)(styles);
export default StyledSnackbar;
