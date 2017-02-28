$(".page-scroll").on("click", function(){
    var path = $(this).attr("data-path");
    var anchor = $("#" + path);
    var position = anchor.position().top + $("#my-parallax-container").scrollTop();
    $("#my-parallax-container").animate({scrollTop: position});
});


$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

 $('.parallax').scrollspy({target: ".navbar-fixed-top"})
