const plusContainer = document.getElementById("plus-container");
const plusOptionContainer = document.getElementById("plus-option-container");

let clicked_plus = false
plusContainer.addEventListener("click",function(){
    if(!clicked_plus){
        plusOptionContainer.style.bottom = "0";
        plusOptionContainer.style.opacity = "1";
        plusContainer.style.transform = "rotate(90deg)"
        clicked_plus = true;
    }
    else{
        plusOptionContainer.style.bottom = "-50%";
        plusOptionContainer.style.opacity = "0";
        plusContainer.style.transform = "rotate(0)"
        clicked_plus = false;
    }
});

const closeGabung = document.querySelector('.close-gabung');
const closeBuat = document.querySelector(".close-buat");
const overlayContainer = document.querySelector('.overlay-container');
const buatKelas = document.querySelector("#buat-kelas");
const gabungKelas = document.querySelector("#gabung-kelas");
const gabungContainer = document.querySelector("#gabung-container");
const buatContainer = document.querySelector("#buat-container");
// const plusText = document.querySelector(".plus-text");
// const plusButton = document.querySelector(".plus-button");


closeGabung.addEventListener("click",function(){
    gabungContainer.style.display = "none";
    console.log("Jalan");
});

gabungKelas.addEventListener("click",function(){
    gabungContainer.style.display = "flex";
});

closeBuat.addEventListener("click",function(){
    buatContainer.style.display = "none";
    console.log("Jalan");
});

buatKelas.addEventListener("click",function(){
    buatContainer.style.display = "flex";
});


