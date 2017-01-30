$(function(){
  $(".btn").filestyle({input: false});
  $(".btn").filestyle('buttonText', 'ОБЕРІТЬ З ГАЛЕРЕЇ');
});

var image1 = {
      x: 245,
      y: 35
    },
    image2 = {
      x: 406,
      y: 105
    },
    image3 = {
      x: 455,
      y: 262
    },
    image4 = {
      x: 406,
      y: 410
    },
    image5 = {
      x: 245,
      y: 487
    },
    image6 = {
      x: 90,
      y: 410
    },
    image7 = {
      x: 40,
      y: 262
    },
    image8 = {
      x: 88,
      y: 114
    };

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
  if ($(document).width() < 1200) {
      //$(".bx-viewport").unwrap();
      //$(".bx-wrapper").unwrap();
      //$(".bx-controls").remove();
      //$(".bx-viewport").css("height", "220px");

      //$(".bx-viewport").wrap("<div class='bx-wrapper'></div>");
      $(".alert-block > .capture-text").next().first().children().first().unwrap();
      $(".alert-block > .capture-text").next().first().children().unwrap();
      $(".alert-block > .capture-text").next().last().remove();
      $(".alert-block > .bx-controls").remove();

      slider.bxSlider({
      mode: 'horizontal',
      minSlides: 2,
      maxSlides: 2,
      slideWidth: 220,
      slideMargin: 10,
      infiniteLoop: false

    });
  $(".left-block").css("display", "none");
}

 if (localStorage.getItem("item" + getQueryVariable("item")) != null) {
    var obj = JSON.parse(localStorage.getItem("item" + getQueryVariable("item"))) ;
    console.log(obj);
    document.querySelector("#img"+getQueryVariable("item")+" > image").setAttribute("x", obj.pos_x);
    document.querySelector("#img"+getQueryVariable("item")+" > image").setAttribute("y", obj.pos_y);
    document.querySelector("#img"+getQueryVariable("item")+" > image").setAttribute("width", obj.width);
    document.querySelector("#img"+getQueryVariable("item")+" > image").setAttribute("height", obj.height);
    document.querySelector("#img"+getQueryVariable("item")+" > image").setAttribute("xlink:href", obj.image);

 } else {

  /*if (document.querySelector("#img"+ (Number(getQueryVariable("item"))+1) +" > image").getAttribute("xlink:href") == "img/icons-yellow/zerno-y-"+ (Number(getQueryVariable("item"))+1) +".png")
    { 
      console.log("fwefgwefw");
      document.querySelector("#img"+ (Number(getQueryVariable("item"))+1) +" > image").setAttribute("xlink:href", "img/icons/zerno-"+ (Number(getQueryVariable("item"))+1) +".png");
    }*/
    document.querySelector("#img" + getQueryVariable("item") + "> image").setAttribute("xlink:href", "img/icons-yellow/zerno-y-"+getQueryVariable("item")+".png");
    document.querySelector("#img" + getQueryVariable("item") + " > image").setAttribute("x", eval("image" + getQueryVariable("item")).x);
    document.querySelector("#img" + getQueryVariable("item") + " > image").setAttribute("y", eval("image" + getQueryVariable("item")).y);
    document.querySelector("#img" + getQueryVariable("item") + "> image").setAttribute("width", "108");
    document.querySelector("#img" + getQueryVariable("item") + "> image").setAttribute("height", "78");

 }

document.querySelectorAll('li > img')[0].src = "img/gallery-"+ getQueryVariable("item") +"/1.jpg";
document.querySelectorAll('li > img')[1].src = "img/gallery-"+ getQueryVariable("item") +"/2.jpg";
document.querySelectorAll('li > img')[2].src = "img/gallery-"+ getQueryVariable("item") +"/3.jpg";
document.querySelectorAll('li > img')[3].src = "img/gallery-"+ getQueryVariable("item") +"/4.jpg";
document.querySelectorAll('li > img')[4].src = "img/gallery-"+ getQueryVariable("item") +"/5.jpg";
document.querySelectorAll('li > img')[5].src = "img/gallery-"+ getQueryVariable("item") +"/6.jpg";
document.querySelectorAll('li > img')[6].src = "img/gallery-"+ getQueryVariable("item") +"/7.jpg";
document.querySelectorAll('li > img')[7].src = "img/gallery-"+ getQueryVariable("item") +"/8.jpg";

});



