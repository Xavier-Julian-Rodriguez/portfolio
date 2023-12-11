import * as React from "react";

// handleClick function extracted into a separate file
const HandleClick = (e: React.MouseEvent<HTMLElement>, url: string): void => {
  e.preventDefault();
  window.open(url, "_blank");
};

export default HandleClick;
