import { FC } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../../components/Typography";
import { Projects } from "../../skin/index";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import HandleClick from "../../utils/HandleClick";
import Project from "../../styles/Projects";
import React from 'react'
const Projects: FC<Projects> = ({
  projects,
  backgroundColor,
  // backgroundImage,
}) => {
  return (
    <Container
      component="section"
      sx={{ ...Project.container, bgcolor: backgroundColor }}
      maxWidth={false}
    >
      <Grid container sx={Project.gridItem}>
        {projects.map((project) => {
          return (
            <Card
              component="div"
              sx={Project.card}
              onClick={(e) => HandleClick(e, project.url)}
              key={project.id}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={Project.cardMedia}
                  image={project.backgroundImage}
                  alt="company project image"
                />
                <CardContent sx={Project.cardContent}>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Projects;
