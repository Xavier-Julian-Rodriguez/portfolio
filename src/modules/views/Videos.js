import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import Container from "@mui/material/Container";
import Typography from "../../components/Typography";
import YouTube from "react-youtube";
import Box from "@mui/material/Box";
import VideoContainer from "../../hooks/VideoContainer";
import VideoStyles from "../../styles/VideoStyles";
const Videos = ({ videos, backgroundColor, fontColor }) => {
    const { opts, onPlayerReady } = VideoContainer();
    return (_jsx(Container, { component: "section", maxWidth: false, sx: { ...VideoStyles.container, bgcolor: backgroundColor }, children: videos.map((video) => (_jsxs(React.Fragment, { children: [_jsx(Typography, { variant: "h4", marked: "center", align: "center", component: "h2", sx: { ...VideoStyles.videoTitle, color: fontColor }, children: video.title }), _jsx(Typography, { variant: "h5", align: "center", color: "text.secondary", component: "p", sx: { ...VideoStyles.videoDescription, color: fontColor }, children: video.description }), _jsx(Box, { component: "section", sx: VideoStyles.videoBox, children: _jsx(YouTube, { videoId: video.videoId, opts: opts, onReady: onPlayerReady, loading: "lazy" }) })] }, video.videoId))) }));
};
export default Videos;
