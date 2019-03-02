var body = document.body;   

var header = document.createElement("header");
var headerNav = document.createElement("nav");
var headerNavUl = document.createElement("ul");

var headerNavUlLiHome = document.createElement("li");
var headerNavUlLiProducts = document.createElement("li");
var headerNavUlLiContact = document.createElement("li");
var headerNavUlLiTestimoni = document.createElement("li");
var headerNavUlLiAboutUs = document.createElement("li");
var headerNavUlLiGames = document.createElement("li");


var headerNavUlLiAHome = document.createElement("a");
var headerNavUlLiAHomeHref = document.createAttribute("href");
headerNavUlLiAHomeHref.value = "./index.html";
headerNavUlLiAHome.setAttributeNode(headerNavUlLiAHomeHref);

var headerNavUlLiAProducts = document.createElement("a");
var headerNavUlLiAProductsHref = document.createAttribute("href");
headerNavUlLiAProductsHref.value = "./product.html";
headerNavUlLiAProducts.setAttributeNode(headerNavUlLiAProductsHref);

var headerNavUlLiAContact = document.createElement("a");
var headerNavUlLiAContactHref = document.createAttribute("href");
headerNavUlLiAContactHref.value = "./contact.html";
headerNavUlLiAContact.setAttributeNode(headerNavUlLiAContactHref)

var headerNavUlLiATestimoni = document.createElement("a");
var headerNavUlLiATestimoniHref = document.createAttribute("href");
headerNavUlLiATestimoniHref.value = "./testimoni.html";
headerNavUlLiATestimoni.setAttributeNode(headerNavUlLiATestimoniHref);

var headerNavUlLiAAboutUs = document.createElement("a");
var headerNavUlLiAAboutUsHref = document.createAttribute("href");
headerNavUlLiAAboutUsHref.value = "./aboutus.html";
headerNavUlLiAAboutUs.setAttributeNode(headerNavUlLiAAboutUsHref)

var headerNavUlLiAGames = document.createElement("a");
var headerNavUlLiAGamesHref = document.createAttribute("href");
headerNavUlLiAGamesHref.value = "./games.html";
headerNavUlLiAGames.setAttributeNode(headerNavUlLiAGamesHref);

var aHome = document.createTextNode("Home");
var aProducts = document.createTextNode("Product");
var aContact = document.createTextNode("Contact");
var aTestimoni = document.createTextNode("Testimoni");
var aAboutUs = document.createTextNode("AboutUs");
var aGames = document.createTextNode("Games");

body.appendChild(header);
header.appendChild(headerNav);
headerNav.appendChild(headerNavUl);

headerNavUl.appendChild(headerNavUlLiHome);
headerNavUl.appendChild(headerNavUlLiProducts);
headerNavUl.appendChild(headerNavUlLiContact);
headerNavUl.appendChild(headerNavUlLiTestimoni);
headerNavUl.appendChild(headerNavUlLiAboutUs);
headerNavUl.appendChild(headerNavUlLiGames);


headerNavUlLiHome.appendChild(headerNavUlLiAHome);
headerNavUlLiProducts.appendChild(headerNavUlLiAProducts)
headerNavUlLiContact.appendChild(headerNavUlLiAContact);
headerNavUlLiTestimoni.appendChild(headerNavUlLiATestimoni);
headerNavUlLiAboutUs.appendChild(headerNavUlLiAAboutUs);
headerNavUlLiGames.appendChild(headerNavUlLiAGames);


headerNavUlLiAHome.appendChild(aHome);
headerNavUlLiAProducts.appendChild(aProducts);
headerNavUlLiAContact.appendChild(aContact);
headerNavUlLiATestimoni.appendChild(aTestimoni);
headerNavUlLiAAboutUs.appendChild(aAboutUs);
headerNavUlLiAGames.appendChild(aGames);
