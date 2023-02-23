function pageLoad () {

    const content = document.getElementById("content");

    const home = document.createElement("button");
    const menu = document.createElement("button");
    const contact = document.createElement("button");

    home.innerText = "Home";
    menu.innerText = "Menu";
    contact.innerText = "Contact";

    content.appendChild(home);
    content.appendChild(menu);
    content.appendChild(contact);

}

export default pageLoad;