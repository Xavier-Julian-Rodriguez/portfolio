import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
const ProductHeroLayoutRoot = styled("section")(({ theme }) => ({
    color: theme.palette.common.black,
    position: "relative",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        height: "80vh",
        minHeight: 500,
        maxHeight: 1300,
    },
}));
const Background = styled(Box)({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: 0,
    opacity: 0.15,
});
const ProductHeroLayout = (props) => {
    const { sxBackground, children } = props;
    return (_jsx(ProductHeroLayoutRoot, { children: _jsxs(Container, { sx: {
                mt: 3,
                mb: 14,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }, children: [children, _jsx(Box, { sx: {
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundColor: "common.black",
                        opacity: 0.25,
                        zIndex: -1,
                    } }), _jsx(Background, { sx: sxBackground }), _jsx(Box, { component: "img", src: "https://mui.com/static/themes/onepirate/productHeroArrowDown.png", height: "16", width: "12", alt: "arrow down", sx: { position: "absolute", bottom: 32 } })] }) }));
};
export default ProductHeroLayout;
