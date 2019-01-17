$(".lucas").hide();
$(".pedro").hide();
$(".felipe").hide();
$(".marcos").hide();
$("button").hide();

$(".jose").css("color","gold");

$(".jose").click(function(){
$(".lucas").show();
$(".jose").hide();
});

$(".lucas").css("color","blue");

$(".lucas").click(function(){
$(".pedro").show();
$(".lucas").slideUp();
$("button").show();
});

$(".pedro").css("color","gray");

$("button").dblclick(function(){
$(".marcos").show();
$(".pedro").fadeOut();
$(".button").hide();
});

$("button").dblclick(function(){
$(".marcos").css("color","gold");
});

