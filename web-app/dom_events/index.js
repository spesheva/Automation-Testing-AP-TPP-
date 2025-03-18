//grt element by tag name
document.getElementsByTagName("h1")[0];
// get h1 tag by css selector
document.querySelector("h1");
//createDomElement
var paragraph = document.createElement("p");
paragraph.textContent = "text paragraph";
var addItemsContent = document.getElementsByClassName("add-items");
// append element in html structure
addItemsContent[0].append(paragraph);
var spanEl = document.getElementsByTagName("span")[0];
spanEl.remove();
// add event listener on key press
document.addEventListener("keypress", function (event) {
    console.log("event", event.key);
});
// add and remove list items
var itemInput = document.getElementsByTagName("input")[0];
var addButton = document.querySelector("#addButton");
var list = document.querySelector("#list");
addButton.addEventListener("click", function () { return addListItem(); });
itemInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addListItem();
    }
});
function addListItem() {
    var listItemValue = itemInput.value;
    var listItem = document.createElement("li");
    if (listItemValue !== "" && listItemValue !== " ") {
        listItem.textContent = listItemValue;
        list.append(listItem);
        itemInput.focus();
        var deleteBtn = document.createElement("button");
        deleteBtn.style.margin = "5px";
        deleteBtn.textContent = "delete";
        listItem.append(deleteBtn);
        deleteBtn.addEventListener("click", function () {
            listItem.remove();
        });
    }
    itemInput.value = "";
}
