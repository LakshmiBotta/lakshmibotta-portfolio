let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  // Get the height of the sec section
  let secSection = document.querySelector(".sec");
  let secHeight = secSection.offsetTop + secSection.offsetHeight; // Top offset + height

  // Limit scrolling to the height of the sec section
  if (value > secHeight - window.innerHeight) {
    value = secHeight - window.innerHeight; // Stop scrolling
  }

  text.style.marginTop = value * 2.5 + "px";
  leaf.style.top = value * -1.5 + "px";
  leaf.style.left = value * 1.5 + "px";
  hill5.style.left = value * 1.5 + "px";
  hill4.style.left = value * -1.5 + "px";
  hill1.style.top = value * 1 + "px";
});

document
  .getElementById("scrollToTop")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Enable smooth scrolling
    });
  });

