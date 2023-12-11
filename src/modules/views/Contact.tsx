import { FC } from "react";
import Container from "@mui/material/Container";
import Typography from "../../components/Typography";
import { Contact } from "../../skin/index";
import contactStyles from "../../styles/ContactStyles";
import Button from "../../components/Button";
import Box from "@mui/material/Box";

const Contact: FC<Contact> = ({ title, description, url, backgroundColor }) => {
  return (
    <Box
    component="section"
    sx={{ ...contactStyles.sectionBox, bgcolor: backgroundColor }}
  >
    <Container component="section" sx={contactStyles.container}>
      <Typography variant="h4" component="span" sx={contactStyles.title}>
        {title}
      </Typography>
      <Typography variant="subtitle1" sx={contactStyles.description}>
        {description}
      </Typography>
      <Button variant="contained" color="info" href={url} target={"_blank"}>
        Contact
      </Button>
    </Container>
    </Box>
  );
};

export default Contact;
