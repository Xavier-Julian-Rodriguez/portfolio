import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../../components/Typography";
import ToolsStyles from "../../styles/ToolsStyles";
const Tools = ({ tools, backgroundImage, backgroundColor }) => {
    return (_jsx(Box, { component: "section", sx: { ...ToolsStyles.sectionBox, bgcolor: backgroundColor }, children: _jsxs(Container, { sx: ToolsStyles.container, children: [_jsx(Box, { component: "img", src: backgroundImage, sx: ToolsStyles.backgroundImage }), _jsx(Grid, { container: true, spacing: 5, children: tools.map((tool) => (_jsx(Grid, { item: true, xs: 12, md: 4, children: _jsxs(Box, { sx: ToolsStyles.gridItemBox, children: [_jsx(Box, { component: "img", src: tool.icon, alt: "tool icon", sx: ToolsStyles.toolIcon }), _jsx(Typography, { variant: "h6", sx: ToolsStyles.toolTitle, children: tool.title }), _jsx(Typography, { variant: "h5", sx: ToolsStyles.toolDescription, children: tool.description })] }) }, tool.id))) })] }) }));
};
export default Tools;
