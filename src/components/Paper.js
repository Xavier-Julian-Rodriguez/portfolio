import { jsx as _jsx } from "react/jsx-runtime";
import MuiPaper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
const PaperRoot = styled(MuiPaper, {
    shouldForwardProp: (prop) => prop !== "background" && prop !== "padding",
})(({ theme, background, padding }) => ({
    backgroundColor: theme.palette.secondary[background],
    ...(padding && {
        padding: theme.spacing(1),
    }),
}));
const Paper = (props) => {
    const { background, className, padding = false, ...other } = props;
    return (_jsx(PaperRoot, { square: true, elevation: 0, background: background, padding: padding, className: className, ...other }));
};
export default Paper;