function prevStep() {
  console.log("prevStep");
  document.getElementsByClassName("arrow-block")[0].style.display = "none";

  document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("xlink:href", "img/icons-yellow/zerno-y-"+getQueryVariable("item")+".png");
  document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("width", "108");
  document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("height", "78");
  //console.log(eval("obj" + getQueryVariable("item")).y);
  document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("x", eval("image" + getQueryVariable("item")).x);
  document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("y", eval("image" + getQueryVariable("item")).y);
  document.getElementsByClassName("bx-wrapper")[0].style.display = "block";
  document.getElementsByClassName("alert-block")[0].style.top = "-150px";
  document.getElementsByClassName("capture-text")[0].style.display = "block";
  document.getElementsByClassName("capture-text")[1].style.display = "block";
  document.getElementsByClassName("bootstrap-filestyle")[0].style.display = "block";
  $(".btn").filestyle('clear');

}

function clickeOnImg(num) {
  console.log('Choosen!' + num);
  var href =  document.querySelectorAll('li > img')[num].getAttribute("src");
  
  document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("xlink:href", href);
  var width = document.querySelector("#img"+ getQueryVariable("item")+ " > image").getBoundingClientRect().width;
  var height = document.querySelector("#img"+ getQueryVariable("item")+ " > image").getBoundingClientRect().height;
  document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("width", width);
  //document.querySelector("#img"+ getQueryVariable("item") +" > image").removeAttribute("height");
  document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("height", height);
  document.getElementsByClassName("arrow-block")[0].style.display = "block";
  document.getElementsByClassName("bx-wrapper")[0].style.display = "none";
  document.getElementsByClassName("alert-block")[0].style.top = "90px";
  document.getElementsByClassName("capture-text")[0].style.display = "none";
  document.getElementsByClassName("capture-text")[1].style.display = "none";
  document.getElementsByClassName("bootstrap-filestyle")[0].style.display = "none";
  
  $(".btn").filestyle('clear');
  
}
  

function encodeImageFileAsURL() {
  var filesSelected = document.getElementById("inputFileToLoad").files;
  if (filesSelected.length > 0) {
    var fileToLoad = filesSelected[0];

    var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {
      var srcData = fileLoadedEvent.target.result; // base64 data
      document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("xlink:href", srcData);
      var width = document.querySelector("#img"+ getQueryVariable("item")+ " > image").getBoundingClientRect().width;
      var height = document.querySelector("#img"+ getQueryVariable("item")+ " > image").getBoundingClientRect().height;
      document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("width", width);
      document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("height", height);
      //document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("x", "35");
      //document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("y", "0");
      document.getElementsByClassName("arrow-block")[0].style.display = "block";

      /************ Убираем слайдер к херам при выборе картинки с компа *************/
      document.getElementsByClassName("capture-text")[0].style.display = "none";
      document.getElementsByClassName("capture-text")[1].style.display = "none";
      document.getElementsByClassName("bx-wrapper")[0].style.display = "none";
      document.getElementsByClassName("alert-block")[0].style.top = "90px"; 
      document.getElementsByClassName("bootstrap-filestyle")[0].style.display = "none";
      /******************************************************************************/
    }
    fileReader.readAsDataURL(fileToLoad);
  }
  else {
     

  }
}


/*********************************** GET DATA FROM LOCAL STORAGE ************************************/

