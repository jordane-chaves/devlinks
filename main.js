import { loadTheme, toggleMode } from "./js/theme.js";
import { addLinks } from "./js/links.js";

window.addEventListener("load", () => {
  loadTheme();
  addLinks();
});

document.getElementById("switch").addEventListener("click", toggleMode);
