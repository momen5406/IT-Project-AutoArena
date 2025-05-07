// Navbar Manu
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("open");
});

// Navbar Profile
const profileButton = document.getElementById("profile-button");
const profile = document.getElementById("profile");

profileButton.addEventListener("click", () => {
    profile.classList.toggle("appear");
});

