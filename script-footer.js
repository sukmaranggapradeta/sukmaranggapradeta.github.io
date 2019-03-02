var body = document.body

var footer = document.createElement("footer");

var footerDiv = document.createElement("div")
var footerDivClass = document.createAttribute("class");
footerDivClass.value = "containerfooter";
footerDiv.setAttributeNode(footerDivClass)

var pFooter = document.createElement("p");
//var pFooterText = document.createTextNode("Copyright &copy;2019 Hijab Azwa. All Rights Reserved.");
pFooter.innerHTML = "Copyright &copy;2019 Hijab Azwa. All Rights Reserved."

body.appendChild(footer)
footer.appendChild(footerDiv)
footerDiv.appendChild(pFooter)