var myface = JSON.parse(localStorage.getItem("face"));
document.querySelector("#myface > image").setAttribute("x", myface.pos_x);
document.querySelector("#myface > image").setAttribute("y", myface.pos_y);
document.querySelector("#myface > image").setAttribute("width", myface.width);
document.querySelector("#myface > image").setAttribute("height", myface.height);
document.querySelector("#myface > image").setAttribute("xlink:href", myface.image);
document.querySelectorAll("circle")[1].setAttribute("stroke", "#fff225");
document.querySelectorAll("circle")[1].setAttribute("stroke-width", "1");

  if (localStorage.getItem("item1") != null) {
      var obj1 = JSON.parse(localStorage.getItem("item1")) ;
      document.querySelector("#img1 > image").setAttribute("x", obj1.pos_x);
      document.querySelector("#img1 > image").setAttribute("y", obj1.pos_y);
      document.querySelector("#img1 > image").setAttribute("width", obj1.width);
      document.querySelector("#img1 > image").setAttribute("height", obj1.height);
      document.querySelector("#img1 > image").setAttribute("xlink:href", obj1.image);
  } else {
      document.querySelector("#img1 > image").setAttribute("x", "245");
      document.querySelector("#img1 > image").setAttribute("y", "35");
      document.querySelector("#img1 > image").setAttribute("width", "108");
      document.querySelector("#img1 > image").setAttribute("xlink:href", "img/icons/zerno-1.png");
  }

  if (localStorage.getItem("item2") != null) {
      var obj2 = JSON.parse(localStorage.getItem("item2")) ;
      document.querySelector("#img2 > image").setAttribute("x", obj2.pos_x);
      document.querySelector("#img2 > image").setAttribute("y", obj2.pos_y);
      document.querySelector("#img2 > image").setAttribute("width", obj2.width);
      document.querySelector("#img2 > image").setAttribute("height", obj2.height);
      document.querySelector("#img2 > image").setAttribute("xlink:href", obj2.image);
  } else {
      document.querySelector("#img2 > image").setAttribute("x", "406");
      document.querySelector("#img2 > image").setAttribute("y", "105");
      document.querySelector("#img2 > image").setAttribute("width", "108");
      document.querySelector("#img2 > image").setAttribute("xlink:href", "img/icons/zerno-2.png");
  }

  if (localStorage.getItem("item3") != null) {
      var obj3 = JSON.parse(localStorage.getItem("item3")) ;
      document.querySelector("#img3 > image").setAttribute("x", obj3.pos_x);
      document.querySelector("#img3 > image").setAttribute("y", obj3.pos_y);
      document.querySelector("#img3 > image").setAttribute("width", obj3.width);
      document.querySelector("#img3 > image").setAttribute("height", obj3.height);
      document.querySelector("#img3 > image").setAttribute("xlink:href", obj3.image);
  } else {
      document.querySelector("#img3 > image").setAttribute("x", "455");
      document.querySelector("#img3 > image").setAttribute("y", "262");
      document.querySelector("#img3 > image").setAttribute("width", "108");
      document.querySelector("#img3 > image").setAttribute("xlink:href", "img/icons/zerno-3.png");
  }

  if (localStorage.getItem("item4") != null) {
      var obj4 = JSON.parse(localStorage.getItem("item4")) ;
      document.querySelector("#img4 > image").setAttribute("x", obj4.pos_x);
      document.querySelector("#img4 > image").setAttribute("y", obj4.pos_y);
      document.querySelector("#img4 > image").setAttribute("width", obj4.width);
      document.querySelector("#img4 > image").setAttribute("height", obj4.height);
      document.querySelector("#img4 > image").setAttribute("xlink:href", obj4.image);
  } else {
      document.querySelector("#img4 > image").setAttribute("x", "406");
      document.querySelector("#img4 > image").setAttribute("y", "410");
      document.querySelector("#img4 > image").setAttribute("width", "108");
      document.querySelector("#img4 > image").setAttribute("xlink:href", "img/icons/zerno-4.png");
  }

  if (localStorage.getItem("item5") != null) {
      var obj5 = JSON.parse(localStorage.getItem("item5")) ;
      document.querySelector("#img5 > image").setAttribute("x", obj5.pos_x);
      document.querySelector("#img5 > image").setAttribute("y", obj5.pos_y);
      document.querySelector("#img5 > image").setAttribute("width", obj5.width);
      document.querySelector("#img5 > image").setAttribute("height", obj5.height);
      document.querySelector("#img5 > image").setAttribute("xlink:href", obj5.image);
  } else {
      document.querySelector("#img5 > image").setAttribute("x", "245");
      document.querySelector("#img5 > image").setAttribute("y", "487");
      document.querySelector("#img5 > image").setAttribute("width", "108");
      document.querySelector("#img5 > image").setAttribute("xlink:href", "img/icons/zerno-5.png");
  }

  if (localStorage.getItem("item6") != null) {
      var obj6 = JSON.parse(localStorage.getItem("item6")) ;
      document.querySelector("#img6 > image").setAttribute("x", obj6.pos_x);
      document.querySelector("#img6 > image").setAttribute("y", obj6.pos_y);
      document.querySelector("#img6 > image").setAttribute("width", obj6.width);
      document.querySelector("#img6 > image").setAttribute("height", obj6.height);
      document.querySelector("#img6 > image").setAttribute("xlink:href", obj6.image);
  } else {
      document.querySelector("#img6 > image").setAttribute("x", "90");
      document.querySelector("#img6 > image").setAttribute("y", "410");
      document.querySelector("#img6 > image").setAttribute("width", "108");
      document.querySelector("#img6 > image").setAttribute("xlink:href", "img/icons/zerno-6.png");
  }

  if (localStorage.getItem("item7") != null) {
      var obj7 = JSON.parse(localStorage.getItem("item7")) ;
      document.querySelector("#img7 > image").setAttribute("x", obj7.pos_x);
      document.querySelector("#img7 > image").setAttribute("y", obj7.pos_y);
      document.querySelector("#img7 > image").setAttribute("width", obj7.width);
      document.querySelector("#img7 > image").setAttribute("height", obj7.height);
      document.querySelector("#img7 > image").setAttribute("xlink:href", obj7.image);
  } else {
      document.querySelector("#img7 > image").setAttribute("x", "40");
      document.querySelector("#img7 > image").setAttribute("y", "262");
      document.querySelector("#img7 > image").setAttribute("width", "108");
      document.querySelector("#img7 > image").setAttribute("xlink:href", "img/icons/zerno-7.png");
  }

  if (localStorage.getItem("item8") != null) {
      var obj8 = JSON.parse(localStorage.getItem("item8")) ;
      document.querySelector("#img8 > image").setAttribute("x", obj8.pos_x);
      document.querySelector("#img8 > image").setAttribute("y", obj8.pos_y);
      document.querySelector("#img8 > image").setAttribute("width", obj8.width);
      document.querySelector("#img8 > image").setAttribute("height", obj8.height);
      document.querySelector("#img8 > image").setAttribute("xlink:href", obj8.image);
  } else {
      document.querySelector("#img8 > image").setAttribute("x", "88");
      document.querySelector("#img8 > image").setAttribute("y", "114");
      document.querySelector("#img8 > image").setAttribute("width", "108");
      document.querySelector("#img8 > image").setAttribute("xlink:href", "img/icons/zerno-8.png");
  }

