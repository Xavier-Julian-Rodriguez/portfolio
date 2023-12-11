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
  return (
    <>
      <Favicon url={skin.favicon} />

      <AppAppBar title={skin.title} />
      <ProductHero {...skin.product} />
      <Projects
        projects={skin.projects?.projects || []}
        backgroundColor={skin.projects?.backgroundColor || ""}
      />
      <Tools
        tools={skin.tool?.tools || []}
        backgroundImage={skin.tool?.backgroundImage || ""}
        backgroundColor={skin.tool?.backgroundColor || ""}
      />
      {/* <Videos
        videos={skin.video?.videos || []}
        backgroundColor={skin.video?.backgroundColor || ""}
        backgroundImage={skin.video?.backgroundImage || ""}
        fontColor={skin.video?.fontColor || ""}
      /> */}
      <Contact
        title={skin.contact?.title || ""}
        description={skin.contact?.description || ""}
        url={skin.contact?.url || ""}
        backgroundColor={skin.contact?.backgroundColor || ""}
      />
      <AppFooter
        backgroundColor={skin.footer?.backgroundColor || ""}
        heading={skin.footer?.heading || ""}
        description={skin.footer?.description || ""}
        fontColor={skin.footer?.fontColor || ""}
        social={skin.footer?.social || ""}
        socialLink={skin.footer?.socialLink || ""}
      />
    </>
  );
};

const RootedApp = withRoot(App);
export default RootedApp;
