import { jsx as _jsx } from "react/jsx-runtime";
import MuiAppBar from "@mui/material/AppBar";
const AppBar = (props) => {
    return _jsx(MuiAppBar, { elevation: 0, position: "fixed", ...props });
};
export default AppBar;
