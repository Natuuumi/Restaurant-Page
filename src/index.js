import "./style.css";
import createMenu from "./menu";
import createHome from "./home";
import createContact from "./contact";
const contentDiv = document.querySelector("#content");
const home = document.querySelector("#homeButton");
const menu = document.querySelector("#menuButton");
const contactUs = document.querySelector("#contactButton");
console.log("hello");
createHome();
home.addEventListener("click", (e) => {
  createHome();
});

menu.addEventListener("click", (e) => {
  createMenu();
});

contactUs.addEventListener("click", (e) => {
  createContact();
});
