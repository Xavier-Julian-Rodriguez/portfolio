import { jsx as _jsx } from "react/jsx-runtime";
import ReactMarkdown from "markdown-to-jsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
const options = {
    overrides: {
        h1: {
            component: Typography,
            props: {
                gutterBottom: true,
                variant: "h4",
            },
        },
        h2: {
            component: Typography,
            props: { gutterBottom: true, variant: "h6" },
        },
        h3: {
            component: Typography,
            props: { gutterBottom: true, variant: "subtitle1" },
        },
        h4: {
            component: Typography,
            props: {
                gutterBottom: true,
                variant: "caption",
                paragraph: true,
            },
        },
        p: {
            component: Typography,
            props: { paragraph: true },
        },
        a: { component: Link },
        li: {
            component: (props) => (_jsx(Box, { component: "li", sx: { mt: 1 }, children: _jsx(Typography, { component: "span", ...props }) })),
        },
    },
};
const Markdown = ({ children, ...otherProps }) => {
    return (_jsx(ReactMarkdown, { options: options, ...otherProps, children: children }));
};
export default Markdown;
