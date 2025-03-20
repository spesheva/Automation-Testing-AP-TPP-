var bodyEl = document.body;
bodyEl.style.backgroundColor = "#000";
bodyEl.style.color = "#fff";
console.log("body background", bodyEl.style.backgroundColor);
var divEls = document.getElementsByTagName("div");
console.log("divEls", divEls);
var btn = document.getElementsByTagName("button")[0];
// btn[0].style.backgroundColor="green";
// btn[0].textContent = "About me";
console.log("divEls", divEls);
var headingsTwo = document.getElementsByTagName("h2");
var paragraphs = document.getElementsByTagName("p");
var shops = document.getElementById("shops");
var items = document.getElementsByClassName("list-item");
var secondItem = document.getElementsByClassName("list-item")[1];
secondItem.textContent = "Second Item";
var selectedH2 = document.querySelector("h4");
if (selectedH2) {
    selectedH2.style.color = "blue";
}
console.log("selecteH2", selectedH2);
var aboutUsBtn = document.querySelector(".about button");
console.log("aboutUsBtn", aboutUsBtn);
