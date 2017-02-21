$(function(){

  $(".btn").filestyle({input: false});
  $(".btn").filestyle('buttonText', 'ОБЕРІТЬ З ГАЛЕРЕЇ');
  changeBubbleText();
});

var image1 = {
      x: 0,
      y: 0
    },
    image2 = {
      x: 0,
      y: 0
    },
    image3 = {
      x: 0,
      y: 0
    },
    image4 = {
      x: 0,
      y: 0
    },
    image5 = {
      x: 0,
      y: 0
    },
    image6 = {
      x: 0,
      y: 0
    },
    image7 = {
      x: 0,
      y: 0
    },
    image8 = {
      x: 0,
      y: 0
    };

var bubbleText = [
  [
    'Натхнення має',
    'аромат кави!'
  ],
  [
    'Цей світ прекрасний',
    '    поки є кава!'
  ],
  [
    'Кава надихає',
    'мріяти!'
  ]
];


function changeBubbleText() {
  var index = Math.floor((Math.random() * bubbleText.length) + 1);
  if(index == 2) {
    document.querySelectorAll("text")[0].setAttribute("font-size", "20");
    document.querySelectorAll("text")[1].setAttribute("font-size", "20");
    document.querySelectorAll("text")[0].setAttribute("x", "12");
    document.querySelectorAll("text")[1].setAttribute("x", "50");
    console.log("Цей світ прекрасний поки є кава!");
  }
  if(index == 3) {
    console.log("Кава надихаэ мрияти!");
    document.querySelectorAll("text")[0].setAttribute("x", "35");
    document.querySelectorAll("text")[1].setAttribute("x", "70");
  }
  document.querySelectorAll("text")[0].textContent = bubbleText[index-1][0];
  document.querySelectorAll("text")[1].textContent = bubbleText[index-1][1];
}

function getQueryVariable(variable)
  {
         var query = window.location.search.substring(1);
         var vars = query.split("&");
         for (var i=0;i<vars.length;i++) {
                 var pair = vars[i].split("=");
                 if(pair[0] == variable){return pair[1];}
         }
         return(false);
  }

$(document).ready(function(){

    var slider = $('.bxslider').bxSlider({
    mode: 'vertical',
    minSlides: 4,
    maxSlides: 4,
    slideWidth: 220,
    slideMargin: 10,
    infiniteLoop: false
    
  });

  $(".bx-prev").css({
      "transform": "rotate(90deg)",
      "top": "30px", 
      "margin-left" : "75px"
  });

  $(".bx-next").css({
      "transform": "rotate(90deg)",
      "top": "508px", 
      "margin-right" : "92px"
  });

  

  if ($(document).width() < 1200) {
      $(".alert-block > .capture-text").next().first().children().first().unwrap();
      $(".alert-block > .capture-text").next().first().children().unwrap();
      //$(".alert-block > .capture-text").next().last().remove();
      $(".alert-block > .bx-controls").remove();

      slider.bxSlider({
      mode: 'horizontal',
      minSlides: 2,
      maxSlides: 2,
      slideWidth: 220,
      slideMargin: 10,
      infiniteLoop: false

    });
  //$(".left-block").css("display", "none");
    $(".bx-prev").css({
        "transform": "none",
        "top": "50%", 
        "margin-left" : "none"
    });

    $(".bx-next").css({
        "transform": "none",
        "top": "50%", 
        "margin-right" : "none"
    });
}

});



/*********************************** GET DATA FROM LOCAL STORAGE ************************************/

var myface = localStorage.getItem("image");
//console.log(myface);
document.querySelector("#loadImage").setAttribute("src", myface);

var a = document.getElementById( 'chrome_btn' );
a.download = "dreamcard.png";
a.href = myface;


/*********************************** GET DATA FROM LOCAL STORAGE ************************************/

function stepBack() {
  document.querySelector(".prev").setAttribute("href", "card.html");
}
