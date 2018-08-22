$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });

    $("button").click(function(){
        $("p").css("color", "red");
    });
});