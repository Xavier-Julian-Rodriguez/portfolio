import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Container from "@mui/material/Container";
import Typography from "../../components/Typography";
import contactStyles from "../../styles/ContactStyles";
import Button from "../../components/Button";
import Box from "@mui/material/Box";
const Contact = ({ title, description, url, backgroundColor }) => {
    return (_jsx(Box, { component: "section", sx: { ...contactStyles.sectionBox, bgcolor: backgroundColor }, children: _jsxs(Container, { component: "section", sx: contactStyles.container, children: [_jsx(Typography, { variant: "h4", component: "span", sx: contactStyles.title, children: title }), _jsx(Typography, { variant: "subtitle1", sx: contactStyles.description, children: description }), _jsx(Button, { variant: "contained", color: "info", href: url, target: "_blank", children: "Contact" })] }) }));
};
export default Contact;