/*********************************** GET DATA FROM LOCAL STORAGE ************************************/

function leftClick() {
    console.log("left click!");
    var lx = document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute("x");
    document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("x", Number(lx)-4);
}

function rightClick() {
    console.log("right click!");
    var rx = document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute("x");
    document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("x", Number(rx)+4);
}

function upClick() {
    console.log("up click!");
    var uy = document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute("y");
    document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("y", Number(uy)-4);
}

function downClick() {
    console.log("down click!");
    var dy = document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute("y");
    document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("y", Number(dy)+4);
}

function zoomIn() {
    var zoomWidth = document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute("width");
    var zoomHeight = document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute("height");
    document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("width", Number(zoomWidth)+20);
    document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("height", Number(zoomHeight)+20);
    console.log(zoomWidth +" X "+zoomHeight);
}

function zoomOut() {
    var zoomWidth = document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute("width");
    var zoomHeight = document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute("height");
    document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("width", Number(zoomWidth)-20);
    document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("height", Number(zoomHeight)-20);
    console.log(zoomWidth +" X "+zoomHeight);
}

window.item = Number(getQueryVariable("item"));

function setDataToLocalStorage() {
    window.item = window.item + 1;

    if (document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute("xlink:href") == "img/icons-yellow/zerno-y-"+getQueryVariable("item")+".png")
    {
      if (window.item <= 8) {
        document.querySelector(".next").setAttribute("href", "thirth.html?item=" + window.item);

      }
      else {
        alert("Thats All folks");
      }
      return;
    }
    var cx = document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute("x");
    var cy = document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute("y");

    var width = document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute('width');
    var height = document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute('height');
    var href = document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute("xlink:href");

    var item = {
        image: href,
        pos_x : cx,
        pos_y : cy,
        width : width,
        height : height
    };              
     
    var serialFace = JSON.stringify(item);
    localStorage.setItem("item"+getQueryVariable("item"), serialFace);
    if (window.item <= 8) {
      document.querySelector(".next").setAttribute("href", "thirth.html?item=" + window.item);
    }
    else {
      alert("Thats All folks");
    }
    
    //localStorage.clear();
}

