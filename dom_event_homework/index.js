// Add event listener when button with id "add-border-btn" is clicked
// and add border style "2px solid red" for section with class name "content"
var borderBtn = document.querySelector("#add-border-btn");
var sectionContent = document.querySelector(".content");
if (borderBtn) {
    borderBtn.addEventListener("click", function () {
        if (sectionContent) {
            sectionContent.style.border = "2px solid red";
        }
    });
}
// Add event listener when button with id "change-text-btn" is clicked
// and add color style "blue" for section with class name "content"
var changeTextBtn = document.querySelector("#change-text-btn");
if (changeTextBtn) {
    changeTextBtn.addEventListener("click", function () {
        if (sectionContent) {
            sectionContent.style.color = "blue";
        }
    });
}
// Add event listener when button with id "change-text-btn" is clicked
// and add backgroundColor style "gray" for section with class name "content"
var toggleBackgroundBtn = document.querySelector("#toggle-bg-btn");
if (toggleBackgroundBtn) {
    toggleBackgroundBtn.addEventListener("click", function () {
        if (sectionContent) {
            sectionContent.style.background = "grey";
        }
    });
}
//Add event listener when section element with class name "content" is hovered
// this means to use mouseover event type
// and add box-shadow style  12px 12px 2px 1px rgba(0, 0, 255, 0.2);
if (sectionContent) {
    sectionContent.addEventListener("mouseover", function () {
        if (sectionContent) {
            sectionContent.style.boxShadow = "12px 12px 2px 1px rgba(0, 0, 255, 0.2)";
        }
    });
}
if (sectionContent) {
    sectionContent.addEventListener("mouseout", function () {
        if (sectionContent) {
            sectionContent.style.boxShadow = "";
        }
    });
}
