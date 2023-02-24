import pic from './assets/cake.jpg';

function homePage () {
    const content = document.getElementById("content");

    const title = document.createElement("h1");
    const description = document.createElement("p");
    const photo = document.createElement("img");

    title.innerHTML = "Bakery";
    description.innerHTML = "Best bakery ever";
    photo.src = pic;

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(photo);

}

export {homePage};