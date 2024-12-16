const $body = $("body");
const $header = $(".page-header");
const $navCollapse = $(".navbar-collapse");
const scrollClass = "scroll";
const shadowClass = "shadow-lg"; 
const widthInner = window.innerWidth;
 
//*  check size width for add class margin */
    if (widthInner < 760) {
      $('.lt-md').addClass('mb-4');
      $('#carouselExampleIndicators').css('margin-top','114px');
    } else {
      $('.lt-md').removeClass('mb-4');
    } 

$(window).on("scroll", () => {
  const scrollY = $(this).scrollTop();
  scrollY > 12 ? $header.addClass(shadowClass) : $header.removeClass(shadowClass);
  
  if (this.matchMedia("(min-width: 992px)").matches) {
    scrollY > 0
      ? $body.addClass(scrollClass)
      : $body.removeClass(scrollClass);
  } else {
    $body.removeClass(scrollClass);
  }
});

$(".page-header .nav-link, .navbar-brand").on("click", function(e) {
  e.preventDefault();
  const href = $(this).attr("href");

  $("html, body").animate({
    scrollTop: $(href).offset().top - 71
  }, 600);
});


$(".list-inline-item").hover(function() { 
  $(this).css("cursor", 'pointer');
 
  const iconId = $(this).attr("iconId");    

  if (iconId === '1' || iconId === '6') {
    $(this).css("color", "blue");
  }else if (iconId === '2') {
    $(this).css("color", "aqua"); 
  }else if (iconId === '3') {
    $(this).css("color", "red");  
  }else if (iconId === '4') {
    $(this).css("color", "deeppink");   
  }else if (iconId === '5') {
    $(this).css("color", "deepskyblue");   
  }else if (iconId === '7') {
    $(this).css("color", "green");   
  }else if (iconId === '8') {
    $(this).css("color", "red");   
  }else {
    $(this).css("color", "black");   
  } 
  }, function(){
  $(this).css("color", "black");
});   


$("#portfolio").hover(function () {  
  $( "#iconTest" ).fadeIn( 500, function() { 
    $("#iconTest").css("display", "");
  });
}, function(){ 
  $("#iconTest").css("display", "none"); 
});

/** x-bar hamburger */
$(".x-bar").click(function() {
  $(this).toggleClass("x-change");
});