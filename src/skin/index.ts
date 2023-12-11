export interface Section {
  backgroundImage?: string;
  backgroundColor?: string;
}

export interface Product extends Section {
  title: string;
  description?: string;
}

export interface Tool {
  title: string;
  description: string;
  icon: string;
  id?: number;
}

export interface Tools extends Section {
  tools: Tool[];
}

export interface Video {
  title: string;
  description: string;
  videoId: string;
}

export interface ProductVideos extends Section {
  videos: Video[];
  fontColor: string;
}

export interface Project extends Section {
  title: string;
  description: string;
  url: string;
  id?: number;
}

export interface Projects extends Section {
  projects: Project[];
}

export interface Contact extends Section {
  title: string;
  description?: string;
  url: string;
}

export interface Footer extends Section {
  heading: string;
  description: string;
  fontColor: string;
  social: string;
  socialLink: string;
}

export interface Skin {
  title: string;
  favicon: string;
  siteName: string;
  product: Product;
  tool?: Tools;
  video?: ProductVideos;
  projects?: Projects;
  contact?: Contact;
  footer?: Footer;
}

export default Skin;
