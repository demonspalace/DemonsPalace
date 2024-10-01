//Grabs The Menu Options For Our Use Later In The Script
const menuOptions = document.getElementById("mobile-menu-options");
const computedDisplay = window.getComputedStyle(menuOptions).display;
//Creates A Function For What To Do With Button On Click
function buttonClick() {
    console.log("Display is " + menuOptions.style.display.toString());
    //If The Menu Options Isn't Rendered...
    if(computedDisplay === "none")
    {
        console.log("rendered");
        //Render It
        menuOptions.style.display = "flex";
    }
    else
    {
        console.log("unrendered");
        //If It Is, Unrender It
        menuOptions.style.display = "none";
    }
}

//Listens For A Click Event Then Execute The Function
document.getElementById("mobile-nav").addEventListener("click", buttonClick)