var body = document.body

var section = document.createElement("section");
var sectionClass = document.createAttribute("class");
sectionClass.value = "supporting-games";

var sectionDiv = document.createElement("div");
var sectionDivClass = document.createAttribute("class");
sectionDivClass.value = "container-games";

body.appendChild(section);
section.appendChild(sectionDiv);

section.setAttributeNode(sectionClass)
sectionDiv.setAttributeNode(sectionDivClass);

var divAlertGamesOverlay = document.createElement("div");
var divAlertGamesOverlayId = document.createAttribute("id");
divAlertGamesOverlayId.value = "alert-games-overlay";
sectionDiv.appendChild(divAlertGamesOverlay);
divAlertGamesOverlay.setAttributeNode(divAlertGamesOverlayId);

var divAlertGames = document.createElement("div");
var divAlertGamesId = document.createAttribute("id");
divAlertGamesId.value = "alert-games";
sectionDiv.appendChild(divAlertGames);
divAlertGames.setAttributeNode(divAlertGamesId);

var divAlertGamesChild = document.createElement("div")

divAlertGames.appendChild(divAlertGamesChild);

var divAlertGamesChild2a = document.createElement("div");
var divAlertGamesChild2b = document.createElement("div")
var divAlertGamesChild2aId = document.createAttribute("id");
var divAlertGamesChild2bId = document.createAttribute("id");
divAlertGamesChild2aId.value = "alertHead";
divAlertGamesChild2bId.value = "alertFoot";
divAlertGamesChild2a.setAttributeNode(divAlertGamesChild2aId);
divAlertGamesChild2b.setAttributeNode(divAlertGamesChild2bId);


divAlertGamesChild.appendChild(divAlertGamesChild2a)
divAlertGamesChild.appendChild(divAlertGamesChild2b)

var divTestiGames = document.createElement("div");
var divTestiGamesClass = document.createAttribute("class");
divTestiGamesClass.value = "testimonials-games";
divTestiGames.setAttributeNode(divTestiGamesClass);

sectionDiv.appendChild(divTestiGames);


var divTestiChild = document.createElement("div");
var divTestiChildClass = document.createAttribute("class");
divTestiChildClass.value = "inner-games";

divTestiChild.setAttributeNode(divTestiChildClass);
divTestiGames.appendChild(divTestiChild);

var h1InnerClass = document.createElement("h1");
var h1InnerClassText = document.createTextNode("Dapatkan kupon diskon 100k untuk 10 point");

h1InnerClass.appendChild(h1InnerClassText);
divTestiChild.appendChild(h1InnerClass);

var divContainerGames = document.createElement("div");
var divContainerGamesClass = document.createAttribute("class");
divContainerGamesClass.value = "containerGames";
divContainerGames.setAttributeNode(divContainerGamesClass)
divTestiGames.appendChild(divContainerGames);


var divAreaKomputer = document.createElement("div");
var divAreaKomputerClass = document.createAttribute("class");
divAreaKomputerClass.value = "area-komputer";
divAreaKomputer.setAttributeNode(divAreaKomputerClass);
divContainerGames.appendChild(divAreaKomputer);

var imgAreaKomputer = document.createElement("img");
imgAreaKomputerId = document.createAttribute("id");
imgAreaKomputerClass = document.createAttribute("class");
imgAreaKomputerSrc = document.createAttribute("src");
imgAreaKomputerId.value = "games-img"
imgAreaKomputerClass.value = "img-komputer"
imgAreaKomputerSrc.value = "img/games/ask.jpg"
imgAreaKomputer.setAttributeNode(imgAreaKomputerId);
imgAreaKomputer.setAttributeNode(imgAreaKomputerClass);
imgAreaKomputer.setAttributeNode(imgAreaKomputerSrc);

divAreaKomputer.appendChild(imgAreaKomputer)

var divInfo = document.createElement("div");
var divInfoClass = document.createAttribute("class");
divInfoClass.value = "info"
divInfo.innerHTML = "GO"
divInfo.setAttributeNode(divInfoClass)

divContainerGames.appendChild(divInfo)

var divScorePemain = document.createElement("div");
var divScorePemainClass = document.createAttribute("class");
divScorePemainClass.value = "score-pemain"
divScorePemain.innerHTML ="You:"
divScorePemain.setAttributeNode(divScorePemainClass)

