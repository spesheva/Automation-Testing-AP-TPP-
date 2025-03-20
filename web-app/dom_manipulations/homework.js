// <!-- Create TypeScript file and add following Dom Manipulations
// 1.Change the text of the h1 tag.
var h1Title = document.getElementById("title");
if (h1Title) {
    h1Title.textContent = "Welcome to TypeScript Homework DOM Manipulation";
}
// 2.Change the color of the paragraph inside div.content.
var paragInsDiv = document.querySelector(".content p");
if (paragInsDiv) {
    paragInsDiv.style.color = "#4DFFFF";
}
// 3.Change the list items textContent for example to be list of fruits.
var liList1 = document.getElementsByTagName("li")[0];
var liList2 = document.getElementsByTagName("li")[1];
var liList3 = document.getElementsByTagName("li")[2];
liList1.textContent = "Apple";
liList2.textContent = "Orange";
liList3.textContent = "Mango";
// console.log("liList1",liList1);
// 4.Add a button and apply border style "1px solid red" to it. -->
var clickMeBtn = document.getElementById("button");
if (clickMeBtn) {
    clickMeBtn.style.border = "1px solid red";
}
