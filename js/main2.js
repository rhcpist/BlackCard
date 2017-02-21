$(function(){

  $(".btn").filestyle({input: false});
  $(".btn").filestyle('buttonText', 'ОБЕРІТЬ З ГАЛЕРЕЇ');
  
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
    minSlides: 3,
    maxSlides: 3,
    slideWidth: 180,
    slideMargin: 10,
    infiniteLoop: false
    
  });

  $(".bx-prev").css({
      "transform": "rotate(90deg)",
      "top": "30px", 
      "margin-left" : "60px"
  });

  $(".bx-next").css({
      "transform": "rotate(90deg)",
      "top": "506px", 
      "margin-right" : "68px"
  });
  $(".bx-viewport").css("height", "540px");
  

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
    $(".bx-viewport").css("height", "160px");
}

 if (localStorage.getItem("item" + getQueryVariable("item")) != null) {
    var obj = JSON.parse(localStorage.getItem("item" + getQueryVariable("item"))) ;
    document.querySelector("#img"+getQueryVariable("item")+" > image").setAttribute("x", obj.pos_x);
    document.querySelector("#img"+getQueryVariable("item")+" > image").setAttribute("y", obj.pos_y);
    document.querySelector("#img"+getQueryVariable("item")+" > image").setAttribute("width", obj.width);
    document.querySelector("#img"+getQueryVariable("item")+" > image").setAttribute("height", obj.height);
    document.querySelector("#img"+getQueryVariable("item")+" > image").setAttribute("xlink:href", obj.image);

 } else {
    document.querySelector("#img" + getQueryVariable("item") + "> image").setAttribute("xlink:href", "img/icons-yellow/zerno-y-"+getQueryVariable("item")+".png");
 }

document.querySelectorAll('li > img')[0].src = "img/gallery-"+ getQueryVariable("item") +"/1.png";
document.querySelectorAll('li > img')[1].src = "img/gallery-"+ getQueryVariable("item") +"/2.png";
document.querySelectorAll('li > img')[2].src = "img/gallery-"+ getQueryVariable("item") +"/3.png";
document.querySelectorAll('li > img')[3].src = "img/gallery-"+ getQueryVariable("item") +"/4.png";
document.querySelectorAll('li > img')[4].src = "img/gallery-"+ getQueryVariable("item") +"/5.png";
document.querySelectorAll('li > img')[5].src = "img/gallery-"+ getQueryVariable("item") +"/6.png";
document.querySelectorAll('li > img')[6].src = "img/gallery-"+ getQueryVariable("item") +"/7.png";
document.querySelectorAll('li > img')[7].src = "img/gallery-"+ getQueryVariable("item") +"/8.png";

});



function prevStep() {
  document.getElementsByClassName("arrow-block")[0].style.display = "none";

  document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("xlink:href", "img/icons-yellow/zerno-y-"+getQueryVariable("item")+".png");
  document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("x", eval("image" + getQueryVariable("item")).x);
  document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("y", eval("image" + getQueryVariable("item")).y);
  document.getElementsByClassName("bx-wrapper")[0].style.display = "block";
  document.getElementsByClassName("alert-block")[0].style.top = "-150px";
  document.getElementsByClassName("capture-text")[0].style.display = "block";
  document.getElementsByClassName("capture-text")[1].style.display = "block";
  document.querySelectorAll("a > i").forEach(function(entry){ entry.style.display = "visible"; });
}

function clickeOnImg(num) {
  var href =  document.querySelectorAll('li > img')[num].getAttribute("src");
  
  document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("xlink:href", href);
  document.getElementsByClassName("arrow-block")[0].style.display = "block";
  document.getElementsByClassName("bx-wrapper")[0].style.display = "none";
  document.getElementsByClassName("alert-block")[0].style.top = "90px";
  document.getElementsByClassName("capture-text")[0].style.display = "none";
  document.getElementsByClassName("capture-text")[1].style.display = "none";
  document.querySelectorAll("a > i").forEach(function(entry){ entry.style.visibility = "hidden"; });
}
  

