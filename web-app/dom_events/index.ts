//grt element by tag name
document.getElementsByTagName("h1")[0];

// get h1 tag by css selector

document.querySelector("h1");

//createDomElement

const paragraph: HTMLParagraphElement = document.createElement("p");
paragraph.textContent = "text paragraph";

const addItemsContent: HTMLCollectionOf<Element> =
  document.getElementsByClassName("add-items");

// append element in html structure

addItemsContent[0].append(paragraph);

const spanEl: HTMLSpanElement = document.getElementsByTagName("span")[0];

spanEl.remove();

// add event listener on key press

document.addEventListener("keypress", (event) => {
  console.log("event", event.key);
});

// add and remove list items

const itemInput: HTMLInputElement = document.getElementsByTagName("input")[0];
const addButton = document.querySelector("#addButton") as HTMLButtonElement;
const list = document.querySelector("#list") as HTMLUListElement;

addButton.addEventListener("click", () => addListItem());
itemInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addListItem();
  }
});
function addListItem() {
  const listItemValue: string | number = itemInput.value;
  const listItem: HTMLLIElement = document.createElement("li");
  if (listItemValue !== "" && listItemValue !== " ") {
    listItem.textContent = listItemValue;
    list.append(listItem);
    itemInput.focus();
    const deleteBtn: HTMLButtonElement = document.createElement("button");
    deleteBtn.style.margin = "5px";
    deleteBtn.textContent = "delete";
    listItem.append(deleteBtn);
    deleteBtn.addEventListener("click", () => {
      listItem.remove();
    });
  }
  itemInput.value = "";
}
