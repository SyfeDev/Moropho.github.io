const MenuItems = document.querySelector(".menu-itmes")
const toggleBTN = document.querySelector("#toggleBtn")
console.log(MenuItems)
console.log(toggleBTN)

toggleBTN.addEventListener("click", () => {
    MenuItems.classList.toggle("visble")

})
const closeMenu = () => {
    MenuItems.classList.remove("visble");

};
document.addEventListener("click", (e) => {

    if (!MenuItems.contains(e.target) && !toggleBTN.contains(e.target)) {
        closeMenu();
    }
});

//     document.addEventListener("DOMContentLoaded", () => {
//     const menuToggleBtn = document.querySelector(".menu-icon");
//     const menu = document.getElementById("menuItems");

//     // Set initial accessibility state
//     menuToggleBtn.setAttribute("aria-expanded", "false");

//     // Toggle menu visibility
//     const toggleMenu = () => {
//         const isOpen = menu.classList.toggle("show");
//         menuToggleBtn.setAttribute("aria-expanded", isOpen);
//     };

//     // Close menu
//     const closeMenu = () => {
//         menu.classList.remove("show");
//         menuToggleBtn.setAttribute("aria-expanded", "false");
//     };

//     // Handle toggle click
//     menuToggleBtn.addEventListener("click", (e) => {
//         e.stopPropagation(); // Prevent click from bubbling up
//         toggleMenu();
//     });

//     // Close if clicking outside
//     document.addEventListener("click", (e) => {
//         if (!menu.contains(e.target) && !menuToggleBtn.contains(e.target)) {
//             closeMenu();
//         }
//     });

//     // Close on Escape key
//     document.addEventListener("keydown", (e) => {
//         if (e.key === "Escape") {
//             closeMenu();
//         }
//     });
// });