function encodeImageFileAsURL() {
  document.querySelectorAll("a > i").forEach(function(entry){ entry.style.visibility = "visible"; });
  var filesSelected = document.getElementById("inputFileToLoad").files;
  if (filesSelected.length > 0) {
    var fileToLoad = filesSelected[0];

    var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {
      var srcData = fileLoadedEvent.target.result; // base64 data
      document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("xlink:href", srcData);
      /*var width = document.querySelector("#img"+ getQueryVariable("item")+ " > image").getBoundingClientRect().width;
      var height = document.querySelector("#img"+ getQueryVariable("item")+ " > image").getBoundingClientRect().height;
      document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("width", width);
      document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("height", height);*/
      document.getElementsByClassName("arrow-block")[0].style.display = "block";

      /************ Убираем слайдер к херам при выборе картинки с компа *************/
      document.getElementsByClassName("capture-text")[0].style.display = "none";
      document.getElementsByClassName("capture-text")[1].style.display = "none";
      document.getElementsByClassName("bx-wrapper")[0].style.display = "none";
      document.getElementsByClassName("alert-block")[0].style.top = "90px"; 
      //document.getElementsByClassName("bootstrap-filestyle")[0].style.display = "none";
      /******************************************************************************/
    }
    fileReader.readAsDataURL(fileToLoad);
  }
  else {
     

  }
}


function handleFiles()
{
    document.querySelectorAll("a > i").forEach(function(entry){ entry.style.visibility = "visible"; });
    var filesToUpload = document.getElementById('inputFileToLoad').files;
    var file = filesToUpload[0];
    if (file.size > 1380742) {
    	alert("Будь ласка, завантажте фото меншого розмiру!");
	return;
    }
    // Create an image
    var img = document.createElement("img");
    // Create a file reader
    var reader = new FileReader();
    // Set the image once loaded into file reader
    reader.onload = function(e)
    {
        img.src = e.target.result;

        var canvas = document.createElement("canvas");
        //var canvas = $("<canvas>", {"id":"testing"})[0];
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        var MAX_WIDTH = 400;
        var MAX_HEIGHT = 300;
        var width = img.width;
        var height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        var dataurl = canvas.toDataURL("image/png");
        document.getElementsByClassName("arrow-block")[0].style.display = "block";
        /************ Убираем слайдер к херам при выборе картинки с компа *************/
        document.getElementsByClassName("capture-text")[0].style.display = "none";
        document.getElementsByClassName("capture-text")[1].style.display = "none";
        document.getElementsByClassName("bx-wrapper")[0].style.display = "none";
        document.getElementsByClassName("alert-block")[0].style.top = "90px"; 
        //document.getElementsByClassName("bootstrap-filestyle")[0].style.display = "none";
        /******************************************************************************/
        document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("xlink:href", dataurl); 
    }
    reader.readAsDataURL(file);
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
      document.querySelector("#img1 > image").setAttribute("x", "0");
      document.querySelector("#img1 > image").setAttribute("y", "0");
      document.querySelector("#img1 > image").setAttribute("width", "248.53");
      document.querySelector("#img1 > image").setAttribute("height", "300");
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
      document.querySelector("#img2 > image").setAttribute("x", "0");
      document.querySelector("#img2 > image").setAttribute("y", "0");
      document.querySelector("#img2 > image").setAttribute("width", "300");
      document.querySelector("#img2 > image").setAttribute("height", "300");
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
      document.querySelector("#img3 > image").setAttribute("x", "0");
      document.querySelector("#img3 > image").setAttribute("y", "0");
      document.querySelector("#img3 > image").setAttribute("width", "300");
      document.querySelector("#img3 > image").setAttribute("height", "248.53");
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
      document.querySelector("#img4 > image").setAttribute("x", "0");
      document.querySelector("#img4 > image").setAttribute("y", "0");
      document.querySelector("#img4 > image").setAttribute("width", "300");
      document.querySelector("#img4 > image").setAttribute("height", "300");
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
      document.querySelector("#img5 > image").setAttribute("x", "0");
      document.querySelector("#img5 > image").setAttribute("y", "0");
      document.querySelector("#img5 > image").setAttribute("width", "248.53");
      document.querySelector("#img5 > image").setAttribute("height", "300");
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
      document.querySelector("#img6 > image").setAttribute("x", "0");
      document.querySelector("#img6 > image").setAttribute("y", "0");
      document.querySelector("#img6 > image").setAttribute("width", "300");
      document.querySelector("#img6 > image").setAttribute("height", "300");
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
      document.querySelector("#img7 > image").setAttribute("x", "0");
      document.querySelector("#img7 > image").setAttribute("y", "0");
      document.querySelector("#img7 > image").setAttribute("width", "300");
      document.querySelector("#img7 > image").setAttribute("height", "248.53");
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
      document.querySelector("#img8 > image").setAttribute("x", "0");
      document.querySelector("#img8 > image").setAttribute("y", "0");
      document.querySelector("#img8 > image").setAttribute("width", "300");
      document.querySelector("#img8 > image").setAttribute("width", "300");
      document.querySelector("#img8 > image").setAttribute("xlink:href", "img/icons/zerno-8.png");
  }

