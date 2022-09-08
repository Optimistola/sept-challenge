showhamburger=()=>{
  if(document.querySelector(".hamburger").classList.toggle("change")){
    
  }
}
window.onload=()=>{
document.querySelector(".content").classList.add("after");
document.querySelector(".content2").classList.add("after2");
}

display=()=>{
  var btnText=document.querySelector(".btn-text");
  var btn= document.querySelector(".btn");
  btn.classList.add("click");
  btn.classList.remove("btn");
  btnText.style.display='block';
}

display1 = () => {
  var btnText1= document.querySelector(".btn-text1");
  var btn1 = document.querySelector(".btn1");
  btn1.classList.add("click");
  btn2.classList.remove("btn1");
  btnText1.style.display = 'block';
}
/*animation*/

animate=()=>{
  
var fade2=document.querySelector(".container-anim");
fade2.style.opacity=0;
var how = document.querySelector(".how");
how.style.opacity = 0;
var how2= document.querySelector(".how2");
how2.style.opacity = 0;
var market = document.querySelector(".market .h31");
var selh3 = document.querySelector(" .sel-h3");
market.style.opacity = 0;
var invest = document.querySelector(" .invest");
market.style.opacity = 0;

 
var pageTop = document.body.scrollTop;
    var pageBottom = pageTop + screen.height;
    var tags= document.querySelectorAll(".c1");
    for(var i=0; i<tags.length; i++){
    var tag = tags[i];
    var position = tag.scrollHeight;
    if(document.documentElement.scrollTop>=tag.offsetTop +115){//Adjust
      tag.classList.add("visible");
    } else {
      if(document.documentElement.scrollTop>=tag.offsetTop-30){
      tag.classList.remove("visible");
    }
  }
  }
  var anim=document.querySelector(".cont-anim");
  if (document.documentElement.scrollTop >=500) { //Adjust
    anim.classList.add("visible");
  } else {
      anim.classList.remove("visible");
    }

 
 if (document.documentElement.scrollTop>=800){
   fade2.style.opacity=1;
   fade2.classList.add("image-fade");
   fade2.classList.remove("image-fadee");
 }
   else{
    if (document.documentElement.scrollTop<=850){
     fade2.classList.remove("image-fade");
     fade2.classList.add("image-fadee");
     fade2.style.opacity=0;
   }
   }

   if (document.documentElement.scrollTop>=940){
   how.style.opacity=1;
   how.classList.add("image-fade2");
   how.classList.remove("image-fadee");
 }
   else{
    if (document.documentElement.scrollTop<=990){
     how.classList.remove("image-fade2");
     how.classList.add("image-fadee");
     how.style.opacity=0;
   }
   }
if (document.documentElement.scrollTop>=1300){
   how2.style.opacity=1;
   how2.classList.add("image-fade2");
   how2.classList.remove("image-fadee2");
 }
   else{
    if (document.documentElement.scrollTop<=1690){
      
     how2.classList.remove("image-fade2");
     how2.classList.add("image-fadee2");
     how2.style.opacity=0;
   }
   }
if (document.documentElement.scrollTop>=3480){
   market.style.opacity=1;
   market.classList.add("image-fade3");
   market.classList.remove("image-fadee2");
 }
   else{
    if (document.documentElement.scrollTop<=3700){
     
     market.classList.remove("image-fade3");
     market.classList.add("image-fadee2");
     market.style.opacity=0;
   }
   }
   if (document.documentElement.scrollTop >=1500) {
     selh3.style.opacity = 1;
     selh3.classList.add("image-fade3");
     selh3.classList.remove("image-fadee2");
   }
   else {
     if (document.documentElement.scrollTop <= 2500) {
   
       selh3.classList.remove("image-fade3");
       selh3.classList.add("image-fadee2");
       selh3.style.opacity = 0;
     }
   }
   if (document.documentElement.scrollTop >= 3600) {
     invest.style.opacity = 1;
     invest.classList.add("image-fade3");
     invest.classList.remove("image-fadee2");
   }
   else {
     if (document.documentElement.scrollTop <= 4000) {
   
       invest.classList.remove("image-fade3");
       invest.classList.add("image-fadee2");
       invest.style.opacity = 0;
     }
   }
   var invest2 = document.querySelectorAll(".invest2");
   for(var i=0; i<invest2.length; i++){
     invest2[i].style.opacity =0;
     if(screen.height<=500){
     }
   if (document.documentElement.scrollTop >= 3700) {
     invest2[i].style.opacity = 1;
     invest2[i].classList.add("image-fade3");
     invest2[i].classList.remove("image-fadee2");
   }
   else {
     if (document.documentElement.scrollTop <= 4000) {
   
       invest2[i].classList.remove("image-fade3");
       invest2[i].classList.add("image-fadee2");
       invest2[i].style.opacity = 0;
     }
   }
   }
   var feature1= document.querySelector(".feature1");
   feature1.style.opacity=0;
   if (document.documentElement.scrollTop >= 3900) {
     feature1.style.opacity = 1;
     feature1.classList.add("image-fade3");
     feature1.classList.remove("image-fadee2");
   }
   else {
     if (document.documentElement.scrollTop <= 4100) {
   
       feature1.classList.remove("image-fade3");
       feature1.classList.add("image-fadee2");
       feature1.style.opacity = 0;
     }
   }
   var detailed=document.querySelector(".detailed");
   detailed.style.opacity=0;
if (document.documentElement.scrollTop >= 4000) {
  detailed.style.opacity = 1;
  detailed.classList.add("image-fade3");
  detailed.classList.remove("image-fadee2");
}
else {
  if (document.documentElement.scrollTop <= 4150) {

    detailed.classList.remove("image-fade3");
    detailed.classList.add("image-fadee2");
    detailed.style.opacity = 0;
  }
}
var detailed2 = document.querySelectorAll(".detailed2");
        
   for(var i=0; i<detailed2.length; i++){
     detailed2[i].style.opacity = 0;
   if (document.documentElement.scrollTop >=4120) {
     detailed2[i].style.opacity = 1;
     detailed2[i].classList.add("image-fade3");
     detailed2[i].classList.remove("image-fadee2");
   }
   else {
     if (document.documentElement.scrollTop <= 4130) {
   
       detailed2[i].classList.remove("image-fade3");
       detailed2[i].classList.add("image-fadee2");
       detailed2[i].style.opacity = 0;
     }
   }
   }
var feature2= document.querySelector(".feature2");
   feature2.style.opacity=0;
   if (document.documentElement.scrollTop >= 4180) {
     feature2.style.opacity = 1;
     feature2.classList.add("image-fade3");
     feature2.classList.remove("image-fadee2");
   }
   else {
     if (document.documentElement.scrollTop <= 4230) {
   
       feature2.classList.remove("image-fade3");
       feature2.classList.add("image-fadee2");
       feature2.style.opacity = 0;
     }
   }
var grow=document.querySelector(".grow");
   grow.style.opacity=0;
if (document.documentElement.scrollTop >= 4230) {
  grow.style.opacity = 1;
  grow.classList.add("image-fade3");
  grow.classList.remove("image-fadee2");
}
else {
  if (document.documentElement.scrollTop <= 4285) {

    grow.classList.remove("image-fade3");
    grow.classList.add("image-fadee2");
    grow.style.opacity = 0;
  }
}
var grow2 = document.querySelectorAll(".grow2");
        
   for(var i=0; i<detailed2.length; i++){
     grow2[i].style.opacity = 0;
   if (document.documentElement.scrollTop >=4280) {
     grow2[i].style.opacity = 1;
     grow2[i].classList.add("image-fade3");
     grow2[i].classList.remove("image-fadee2");
   }
   else {
     if (document.documentElement.scrollTop <= 4300) {
   
       grow2[i].classList.remove("image-fade3");
       grow2[i].classList.add("image-fadee2");
       grow2[i].style.opacity = 0;
     }
   }
   }
var feature3= document.querySelector(".feature3");
   feature3.style.opacity=0;
   if (document.documentElement.scrollTop >= 4325) {
     feature3.style.opacity = 1;
     feature3.classList.add("image-fade3");
     feature3.classList.remove("image-fadee2");
   }
   else {
     if (document.documentElement.scrollTop <= 4325) {
   
       feature3.classList.remove("image-fade3");
       feature3.classList.add("image-fadee2");
       feature3.style.opacity = 0;
     }
   }

var marketEnd= document.querySelector(".market-end");
   marketEnd.style.opacity=0;
   if (document.documentElement.scrollTop >= 4525) {
     marketEnd.style.opacity = 1;
     marketEnd.classList.add("image-fade3");
     marketEnd.classList.remove("image-fadee2");
   }
   else {
     if (document.documentElement.scrollTop <= 4625) {
   
       marketEnd.classList.remove("image-fade3");
       marketEnd.classList.add("image-fadee2");
       marketEnd.style.opacity = 0;
     }
   }
   if(screen.height<=500){
  market.style.opacity=1;
  invest.style.opacity=1;
feature1.style.opacity=1;
feature2.style.opacity=1;
feature3.style.opacity=1;
detailed.style.opacity=1;
grow.style.opacity=1;
marketEnd.style.opacity=1;
for(var i=0; i<invest2.length;i++){
  invest2[i].style.opacity=1;
}
for(var i=0; i<grow2.length;i++){
  grow2[i].style.opacity=1;
}
for(var i=0; i<detailed2.length;i++){
  detailed2[i].style.opacity=1;
}

  }
}
       

