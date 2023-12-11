import { FC } from "react";
import Typography from "@mui/material/Typography";
import ProductHeroLayout from "../../components/ProductHeroLayout";
import { Product } from "../../skin/index";
import ProductHeroStyles from "../../styles/ProductHeroStyles";

const ProductHero: FC<Product> = ({
  title,
  description,
  backgroundColor,
  backgroundImage,
}) => {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: backgroundColor,
        backgroundPosition: "center",
      }}
    >
      <Typography {...ProductHeroStyles.title}>{title}</Typography>
      <Typography {...ProductHeroStyles.description}>{description}</Typography>
    </ProductHeroLayout>
  );
};

export default ProductHero;
