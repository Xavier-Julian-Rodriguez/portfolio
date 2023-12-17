import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../styles/theme";
const withRoot = (Component) => {
    const WithRoot = (props) => {
        return (_jsxs(ThemeProvider, { theme: theme, children: [_jsx(CssBaseline, {}), _jsx(Component, { ...props })] }));
    };
    return WithRoot;
};
export default withRoot;
