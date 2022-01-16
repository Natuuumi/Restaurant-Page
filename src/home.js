import { menuDiv } from "./menu";
import { contactDiv } from "./contact";
const contentDiv = document.querySelector("#content");
export const homePage = document.createElement("div");
export default function createHome() {
  homePage.removeAttribute("class", "hidden");
  menuDiv.setAttribute("class", "hidden");
  contactDiv.setAttribute("class", "hidden");

  contentDiv.append(homePage);
  homePage.innerHTML = `<div id="description">
  <div id="intro">
    <h1>Welcome to the Weeb Cafe!</h1>
    <p>We literally only have RAMEN!!!</p>
  </div>
  
  <img
    src="https://static.wikia.nocookie.net/1d276683-ef52-49bd-843a-786e3cc2dd24/scale-to-width/755"
    style="width: 30vw"
  />
  </div>
  <div id="hours">
  <h1>Hours</h1>
  <p>
    Saturday 11a.m. – 9p.m. <br />
    Sunday 11a.m. – 9p.m.<br />
    Monday 11a.m. – 9p.m.<br />
    Tuesday 11a.m. – 9p.m.<br />
    Wednesday 11a.m. – 9p.m.<br />
    Thursday 11a.m. – 9p.m.<br />
    Friday 11a.m. – 9p.m.
  </p>
  </div>
  <div id="location">
  <h1>Our Location</h1>
  <p>5325 yep st</p>
  </div>`;
}
