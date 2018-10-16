$(document).ready(function() {

// $(".slide").click(function(){
//     $("#walrus-showing-slide").slideToggle();
//     $("#walrus-hidden-slide").slideToggle();
//
// });
//
// $(".fade").click(function(){
//     $("#walrus-showing-fade").fadeToggle();
//     $("#walrus-hidden-fade").fadeToggle();
//
// });



$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");

  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});












});
