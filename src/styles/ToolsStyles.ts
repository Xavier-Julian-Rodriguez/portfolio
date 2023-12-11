import { SxProps, Theme } from "@mui/system";

const ToolsStyles: Record<string, SxProps<Theme>> = {
  sectionBox: {
    display: "flex",
    overflow: "hidden",
  },
  container: {
    mt: 5,
    mb: 5,
    display: "flex",
    position: "relative",
  },
  backgroundImage: {
    pointerEvents: "none",
    position: "absolute",
    left: -130,
    right: 0,
    top: -50,
    bottom: 0,
    backgroundSize: "cover",
    zIndex: 0,
    opacity: 0.05,
  },
  gridItemBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: 5,
  },
  toolIcon: {
    height: 50,
  },
  toolTitle: {
    my: 2,
  },
  toolDescription: {},
};

export default ToolsStyles;
