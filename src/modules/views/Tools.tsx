import { FC } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../../components/Typography";
import { Tools } from "../../skin/index";
import ToolsStyles from "../../styles/ToolsStyles";
import React from 'react'
const Tools: FC<Tools> = ({ tools, backgroundImage, backgroundColor }) => {
  return (
    <Box
      component="section"
      sx={{ ...ToolsStyles.sectionBox, bgcolor: backgroundColor }}
    >
      <Container sx={ToolsStyles.container}>
        <Box
          component="img"
          src={backgroundImage}
          sx={ToolsStyles.backgroundImage}
        />
        <Grid container spacing={5}>
          {tools.map((tool) => (
            <Grid item xs={12} md={4} key={tool.id}>
              <Box sx={ToolsStyles.gridItemBox}>
                <Box
                  component="img"
                  src={tool.icon}
                  alt="tool icon"
                  sx={ToolsStyles.toolIcon}
                />
                <Typography variant="h6" sx={ToolsStyles.toolTitle}>
                  {tool.title}
                </Typography>
                <Typography variant="h5" sx={ToolsStyles.toolDescription}>
                  {tool.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Tools;
