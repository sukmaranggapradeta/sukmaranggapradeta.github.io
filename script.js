function outputKomputer(){
    //acak angka 0 1 2
    var acak = Math.floor(Math.random()*3);
    if (acak == 0) return "batu";
    if (acak == 1) return "gunting";
    if (acak == 2) return "kertas";
}

function hasil(komputer , pemain){
    if(komputer == pemain) return "SERI";
    if (pemain === "batu" && komputer === "kertas"){
        return "KALAH";
    }else
    if (pemain === "kertas" && komputer === "gunting"){
        return "KALAH";
    }else
    if (pemain === "gunting" && komputer === "batu"){
        return "KALAH";
    }
    return "MENANG"
}

function randomGambar(){
    var gambarKomputer = document.querySelector(".img-komputer");
    var gambarArray = ["batu","gunting","kertas"]
    var i = 0 ;
    var mulai = new Date().getTime();
    
    setInterval(function(){
        if (new Date().getTime() - mulai > 2500 ){
            clearInterval;
            return;
        }
        gambarKomputer.setAttribute("src" ,"/img/games/"+ gambarArray[i++] + ".png");
        if (i === gambarArray.length){
            i = 0 ;
        }
    },100);
}

var efekSuara = new Audio("sound/game.wav")

function customAlert(){
    this.render = function(pesan){
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var alertGamesOverlay = document.getElementById("alert-games-overlay");
        var alertGames = document.getElementById("alert-games");
        alertGamesOverlay.style.display = "block";
        alertGamesOverlay.style.height = winH +"px";
        alertGames.style.left = "50%";
        alertGames.style.marginLeft = "-175px";
        alertGames.style.top = "200px";
        alertGames.style.display = "block";
        document.getElementById("alertHead").innerHTML = pesan;
        document.getElementById("alertFoot").innerHTML = '<a href="#" onclick="Alert.ok()" class="btn buttonGames">OK</a>';
    }
    this.ok = function(){
        var alertGamesOverlay = document.getElementById("alert-games-overlay");
        var alertGames = document.getElementById("alert-games");
        alertGames.style.display = "none";
        alertGamesOverlay.style.display = "none";
        location.reload();
    }
}
var Alert = new customAlert();

var batuGuntingKertas = document.querySelectorAll("li img");
batuGuntingKertas.forEach(function(pilih) {
    pilih.addEventListener("click" , function(){
        efekSuara.play()
        var pilihanKomputer = outputKomputer()
        var pilihanPemain = pilih.className;
        var bandingkan = hasil(pilihanKomputer , pilihanPemain);
/*         console.log("komputer pilih : "+ pilihanKomputer);
        console.log(pilihanPemain);
        console.log(bandingkan); */

        randomGambar()

        setTimeout(function(){
            var komputerPic = document.querySelector(".img-komputer");
            komputerPic.setAttribute("src" ,"/img/games/"+ pilihanKomputer +".png")
    
            var info = document.querySelector(".info")
            info.innerHTML = bandingkan;

            if(bandingkan == "MENANG"){
                var scorePemain = document.querySelector(".inner-score-pemain")
                var scoreYou = scorePemain.innerHTML
                scoreYou++;
                scorePemain.innerHTML = scoreYou;
                if(scoreYou === 10){
                    Alert.render("Selamat kamu Berhasil<br>DISKON100k")
                }
            }else
            if (bandingkan == "KALAH"){
                var scoreKomputer = document.querySelector(".inner-score-komputer")
                var scorePc = scoreKomputer.innerHTML
                scorePc++
                scoreKomputer.innerHTML = scorePc;
            }
            if(scorePc === 3){
                Alert.render("kesempatan kamu hanya 3 kali <br>mau coba lagi kak ?")
            } 
        },2500);    

    });
});

