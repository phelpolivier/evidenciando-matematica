const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");
let zoomed = false;

document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalImg.style.transform = "scale(1)";
    zoomed = false;
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        modalImg.style.transform = "scale(1)";
        zoomed = false;
    }
});

modalImg.addEventListener("click", (e) => {
    e.stopPropagation();
    zoomed = !zoomed;
    modalImg.style.transform = zoomed ? "scale(2)" : "scale(1)";
    modalImg.style.cursor = zoomed ? "zoom-out" : "zoom-in";
});