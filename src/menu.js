import { homePage } from "./home";
import { contactDiv } from "./contact";
const contentDiv = document.querySelector("#content");
export const menuDiv = document.createElement("div");
export default function createMenu() {
  menuDiv.removeAttribute("class", "hidden");
  homePage.setAttribute("class", "hidden");
  contactDiv.setAttribute("class", "hidden");
  contentDiv.append(menuDiv);
  menuDiv.innerHTML = `<div id="menu">
  <h1>Naruto Special 14.99</h1>
  <img
    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f1ddda39-42ed-4709-968d-f3100a9fc367/de77w60-c6b1e32e-567d-4e4b-9ec1-99b5ba45d84f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YxZGRkYTM5LTQyZWQtNDcwOS05NjhkLWYzMTAwYTlmYzM2N1wvZGU3N3c2MC1jNmIxZTMyZS01NjdkLTRlNGItOWVjMS05OWI1YmE0NWQ4NGYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gxYIbqUpMKffxQdyhvu2M0F69z_Zil5AwF4wZUhPeBU"
    alt=""
  />
  <h2>Ingredients</h2>
  <ul>
    <li>ramen noodles</li>
    <li>pork or beef broth</li>
    <li>Pork Tenderloin</li>
    <li>2 Eggs</li>
    <li>1 Baby bok choy</li>
    <li>1 Green Onion</li>
    <li>Soy Sauce</li>
    <li>Aburage</li>
    <li>Nori</li>
    <li>Kamaboko</li>
  </ul>
</div>`;
}
