// MOBILE MENU
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("main-nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// CONTACT FORM
const form = document.getElementById("contact-form");
const statusBox = document.getElementById("form-status");

form.addEventListener("submit", function(e){
  e.preventDefault();

  statusBox.textContent = "Thank you! This form is a demo.";
  statusBox.style.color = "green";

  form.reset();
});