function stepBack() {
  if (document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute("xlink:href") == "img/icons-yellow/zerno-y-"+ getQueryVariable("item") +".png")
  {
    alert(document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute("xlink:href"));
    document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("xlink:href", "img/icons/zerno-"+getQueryVariable("item"));
  }
  else {
    var cx = document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute("x");
    var cy = document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute("y");

    var width = document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute('width');
    var height = document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute('height');
    var href = document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute("xlink:href");

    var item = {
        image: href,
        pos_x : cx,
        pos_y : cy,
        width : width,
        height : height
    };               
    var serialFace = JSON.stringify(item);
    localStorage.setItem("item"+getQueryVariable("item"), serialFace);
  }

  var prev = window.item-1;
  if (prev == 0) {
    alert(prev);
    document.querySelector(".prev").setAttribute("href", "second.html");
  }
  else {
    
    document.querySelector(".prev").setAttribute("href", "thirth.html?item=" + prev);
  }
}

/*

  var getLocalStorageSize = function() {
      var total = 0;
      for (var x in localStorage) {
          // Value is multiplied by 2 due to data being stored in `utf-16` format, which requires twice the space.
          var amount = (localStorage[x].length * 2) / 1024 / 1024;
          total += amount;
      }
      return total.toFixed(2);
  };

*/


/*<svg width="580" height="400" xmlns="http://www.w3.org/2000/svg">
 <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->
 <g>
  <title>background</title>
  <rect fill="#fff" id="canvas_background" height="402" width="582" y="-1" x="-1"/>
  <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
   <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
  </g>
 </g>
 <g>
  <title>Layer 1</title>
  <path stroke="#000" id="svg_6" d="m201.741096,272.999672l35.422115,-58.114478l0,0c-37.526888,-17.530559 -48.235139,-50.554384 -24.739014,-76.293585c23.495684,-25.739053 73.507186,-35.769508 115.537521,-23.172756c42.030323,12.59668 62.325592,43.697779 46.885893,71.851573c-15.438884,28.153783 -61.559163,44.14624 -106.54935,36.946238l-66.557165,48.783009z" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="#fff"/>
 </g>
</svg>*/