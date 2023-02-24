import {pageLoad} from "./pageLoad";
import {homePage} from "./home";
import {clean} from "./clean";

pageLoad();


const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if(button.id == "home") {
        homePage();
    } else {
        clean();
        
    }
  }) 
})


