import breadPic from './assets/bread.jpg'

function menu() {
    const main = document.getElementById("main");

    //Menu items
    const bread = document.createElement("div");
    
    bread.id = "bread";

    //Menu item labels
    const breadLabel = document.createElement("p");
    breadLabel.innerText = "Bread";

    //Menu item pictures
    const breadImgTag = document.createElement("img");
    breadImgTag.src = breadPic;

    //Menu item descriptions
    const breadInfo = document.createElement("p");
    breadInfo.innerText = "This bread is good and not stodgy";

    //Menu item assignments

    bread.appendChild(breadLabel);
    bread.appendChild(breadImgTag);
    bread.appendChild(breadInfo);

    main.appendChild(bread);

}

export {menu};