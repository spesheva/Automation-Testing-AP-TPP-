const bodyEl: HTMLElement = document.body;
bodyEl.style.backgroundColor = "#000";
bodyEl.style.color = "#fff";
console.log("body background", bodyEl.style.backgroundColor);

const divEls = document.getElementsByTagName("div");
console.log("divEls", divEls);

const btn = document.getElementsByTagName("button")[0];
// btn[0].style.backgroundColor="green";
// btn[0].textContent = "About me";

console.log("divEls", divEls);
const headingsTwo: HTMLCollectionOf<HTMLHeadingElement> =
  document.getElementsByTagName("h2");
const paragraphs: HTMLCollectionOf<HTMLParagraphElement> =
  document.getElementsByTagName("p");

const shops: HTMLElement | null = document.getElementById("shops");
const items: HTMLCollectionOf<Element> =
  document.getElementsByClassName("list-item");
const secondItem: Element = document.getElementsByClassName("list-item")[1];
secondItem.textContent = "Second Item";

const selectedH2 = document.querySelector("h4");
if (selectedH2) {
  selectedH2.style.color = "blue";
}
console.log("selecteH2", selectedH2);

const aboutUsBtn = document.querySelector(".about button") as HTMLButtonElement;

console.log("aboutUsBtn", aboutUsBtn);
