const toggleMenu = document.querySelector(".toggle-menu")
const nav = document.querySelector(".nav-menu")

toggleMenu.addEventListener("click", () => {
    nav.classList.toggle("active")
})