let show = document.getElementById("open");
let hide = document.getElementById("cancle");
let menu = document.getElementById("menu");
let body = document.querySelector("body");
let navbar = document.querySelector("nav");
let uparrow = document.querySelector(".up-arrow");
let social = document.querySelector("#social");
let download = document.querySelector("#download");
let myLink = document.querySelector("#myLink");
let loading = document.querySelector("#loading");

function myload(){
  loading.style.display='none';
}
show.addEventListener("click",function(){
    menu.classList.add("active");
    show.style.opacity="0";
    show.style.pointerEvents="none";
    body.style.overflowY="hidden";
});
hide.addEventListener("click",function(){
    menu.classList.remove("active");
    show.style.opacity="1";
    show.style.pointerEvents="auto";
    body.style.overflowY="auto";
});

download.addEventListener('click',function(){
  myLink.click();
})

window.onscroll = function(){
  this.scrollY > 20 ? navbar.classList.add("activate") : navbar.classList.remove("activate");
  this.scrollY > 20 ? menu.classList.add("activate") : menu.classList.remove("activate");
  this.scrollY > 20 ? social.classList.add("activate") : social.classList.remove("activate");
  this.scrollY > 20 ? show.classList.add("activate") : show.classList.remove("activate");
  this.scrollY > 300 ? uparrow.classList.add("upactive") : uparrow.classList.remove("upactive");
}



$(document).ready(function () {
  console.log("This is My Portfolio Website.");
    $('#html').LineProgressbar({
      percentage: 70, fillBackgroundColor: 'orangered', height: '30px'
    });
    $('#css').LineProgressbar({
      percentage: 65, fillBackgroundColor: 'lightblue', height: '30px'
    });
    $('#php').LineProgressbar({
      percentage: 38, fillBackgroundColor: 'blue', height: '30px'
    });
    $('#javascript').LineProgressbar({
        percentage: 19, fillBackgroundColor: 'orange', height: '30px'
      });
  });

