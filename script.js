const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const cartCount = document.querySelector("#cartCount");
const addButtons = document.querySelectorAll(".add-cart");
const forms = document.querySelectorAll("form");

let cartItems = Number(localStorage.getItem("urbanCartItems") || 0);

if (cartCount) {
  cartCount.textContent = cartItems;
}

if (menuToggle && navLinks) {
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
}

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartItems += 1;
    localStorage.setItem("urbanCartItems", String(cartItems));

    if (cartCount) {
      cartCount.textContent = cartItems;
    }

    button.textContent = "Added";
    button.classList.add("added");

    window.setTimeout(() => {
      button.textContent = "Add";
      button.classList.remove("added");
    }, 1200);
  });
});

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const submitButton = form.querySelector("button[type='submit']");

    if (!submitButton) return;

    const originalText = submitButton.textContent;
    submitButton.textContent = "Sent";

    window.setTimeout(() => {
      submitButton.textContent = originalText;
      form.reset();
    }, 1400);
  });
});
