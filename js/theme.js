function setTheme() {
  const html = document.documentElement;
  const avatar = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    avatar.setAttribute("src", "./assets/avatar-light.jpg");
    window.localStorage.setItem("theme", "light");
  } else {
    avatar.setAttribute("src", "./assets/avatar.jpg");
    window.localStorage.removeItem("theme");
  }
}

export function loadTheme() {
  const theme = window.localStorage.getItem("theme");
  const html = document.documentElement;

  if (theme && theme === "light") {
    html.classList.add("light");
  } else {
    html.classList.remove("light");
  }

  setTheme();
}

export function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle("light");

  setTheme();
}