divContainerGames.appendChild(divScorePemain)

var divInnerScorePemain = document.createElement("div")
var divInnerScorePemainClass = document.createAttribute("class");
divInnerScorePemainClass.value = "inner-score-pemain"
divInnerScorePemain.innerHTML = "0";
divInnerScorePemain.setAttributeNode(divInnerScorePemainClass)

divScorePemain.appendChild(divInnerScorePemain)

var divScoreKomputer = document.createElement("div");
var divScoreKomputerClass = document.createAttribute("class");
divScoreKomputerClass.value = "score-komputer";
divScoreKomputer.innerHTML = "PC:"
divScoreKomputer.setAttributeNode(divScoreKomputerClass);

divContainerGames.appendChild(divScoreKomputer)

var divInnerScoreKomputer = document.createElement("div");
var divInnerScoreKomputerClass = document.createAttribute("class");
divInnerScoreKomputerClass.value = "inner-score-komputer";
divInnerScoreKomputer.innerHTML = "0"
divInnerScoreKomputer.setAttributeNode(divInnerScoreKomputerClass)

divScoreKomputer.appendChild(divInnerScoreKomputer)

var divAreaPlayer = document.createElement("div");
var divAreaPlayerClass = document.createAttribute("class");
divAreaPlayerClass.value = "area-player"
divAreaPlayer.setAttributeNode(divAreaPlayerClass);

divContainerGames.appendChild(divAreaPlayer)

var ulPlayer = document.createElement("ul");
var ulPlayerId = document.createAttribute("id");
ulPlayerId.value = "ul-games"
ulPlayer.setAttributeNode(ulPlayerId);

divAreaPlayer.appendChild(ulPlayer);

var liGameGunting = document.createElement("li");
var liGamesGuntingId = document.createAttribute("id");
liGamesGuntingId.value = "li-games";
liGameGunting.setAttributeNode(liGamesGuntingId);
var imgGunting = document.createElement("img");
var imgGuntingId = document.createAttribute("id");
var imgGuntingClass = document.createAttribute("class");
var imgGuntingSrc = document.createAttribute("src");
imgGuntingSrc.value = "/img/games/gunting.png";
imgGuntingClass.value = "gunting";
imgGuntingId.value = "games-img";
liGameGunting.appendChild(imgGunting);
imgGunting.setAttributeNode(imgGuntingId);
imgGunting.setAttributeNode(imgGuntingSrc);
imgGunting.setAttributeNode(imgGuntingClass);



var liGameBatu = document.createElement("li");
var liGameBatuId = document.createAttribute("id");
liGameBatuId.value = "li-games";
liGameBatu.setAttributeNode(liGameBatuId);
var imgBatu = document.createElement("img");
var imgBatuId = document.createAttribute("id");
var imgBatuClass = document.createAttribute("class");
var imgBatuSrc = document.createAttribute("src");
imgBatuClass.value = "batu";
imgBatuId.value = "games-img";
imgBatuSrc.value = "/img/games/batu.png";
liGameBatu.appendChild(imgBatu);
imgBatu.setAttributeNode(imgBatuClass);
imgBatu.setAttributeNode(imgBatuId);
imgBatu.setAttributeNode(imgBatuSrc);


var liGameKertas = document.createElement("li");
var liGameKertasId = document.createAttribute("id");
liGameKertasId.value = "li-games";
liGameKertas.setAttributeNode(liGameKertasId);
var imgKertas = document.createElement("img");
var imgKertasId = document.createAttribute("id");
var imgKertasClass = document.createAttribute("class");
var imgKertasSrc = document.createAttribute("src");
imgKertasClass.value = "kertas";
imgKertasId.value = "games-img";
imgKertasSrc.value = "/img/games/kertas.png";
liGameKertas.appendChild(imgKertas)
imgKertas.setAttributeNode(imgKertasClass);
imgKertas.setAttributeNode(imgKertasId);
imgKertas.setAttributeNode(imgKertasSrc);



ulPlayer.appendChild(liGameGunting);
ulPlayer.appendChild(liGameBatu);
ulPlayer.appendChild(liGameKertas);


