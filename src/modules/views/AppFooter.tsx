import { FC } from "react";
import Container from "@mui/material/Container";
import Typography from "../../components/Typography";
import Box from "@mui/material/Box";
import sharedFooterStyles from "../../styles/AppFooterStyles";
import { SxProps, Theme } from "@mui/system";
import { Link } from "@mui/material";

// Define the props type for AppFooter
interface FooterProps {
  backgroundColor: string | undefined;
  heading: string;
  fontColor: string;
  description: string;
  social: string;
  socialLink: string;
}

const AppFooter: FC<FooterProps> = ({
  backgroundColor,
  heading,
  fontColor,
  description,
  social,
  socialLink,
}) => {
  return (
    <Container
      component="section"
      maxWidth={false}
      sx={
        {
          ...sharedFooterStyles.container,
          bgcolor: backgroundColor,
        } as SxProps<Theme>
      }
    >
      <Typography
        variant="subtitle1"
        alt="brand logo"
        color={fontColor}
        sx={sharedFooterStyles.brand as SxProps<Theme>}
      >
        {heading}
      </Typography>
      <Typography
        variant="subtitle2"
        color={fontColor}
        sx={sharedFooterStyles.productName as SxProps<Theme>}
      >
        {description}
      </Typography>
      <Link component="a" href={socialLink} target="_blank">
        <Box
          component="img"
          src={social}
          alt="brand logo"
          sx={
            {
              ...sharedFooterStyles.social,
              bgcolor: backgroundColor,
            } as SxProps<Theme>
          }
        ></Box>
      </Link>
    </Container>
  );
};

export default AppFooter;
