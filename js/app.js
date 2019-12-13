//hide necessary content on page load.  If JS is disabled all information is available.

$("#about").hide();
$(".card-body").hide();
$(".open").hide();


//reveeals or hides the about section under the title
$(".about").click(function(){
    $("#about").toggle();
});


//function will show a new picture and text or hide text and return to original picture
function reveal(el){
    $(el).toggle().siblings().toggle();
 }


//Show or hide on first card
////
//$("#pandemic").click(function (){
//    $("#pandemicOpen").next().show();
//    $("#pandemicOpen").show();
//    $("#pandemic").hide();
//})
//
//$("#pandemicOpen").click(function (){
//    $("#pandemicOpen").next().hide();
//    $("#pandemicOpen").hide();
//    $("#pandemic").show();
//})
