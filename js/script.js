
// burger menu
let navbarlinks = document.getElementById('nav');
let toggleButtonBurger=document.getElementById('toggleButton');

toggleButtonBurger.addEventListener('click', function(){
    navbarlinks.classList.toggle('activeBurger');
});

// landing
$('.js-anchor-link').click(function(e){
    e.preventDefault();
    var target = $($(this).attr('href'));
    if(target.length){
      var scrollTo = target.offset().top;
      $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
    }
});

// AOS library
AOS.init();

// read more and less
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtnRead");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}


// slider
$(function(){
$('.multiple-items').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 669,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  });
});

// partners more info
$(".partner-arrow").click(function(){


  $(this).parent().children('p').toggleClass("long");
  
  $(this).toggleClass("top");
   
})

