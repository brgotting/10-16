$(document).ready(function() {
  // $(".clickable").click(function() {
  //   $("#walrus-showing").toggle();
  //   $("#walrus-hidden").toggle();
  // });

$(".slide").click(function(){
    $("#walrus-showing-slide").slideToggle();
    $("#walrus-hidden-slide").slideToggle();
    // $("#walrus-showing").fadeToggle("slow");
    // $("#walrus-showing").fadeToggle(3000);
});

$(".fade").click(function(){
    $("#walrus-showing-fade").fadeToggle();
    $("#walrus-hidden-fade").fadeToggle();
    // $("#walrus-showing").fadeToggle("slow");
    // $("#walrus-showing").fadeToggle(3000);
});

// $(".clickable").click(function(){
//     $("#walrus-hidden").fadeOut();
//     $("#walrus-hidden").fadeOut("slow");
//     $("#walrus-hidden").fadeOut(3000);
// });

});
