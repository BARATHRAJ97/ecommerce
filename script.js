const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const cartCount = document.querySelector("#cartCount");
const addButtons = document.querySelectorAll(".add-cart");

let cartItems = 0;

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartItems += 1;
    cartCount.textContent = cartItems;
    button.textContent = "Added";
    button.classList.add("added");

    window.setTimeout(() => {
      button.textContent = "Add";
      button.classList.remove("added");
    }, 1200);
  });
});
