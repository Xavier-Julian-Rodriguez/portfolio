import ReactMarkdown from "markdown-to-jsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import React from 'react'
interface MarkdownProps {
  children: string;
  // Include other props here if needed
}
const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h4",
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: "h6" },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: "subtitle1" },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "caption",
        paragraph: true,
      },
    },
    p: {
      component: Typography,
      props: { paragraph: true },
    },
    a: { component: Link },
    li: {
      component: (props: unknown) => (
        <Box component="li" sx={{ mt: 1 }}>
          <Typography component="span" {...(props as object)} />
        </Box>
      ),
    },
  },
};

const Markdown = ({ children, ...otherProps }: MarkdownProps) => {
  return (
    <ReactMarkdown options={options} {...otherProps}>
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;
