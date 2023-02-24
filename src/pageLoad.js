function pageLoad () {

    const content = document.getElementById("content");

    const home = document.createElement("button");
    const menu = document.createElement("button");
    const contact = document.createElement("button");

    home.innerText = "Home";
    menu.innerText = "Menu";
    contact.innerText = "Contact";

    home.classList.add("button");
    menu.classList.add("button");
    contact.classList.add("button");

    home.id = "home";
    menu.id = "menu";
    contact.id = "contact";

    content.appendChild(home);
    content.appendChild(menu);
    content.appendChild(contact);

}

export {pageLoad};