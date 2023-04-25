const pojok = document.getElementById("pojok");
const navContainer = document.getElementById("navbar-menu-container");
let clicked = false;
pojok.addEventListener("click",function(){
   if(!clicked){
    navContainer.style.marginTop = "-50vw";
    pojok.src = "/img/nav-kucingtidur-2.png";
    clicked = true;
   }
   else{
    navContainer.style.marginTop = "12vw";
    pojok.src = "/img/navbar_kucing.png";
    clicked = false;
   }
});

const navAccount = document.getElementById("nav-account");
const navAccountContainer = document.getElementById("nav-account-container");
let clicked_account = false;

navAccount.addEventListener("click",function(){
   if(!clicked_account){
      navAccountContainer.style.display = "grid";
      navAccount.style.transform = "translate(0,10%)";
      clicked_account = true;
   }
   else{
      navAccountContainer.style.display = "none";  
      navAccount.style.transform = "translate(0,0%)";
      clicked_account = false;
   }
})
