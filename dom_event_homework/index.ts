// Add event listener when button with id "add-border-btn" is clicked
// and add border style "2px solid red" for section with class name "content"

const borderBtn = document.querySelector("#add-border-btn") as HTMLButtonElement;
const sectionContent = document.querySelector(".content")as HTMLElement;


if(borderBtn){
    borderBtn.addEventListener("click",()=>{
       if(sectionContent){
        sectionContent.style.border= "2px solid red";
       }
         })
}

// Add event listener when button with id "change-text-btn" is clicked
// and add color style "blue" for section with class name "content"
const changeTextBtn = document.querySelector("#change-text-btn") as HTMLButtonElement;

if(changeTextBtn){
    changeTextBtn.addEventListener("click",()=>{
       if(sectionContent){
        sectionContent.style.color = "blue";
       
       }
         })
}


// Add event listener when button with id "change-text-btn" is clicked
// and add backgroundColor style "gray" for section with class name "content"

const toggleBackgroundBtn = document.querySelector("#toggle-bg-btn") as HTMLButtonElement;

if(toggleBackgroundBtn){
    toggleBackgroundBtn.addEventListener("click",()=>{
       if(sectionContent){
        sectionContent.style.background = "grey";
              }
         })
}

//Add event listener when section element with class name "content" is hovered
// this means to use mouseover event type
// and add box-shadow style  12px 12px 2px 1px rgba(0, 0, 255, 0.2);


if(sectionContent){
    sectionContent.addEventListener("mouseover",()=>{
        if(sectionContent){
            sectionContent.style.boxShadow = "12px 12px 2px 1px rgba(0, 0, 255, 0.2)";
        }
    })
}
if(sectionContent){
    sectionContent.addEventListener("mouseout",()=>{
        if(sectionContent){
            sectionContent.style.boxShadow = "";
        }
    })
}