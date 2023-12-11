import { SxProps, Theme } from "@mui/system";
import { TypographyProps } from "@mui/material/Typography";

interface TypographyConfig {
  component: React.ElementType;
  color: string;
  align: TypographyProps["align"];
  variant: TypographyProps["variant"];
  sx?: SxProps<Theme>;
}

const ProductHeroStyles: Record<string, TypographyConfig> = {
  title: {
    component: "h2",
    color: "inherit",
    align: "center",
    variant: "h2",
    sx: {zIndex:3}
  },
  description: {
    component: "h5",
    color: "inherit",
    align: "center",
    variant: "h5",
    sx: { mb: 4, mt: { xs: 4, sm: 10 }, zIndex: 3 },
  },
};

export default ProductHeroStyles;
