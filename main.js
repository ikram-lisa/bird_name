import "./style.scss";
import getAllItems, { leftList, rightList } from "./script.js";

document.addEventListener("DOMContentLoaded", function () {
  getAllItems();

  leftList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      rightList.appendChild(event.target);
    }
  });

  rightList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      leftList.appendChild(event.target);
    }
  });
});