/*********************************** GET DATA FROM LOCAL STORAGE ************************************/

function leftClick() {
    var lx = document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute("x");
    document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("x", Number(lx)-4);
}

function rightClick() {
    var rx = document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute("x");
    document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("x", Number(rx)+4);
}

function upClick() {
    var uy = document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute("y");
    document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("y", Number(uy)-4);
}

function downClick() {
    var dy = document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute("y");
    document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("y", Number(dy)+4);
}

function zoomIn() {
    var zoomWidth = document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute("width");
    var zoomHeight = document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute("height");
    document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("width", Number(zoomWidth)+20);
    document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("height", Number(zoomHeight)+20);
}

function zoomOut() {
    var zoomWidth = document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute("width");
    var zoomHeight = document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute("height");
    document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("width", Number(zoomWidth)-20);
    document.querySelector("#img"+ getQueryVariable("item") +" > image").setAttribute("height", Number(zoomHeight)-20);
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
        //alert("Thats All folks");
        document.querySelector(".next").setAttribute("href", "final.html");
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

    item.image = getBase64Image(item);

    var serialFace = JSON.stringify(item);
    localStorage.setItem("item"+getQueryVariable("item"), serialFace);
    if (window.item <= 8) {
      document.querySelector(".next").setAttribute("href", "thirth.html?item=" + window.item);
    }
    else {
      //alert("Thats All folks");
      document.querySelector(".next").setAttribute("href", "final.html");
    }
    
    //localStorage.clear();
}

function stepBack() {
  if (document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute("xlink:href") == "img/icons-yellow/zerno-y-"+ getQueryVariable("item") +".png")
  {
    //alert(document.querySelector("#img"+ getQueryVariable("item") +" > image").getAttribute("xlink:href"));
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
    //alert(prev);
    document.querySelector(".prev").setAttribute("href", "second.html");
  }
  else {
    
    document.querySelector(".prev").setAttribute("href", "thirth.html?item=" + prev);
  }
}

function getBase64Image(img) {  

    var canvas = document.createElement("canvas");  
    canvas.width = img.width;  
    canvas.height = img.height;

    var image = new Image();
    image.src = img.image;

    if (img.image.slice(-3) == "png")
    {
      var ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0);
      var dataURL = canvas.toDataURL("image/jpg");
      return dataURL; 
    }
    else {
      return image.src;
    }
    //return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");   
}
