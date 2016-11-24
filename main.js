
$(document).ready(function(){
var flashingArrow;

  $("#titleAbout").mouseenter(function(){

    flashingArrow = setInterval(function(){
    // toggle the class every five second
    $("#titleArrow1").css("visibility", "visible");
    setTimeout(function(){
     // toggle back after 1 second
     $("#titleArrow1").css("visibility", "hidden");
   }, 350)
 },700);
  });

  $("#titleAbout").mouseleave(function(){
       clearInterval(flashingArrow);
       $("#titleArrow1").css("visibility", "hidden");
  });

  $("#titleProjects").mouseenter(function(){
    $("#titleArrow2").css("visibility", "visible");
    flashingArrow = setInterval(function(){
    // toggle the class every five second
    $("#titleArrow2").css("visibility", "visible");
    setTimeout(function(){
     // toggle back after 1 second
     $("#titleArrow2").css("visibility", "hidden");
   }, 350)
 }, 700);
  });

  $("#titleProjects").mouseleave(function(){
       clearInterval(flashingArrow);
       $("#titleArrow2").css("visibility", "hidden");
  });

  $("#titleContact").mouseenter(function(){
    flashingArrow = setInterval(function(){
    // toggle the class every five second
    $("#titleArrow3").css("visibility", "visible");
    setTimeout(function(){
     // toggle back after 1 second
     $("#titleArrow3").css("visibility", "hidden");
   }, 350)
 }, 700);
  });

  $("#titleContact").mouseleave(function(){
       clearInterval(flashingArrow);
       $("#titleArrow3").css("visibility", "hidden");
  });
});
