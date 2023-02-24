function pageLoad () {

    //container for entire page
    const content = document.getElementById("content");
    //main navigation bar
    const navBar = document.createElement("div");
    navBar.id = "nav";
    //all buttons in nav bar
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

    //main content container
    const main = document.createElement("div");
    main.id = "main";

    //footer
    const footer = document.createElement("div");
    footer.id = "footer";

    footer.innerText = "footer";


    content.appendChild(navBar);
    content.appendChild(main);
    content.appendChild(footer);


}

export {pageLoad};