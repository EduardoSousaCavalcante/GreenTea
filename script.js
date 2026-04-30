window.addEventListener("scroll", () => {
    const header = document.querySelector(".topo");
    if (window.scrollY > 80) {
        header.style.padding = "15px 60px";
        header.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        header.style.backdropFilter = "blur(10px)";
    } else {
        header.style.padding = "30px 60px";
        header.style.backgroundColor = "transparent";
        header.style.backdropFilter = "none";
    }
});