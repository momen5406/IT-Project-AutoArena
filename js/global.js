const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent the click from bubbling up
    menu.style.right = "0";
});

// Hide menu when clicking outside
document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && e.target !== menuButton) {
        menu.style.right = "-100%";
    }
});
