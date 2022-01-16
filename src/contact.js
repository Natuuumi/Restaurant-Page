import { homePage } from "./home";
import { menuDiv } from "./menu";
export const contactDiv = document.createElement("div");
const contentDiv = document.querySelector("#content");
export default function createContact() {
  contactDiv.removeAttribute("class", "hidden");
  homePage.setAttribute("class", "hidden");
  menuDiv.setAttribute("class", "hidden");
  contentDiv.append(contactDiv);
  contactDiv.innerHTML = `<h1>Contact us</h1>
    <img
      src="https://qph.fs.quoracdn.net/main-qimg-62171c91697aaecc50ff78e5caf10064-lq"
      alt=""
    />
    <h2>Come down to the shop BOZO!</h2>`;
}
