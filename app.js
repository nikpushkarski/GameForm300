import gamesList from "./games.js";
import {
  myCount,
  updateStorage,
  setCheckboxes
} from "./helpers.js"

const containerNode = document.querySelector(".js-container");

gamesList.forEach((labelText, index) => {
  const div = document.createElement("div");
  div.setAttribute("class", "checkbox-wrapper");

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", "gameForm300Check-" + index);

  const label = document.createElement("label");
  label.setAttribute("for", "gameForm300Check-" + index);
  label.innerHTML = labelText;

  div.appendChild(input);
  div.appendChild(label);
  containerNode.appendChild(div);
});

setCheckboxes();

myCount();

$("input").on("click", myCount);
$("input").on("click", updateStorage);
