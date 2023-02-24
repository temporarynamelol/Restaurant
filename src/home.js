import pic from './assets/cake.jpg';

function homePage () {
    const main = document.getElementById("main");

    const title = document.createElement("h1");
    const description = document.createElement("p");
    const photo = document.createElement("img");

    title.innerHTML = "Bakery";
    description.innerHTML = "Best bakery ever";
    photo.src = pic;

    main.appendChild(title);
    main.appendChild(description);
    main.appendChild(photo);

}

export {homePage};