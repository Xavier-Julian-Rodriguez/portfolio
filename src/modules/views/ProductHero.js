import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Typography from "@mui/material/Typography";
import ProductHeroLayout from "../../components/ProductHeroLayout";
import ProductHeroStyles from "../../styles/ProductHeroStyles";
const ProductHero = ({ title, description, backgroundColor, backgroundImage, }) => {
    return (_jsxs(ProductHeroLayout, { sxBackground: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundColor: backgroundColor,
            backgroundPosition: "center",
        }, children: [_jsx(Typography, { ...ProductHeroStyles.title, children: title }), _jsx(Typography, { ...ProductHeroStyles.description, children: description })] }));
};
export default ProductHero;
