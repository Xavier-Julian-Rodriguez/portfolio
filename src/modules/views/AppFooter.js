import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Container from "@mui/material/Container";
import Typography from "../../components/Typography";
import Box from "@mui/material/Box";
import sharedFooterStyles from "../../styles/AppFooterStyles";
import { Link } from "@mui/material";
const AppFooter = ({ backgroundColor, heading, fontColor, description, social, socialLink, }) => {
    return (_jsxs(Container, { component: "section", maxWidth: false, sx: {
            ...sharedFooterStyles.container,
            bgcolor: backgroundColor,
        }, children: [_jsx(Typography, { variant: "subtitle1", alt: "brand logo", color: fontColor, sx: sharedFooterStyles.brand, children: heading }), _jsx(Typography, { variant: "subtitle2", color: fontColor, sx: sharedFooterStyles.productName, children: description }), _jsx(Link, { component: "a", href: socialLink, target: "_blank", children: _jsx(Box, { component: "img", src: social, alt: "brand logo", sx: {
                        ...sharedFooterStyles.social,
                        bgcolor: backgroundColor,
                    } }) })] }));
};
export default AppFooter;
