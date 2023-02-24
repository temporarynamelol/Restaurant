function pageLoad () {

    const content = document.getElementById("content");

    const navBar = document.createElement("div");
    navBar.id = "nav";

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

    navBar.appendChild(home);
    navBar.appendChild(menu);
    navBar.appendChild(contact);

    content.appendChild(navBar);

}

export {pageLoad};