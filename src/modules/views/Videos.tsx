import React, { FC } from "react";
import Container from "@mui/material/Container";
import Typography from "../../components/Typography";
import YouTube from "react-youtube";
import { ProductVideos } from "../../skin/index";
import Box from "@mui/material/Box";
import VideoContainer from "../../hooks/VideoContainer";
import VideoStyles from "../../styles/VideoStyles";

const Videos: FC<ProductVideos> = ({ videos, backgroundColor, fontColor }) => {
  const { opts, onPlayerReady } = VideoContainer();

  return (
    <Container
      component="section"
      maxWidth={false}
      sx={{ ...VideoStyles.container, bgcolor: backgroundColor }}
    >
      {videos.map((video) => (
        <React.Fragment key={video.videoId}>
          <Typography
            variant="h4"
            marked="center"
            align="center"
            component="h2"
            sx={{ ...VideoStyles.videoTitle, color: fontColor }}
          >
            {video.title}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            component="p"
            sx={{ ...VideoStyles.videoDescription, color: fontColor }}
          >
            {video.description}
          </Typography>
          <Box component="section" sx={VideoStyles.videoBox}>
            <YouTube
              videoId={video.videoId}
              opts={opts}
              onReady={onPlayerReady}
              loading="lazy"
            />
          </Box>
        </React.Fragment>
      ))}
    </Container>
  );
};

export default Videos;
