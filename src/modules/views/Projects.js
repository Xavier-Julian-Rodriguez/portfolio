import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../../components/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import HandleClick from "../../utils/HandleClick";
import Project from "../../styles/Projects";
const Projects = ({ projects, backgroundColor,
// backgroundImage,
 }) => {
    return (_jsx(Container, { component: "section", sx: { ...Project.container, bgcolor: backgroundColor }, maxWidth: false, children: _jsx(Grid, { container: true, sx: Project.gridItem, children: projects.map((project) => {
                return (_jsx(Card, { component: "div", sx: Project.card, onClick: (e) => HandleClick(e, project.url), children: _jsxs(CardActionArea, { children: [_jsx(CardMedia, { component: "img", sx: Project.cardMedia, image: project.backgroundImage, alt: "company project image" }), _jsxs(CardContent, { sx: Project.cardContent, children: [_jsx(Typography, { gutterBottom: true, variant: "h5", component: "div", children: project.title }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: project.description })] })] }) }, project.id));
            }) }) }));
};
export default Projects;
