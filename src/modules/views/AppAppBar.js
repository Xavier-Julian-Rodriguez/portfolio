import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import AppBar from "../../components/AppBar";
import Toolbar from "../../components/Toolbar";
import Typography from "../../components/Typography";
const AppAppBar = ({ title }) => {
    return (_jsxs("div", { children: [_jsx(AppBar, { position: "fixed", children: _jsxs(Toolbar, { sx: { justifyContent: "center" }, children: [_jsx(Box, { sx: { alignItems: "center" } }), _jsx(Typography, { variant: "h6", color: "inherit", sx: { fontSize: 24 }, children: title })] }) }), _jsx(Toolbar, {})] }));
};
export default AppAppBar;
