const overlay = document.getElementById("overlay");

window.document.addEventListener("mousemove", (e) => {
    overlay.style.setProperty("--x", `${e.clientX}px`);
    overlay.style.setProperty("--y", `${e.clientY}px`);
});
