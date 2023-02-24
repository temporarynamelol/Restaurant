import {pageLoad} from "./pageLoad";
import {homePage} from "./home";
import {menu} from "./menu";
import {clean} from "./clean";

pageLoad();


const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if(button.id == "home") {
        clean();
        homePage();
    } else if (button.id == "menu") {
        clean();
        menu();
    }
  }) 
})


