// handleClick function extracted into a separate file
const HandleClick = (e, url) => {
    e.preventDefault();
    window.open(url, "_blank");
};
export default HandleClick;
