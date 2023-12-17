import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import AppFooter from "./modules/views/AppFooter";
import ProductHero from "./modules/views/ProductHero";
import Tools from "./modules/views/Tools";
import Projects from "./modules/views/Projects";
import Contact from "./modules/views/Contact";
import AppAppBar from "./modules/views/AppAppBar";
import withRoot from "./modules/withRoot";
import Favicon from "react-favicon";
import skin from "./index";
const App = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Favicon, { url: skin.favicon }), _jsx(AppAppBar, { title: skin.title }), _jsx(ProductHero, { ...skin.product }), _jsx(Projects, { projects: skin.projects?.projects || [], backgroundColor: skin.projects?.backgroundColor || "" }), _jsx(Tools, { tools: skin.tool?.tools || [], backgroundImage: skin.tool?.backgroundImage || "", backgroundColor: skin.tool?.backgroundColor || "" }), _jsx(Contact, { title: skin.contact?.title || "", description: skin.contact?.description || "", url: skin.contact?.url || "", backgroundColor: skin.contact?.backgroundColor || "" }), _jsx(AppFooter, { backgroundColor: skin.footer?.backgroundColor || "", heading: skin.footer?.heading || "", description: skin.footer?.description || "", fontColor: skin.footer?.fontColor || "", social: skin.footer?.social || "", socialLink: skin.footer?.socialLink || "" })] }));
};
const RootedApp = withRoot(App);
export default RootedApp;
