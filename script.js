//Functions
const exp = (dd, mm, yy) => {
  if (!yy) {
    return "Something is Wrong";
  }

  const today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  let d;
  let m;
  let y;

  let result;

  y = year - yy;
  if (month > mm) {
    m = month - mm;
  } else {
    y--;
    m = 12 + month - mm;
  }
  if (day > dd) {
    d = day - dd;
  } else {
    m--;
    d = new Date(yy, mm, 0).getDate() + day - dd;
  }

  if (y <= 0 && m !== 0) {
    result = `${m} months ${d} days `;
  } else if (y === 0 && m === 0) {
    result = `${d} days`;
  } else {
    result = `${y} years ${m} months ${d} days `;
  }
  return result;
};

//Navbar Show/Hide script start

let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll down - hide navbar
    navbar.classList.add("navbar-hidden");
  } else {
    // Scroll up - show navbar
    navbar.classList.remove("navbar-hidden");
  }

  lastScrollTop = scrollTop;
});

//Navbar Show/Hide script end

//Experience Section Start

const feExp = document.getElementById("fe-exp");
const mernExp = document.getElementById("mern-exp");
const otExp = document.getElementById("ot-exp");

feExp.textContent = `Learning Experience: ${exp(5, 3, 2024)}`;
mernExp.textContent = `Learning Experience: ${exp(14, 6, 2024)}`;
otExp.textContent = `Learning Experience: ${exp(5, 11, 2018)}`;
