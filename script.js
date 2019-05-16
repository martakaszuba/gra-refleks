var start = document.querySelector("#start");  
var reset = document.querySelector("#reset"); 
start.addEventListener("click", Start);
reset.addEventListener("click", Reset);
var m, t;
var scores = Number(document.querySelector("#scores").innerHTML);
var lifes = Number(document.querySelector("#lifes").innerHTML);
var time = 60;
var items = document.querySelectorAll(".pro");
items = Array.from(items);

function Reset() {
   clearInterval(m);
       clearInterval(t);
       scores = 0;
       document.querySelector("#scores").innerHTML = 0;
       document.querySelector("#lifes").innerHTML = 3;
       document.querySelector("#info").innerHTML = "";
       lifes = 3;
       time = 60;
       Start();
}

function Start(){
start.removeEventListener("click", Start);
items.forEach(function(val){
   val.addEventListener("click", Scores);
})
var count = 0;
var countTimes = 0;

t = setInterval(function(){
var rand = Math.floor(Math.random() * items.length);
items[rand].style.backgroundColor = "rgb(184, 176, 180)";
setTimeout(function(){
items[rand].style.backgroundColor = "white";
}, 750)
countTimes = 0;
}, 1000)

m = setInterval(function(){
   count++;
   time--;
   document.querySelector("#time").innerHTML = time+" sekund"
   if (count == 60){
   clearInterval(t);
   t = 0;
   clearInterval(m);
   m = 0;
}
}, 1000)

function Scores(e){
   var trg = e.target;
   if (countTimes === 0){
   if (trg.style.backgroundColor === "rgb(184, 176, 180)"){
   countTimes++;
   scores++;
   document.querySelector("#scores").innerHTML = scores;
   }

   else {
       if (lifes >0){
       lifes--;
       document.querySelector("#lifes").innerHTML = lifes;
       }
   }

   if (lifes === 0){
       var info = document.querySelector("#info");
       clearInterval(m);
       clearInterval(t);
       info.innerHTML = "Niestety przegrałeś!";
       items.forEach(function(val){
       val.removeEventListener("click", Scores);
})
   }
   }
 
}
}