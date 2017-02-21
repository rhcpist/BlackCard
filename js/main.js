$(function(){
    $(".btn").filestyle({input: false});
    $(".btn").filestyle('buttonText', 'ОБЕРІТЬ З ГАЛЕРЕЇ');

    if (getPosition()==0) { 
        document.querySelector(".prev").style.display = "none"; 
        document.querySelector(".alert-block").style.paddingTop = "280px";
        document.querySelector(".prev").style.display = "none";
        $(".btn").filestyle('buttonText', 'ОБЕРІТЬ ФОТО');
    }

    $(".mCustomScrollbar").mCustomScrollbar({
        theme:"light-3",
        axis:"xy",
            advanced: { autoExpandHorizontalScroll:true,updateOnContentResize:true }

    });
});

var position = 0 ;

var default_param = [
    {x:0,y:0,width:160,height:160,rotation:0},
    {x:0,y:0,width:248.53,height:300,rotation:0},
    {x:0,y:0,width:300,height:300,rotation:0},
    {x:0,y:0,width:300,height:248.53,rotation:0},
    {x:0,y:0,width:300,height:300,rotation:0},
    {x:0,y:0,width:248.53,height:300,rotation:0},
    {x:0,y:0,width:300,height:300,rotation:0},
    {x:0,y:0,width:300,height:248.53,rotation:0},
    {x:0,y:0,width:300,height:300,rotation:0}
];

var help = [
    //"<span>Оберіть Ваше</span><br><span>улюблене фото -</span><br><span>воно буде</span><br><span>завантажено в центр</span><br><span>Карти Мрій</span><br>",
    "<span>Вы можете</span><br><span>змінити фото,</span><br><span>або перейти на перший сектор</span><br><span>Карти Мрій,</span><br><span>натиснувши «Далі»</span><br>",
    "<br><br><span>Оберіть фото,</span><br><span>що відображає</span><br><span>Вашу мрію</span><br><span>про успіх</span><br><br>",
    "<br><br><span>Оберіть фото,</span><br><span>що відображає</span><br><span>Вашу мрію</span><br><span>про кохання<span><br><br>",
    "<br><span>Оберіть фото,</span><br><span>що відображає</span><br><span>Ваші мрії</span><br><span>про творчість</span><br><span>чи подорожі</span><br><br>",
    "<span><br>Оберіть фото,</span><br><span>що відображає</span><br><span>Ваше уявлення про здоров'я,</span><br><span>гармонію чи красу</span><br>",
    "<span><br>Оберіть фото,</span><br><span>що відображає</span><br><span>Вашу мрію</span><br><span>про кар'єру</span><br><br>",
    "<span><br>Оберіть фото,</span><br><span>що відображає</span><br><span>Ваше прагнення</span><br><span>до розвитку</span><br><br>",
    "<span><br>Оберіть фото,</span><br><span>що відображає</span><br><span>Вашу мрію</span><br><span>про сім'ю</span><br><br>",
    "<span><br>Оберіть фото,</span><br><span>що відображає</span><br><span>Вашу мрію</span><br><span>про достаток</span><br><br>"
];

function setHelpText(position) {
    document.querySelector(".block-text > div").innerHTML = ""; 
    document.querySelector(".block-text > div").innerHTML = help[position];
}

function animatePolygon(number) {
    //document.querySelectorAll("polygon").forEach(function(item){ item.setAttribute("stroke-width", "1"); });
    var polygons = document.querySelectorAll("polygon");
    for (var i = 0; i < polygons.length; i++) {
        polygons[i].setAttribute("stroke-width", "1");
    }

    document.querySelectorAll("polygon")[number].setAttribute("stroke-width", "6");
    var images = document.querySelectorAll('image');
    /*document.querySelectorAll("image").forEach( function(item, index, images) {
        if (index != 0 && item.getAttribute("xlink:href") == images64[index].zerno) {
            document.querySelectorAll("image")[index].setAttribute("xlink:href", images64[index].zerno_def);
        }
    } );*/

    for (var i = 0; i < images.length; i++) {
        if (i != 0 && images[i].getAttribute("xlink:href") == images64[i].zerno) {
            document.querySelectorAll("image")[i].setAttribute("xlink:href", images64[i].zerno_def);
        }
    }

    document.querySelector("#img"+(number+1)+" image").setAttribute("xlink:href", images64[(number+1)].zerno);
    document.querySelector("#img"+(number+1)+" image").setAttribute("x", default_param[(number+1)].x);
    document.querySelector("#img"+(number+1)+" image").setAttribute("y", default_param[(number+1)].y);
    document.querySelector("#img"+(number+1)+" image").setAttribute("width", default_param[(number+1)].width);
    document.querySelector("#img"+(number+1)+" image").setAttribute("height", default_param[(number+1)].height);

}

function getPosition() {
    return position;
}

function getImageElement() {
    return document.querySelector('#img' + getPosition() + ' > image');
}

function getImage(){
    return getImageElement().getAttribute( "xlink:href") ;
}

function setImage( image ) {
    var element = getImageElement() ;
    element.setAttribute( 'x' , default_param[ getPosition() ].x );
    element.setAttribute( 'y' , default_param[ getPosition() ].y );
    element.setAttribute( 'width' , default_param[ getPosition() ].width );
    element.setAttribute( 'height' , default_param[ getPosition() ].height );
    element.setAttribute( "xlink:href", image ) ;

    waitingDialog.hide();
    if (document.querySelector("#img0 image").getAttribute("xlink:href") == "/img/sun.png") {
        document.querySelectorAll("circle")[0].setAttribute("stroke", "");
        document.querySelectorAll("circle")[0].setAttribute("stroke-width", "");
        document.querySelector("#img0 image").setAttribute("xlink:href", images64[0].face);
    }
}

function resizeImage( image  ){

    //console.log( "Image1 size: " + (image.length/1048576) + " MB" );

    //Создадим картинку из данных
    var img = new Image() ;

    img.onload = function () {
        //var width = default_param[ getPosition() ].width;
        //var height = default_param[ getPosition() ].height;

        var width = 600;
        var height = 600;

        var orintation = this.width > this.height ? true : false ;

        if( orintation ){
            //Горизонтальная и ужимаем по горизонтали
            height = this.height / (this.width/width);
        }
        else
        {
            //Вертикальная и ужимаем по вуртикали
            width = this.width / (this.height/height);
        }

        //Создаем новый елемент канваса
        var canvas = document.createElement('canvas') ;

        canvas.height = height;
        canvas.width = width;

        //Рисуем картинку
        canvas.getContext('2d').drawImage( img, 0, 0, width, height );

        //console.log( width );
        //console.log( height );

        var tmp = canvas.toDataURL( 'image/png' , 1.0 );
        //console.log( "Image2 size: " + (tmp.length/1048576) + " MB" );
        setImage( tmp );

        //Возврощаем данные уже пригодные для вставки
        //setImage( canvas.toDataURL( 'image/png' , 1.0 ) );
    } ;
    img.src = image ;
}

function reDrawGallery() {
    var pos = getPosition();
    var ul = document.querySelector( '.galereya ul' );
    //console.log(images64[pos].img1);
    ul.innerHTML =
        "<li onclick='setImage(\"" + images64[pos].img1 + "\");'><img src='"+preview_images64[pos].img1+"'/></li>" +
        "<li onclick='setImage(\"" + images64[pos].img2 + "\");'><img src='"+preview_images64[pos].img2+"' /></li>" +
        "<li onclick='setImage(\"" + images64[pos].img3 + "\");'><img src='"+preview_images64[pos].img3+"'/></li>" +
        "<li onclick='setImage(\"" + images64[pos].img4 + "\");'><img src='"+preview_images64[pos].img4+"' /></li>" +
        "<li onclick='setImage(\"" + images64[pos].img5 + "\");'><img src='"+preview_images64[pos].img5+"'/></li>" +
        "<li onclick='setImage(\"" + images64[pos].img6 + "\");'><img src='"+preview_images64[pos].img6+"' /></li>" +
        "<li onclick='setImage(\"" + images64[pos].img7 + "\");'><img src='"+preview_images64[pos].img7+"'/></li>" +
        "<li onclick='setImage(\"" + images64[pos].img8 + "\");'><img src='"+preview_images64[pos].img8+"'/></li>";
}

function btn_next() {
    if ( getPosition() == 1 ) { document.querySelector(".prev").style.display = "block"; }
    if ( getPosition() == 8 ) {
        document.querySelectorAll("polygon")[7].setAttribute("stroke-width", "1");
        if (document.querySelector("#img8 image").getAttribute("xlink:href") ==  images64[8].zerno) {
            document.querySelector("#img8 image").setAttribute("xlink:href", images64[8].zerno_def);
        }
        getDomScreen();
        return null;
    }

    animatePolygon(getPosition());
    document.querySelector(".alert-block").style.paddingTop = "0px";
    document.querySelector(".input-group").style.display = "block";
    document.querySelector(".galereya").style.display = "block";
    document.getElementsByClassName("arrow-block")[0].style.display = "none";
    $(".btn").filestyle('buttonText', 'ОБЕРІТЬ З ГАЛЕРЕЇ');
    position++ ;

    /*if( getImage() == '/img/icons/zerno-' + getPosition() + '.png' ){
        setImage( '/img/icons-yellow/zerno-y-' + getPosition() + '.png' );
    }*/

    setHelpText(getPosition());
    reDrawGallery();
}

function btn_prev() {
    if ( getPosition() == 2 ) { document.querySelector(".prev").style.display = "none"; }
    //if ( getPosition() == 0 ) { document.querySelector(".prev").style.display = "none"; }
    if( getPosition() < 2 ){ return null; }
    position--;

   animatePolygon(getPosition()-1); 
   setHelpText(getPosition()); 
   reDrawGallery();
}

function handleFiles() {

    var filesToUpload = document.getElementById('inputFileToLoad').files;

    if( filesToUpload.length < 1 ){ return null; }
    waitingDialog.show();

    document.querySelector(".fa-camera-retro").style.display = "inline-block";
    document.getElementsByClassName("arrow-block")[0].style.display = "block";
    document.getElementsByClassName("arrow-block")[0].style.marginTop = "185px";
    document.querySelector(".galereya").style.display = "none";
    document.querySelector(".input-group").style.display = "none";

    if ( getPosition() == 0 ) { 
        document.querySelector(".arrows").style.display = "block";
        document.querySelector(".alert-block").style.paddingTop = "0";
        document.querySelector(".fa-camera-retro").style.display = "none";
        document.querySelector(".input-group").style.display = "block";
        document.querySelectorAll("circle")[0].setAttribute("stroke", "#fff225");
        document.querySelectorAll("circle")[0].setAttribute("stroke-width", "1");
	    setHelpText(getPosition());
    }

    var reader = new FileReader();
    // Set the image once loaded into file reader
    reader.onload = function(e) {

        var img = e.target.result;

        resizeImage( img );
    };

    reader.readAsDataURL( filesToUpload[0] );
    $(".btn").filestyle('clear');
}

 function setDataToLocalStorage() {

	localStorage.clear();              
	var saveImg = JSON.stringify();
	localStorage.setItem("face", saveImg);
}

function drawImageIOSFix (ctx, img) {
    var vertSquashRatio = detectVerticalSquash (img)
    var arg_count = arguments.length
    switch (arg_count) {
        case 4  : ctx.drawImage (img, arguments[2], arguments[3] / vertSquashRatio); break
        case 6  : ctx.drawImage (img, arguments[2], arguments[3], arguments[4], arguments[5] / vertSquashRatio); break
        case 8  : ctx.drawImage (img, arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7] / vertSquashRatio); break
        case 10 : ctx.drawImage (img, arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9] / vertSquashRatio); break
    }

    // Detects vertical squash in loaded image.
    // Fixes a bug which squash image vertically while drawing into canvas for some images.
    // This is a bug in iOS6 (and IOS7) devices. This function from https://github.com/stomita/ios-imagefile-megapixel
    function detectVerticalSquash (img) {
        var iw = img.naturalWidth, ih = img.naturalHeight
        var canvas = document.createElement ("canvas")
        canvas.width  = 1
        canvas.height = ih
        var ctx = canvas.getContext('2d')
        ctx.drawImage (img, 0, 0)
        var data = ctx.getImageData(0, 0, 1, ih).data
        // search image edge pixel position in case it is squashed vertically.
        var sy = 0, ey = ih, py = ih
        while (py > sy) {
            var alpha = data[(py - 1) * 4 + 3]
            if (alpha === 0) {ey = py} else {sy = py}
            py = (ey + sy) >> 1
        }
        var ratio = (py / ih)
        return (ratio === 0) ? 1 : ratio
    }
}

function getDomScreen() {
    waitingDialog.show();

    var svg = document.querySelector( "svg" );
    svg.setAttribute('width', 600);
    svg.setAttribute('height', 600);

    var svgData = new XMLSerializer().serializeToString( svg );

    var dataUri = 'data:image/svg+xml;base64,' + btoa( svgData ) ;

    var img = new Image();

    img.src = dataUri;

    setTimeout( function () {

        var canvas = document.createElement( "canvas" );

        canvas.width  = 600;
        canvas.height = 600;

        canvas.getContext( "2d" ).drawImage( img, 0, 0, 600, 600);

        var image = canvas.toDataURL( "image/png" ) ;
        //document.getElementById('test').setAttribute('src' , image);
        localStorage.clear();
        localStorage.setItem( "image", image );

        window.location = "final.html";

    }, 5000 );
}

function prevStep() {
    document.getElementsByClassName("arrow-block")[0].style.display = "none";
    document.querySelector(".galereya").style.display = "block";
    document.getElementsByClassName("arrow-block")[0].style.marginTop = "0px";
    document.querySelector(".input-group").style.display = "block";
}

function isSafari() {
    return /^((?!chrome).)*safari/i.test(navigator.userAgent);
}

function upClick() {
    var obj = getImageElement();

    var I = 10 ;
    var rotation = parseFloat( obj.style.transform.substr(7, obj.style.transform.length-11 ) );
    if( isSafari() ){ rotation = 0; }

    obj.setAttribute( "y", parseFloat( obj.getAttribute("y") ) - Math.cos( rotation )*I );
    obj.setAttribute( "x", parseFloat( obj.getAttribute("x") ) - Math.sin( rotation )*I );
}

function downClick() {
    var obj = getImageElement();

    var I = 10 ;
    var rotation = parseFloat( obj.style.transform.substr(7, obj.style.transform.length-11 ) );
    if( isSafari() ){ rotation = 0; }

    obj.setAttribute( "y", parseFloat( obj.getAttribute("y") ) + Math.cos( rotation )*I );
    obj.setAttribute( "x", parseFloat( obj.getAttribute("x") ) + Math.sin( rotation )*I );
}

function rightClick() {
    var obj = getImageElement();

    var I = 10 ;
    var rotation = parseFloat( obj.style.transform.substr(7, obj.style.transform.length-11 ) );
    if( isSafari() ){ rotation = 0; }

    obj.setAttribute( "y", parseFloat( obj.getAttribute("y") ) - Math.sin( rotation )*I );
    obj.setAttribute( "x", parseFloat( obj.getAttribute("x") ) + Math.cos( rotation )*I );
}

function leftClick() {
    var obj = getImageElement();

    var I = 10 ;
    var rotation = parseFloat( obj.style.transform.substr(7, obj.style.transform.length-11 ) );
    if( isSafari() ){ rotation = 0; }

    obj.setAttribute( "y", parseFloat( obj.getAttribute("y") ) + Math.sin( rotation )*I );
    obj.setAttribute( "x", parseFloat( obj.getAttribute("x") ) - Math.cos( rotation )*I );
}

function zoomIn() {
    var zoomWidth = getImageElement().getAttribute("width");
    var zoomHeight = getImageElement().getAttribute("height");
    getImageElement().setAttribute("width", Number(zoomWidth)+10);
    getImageElement().setAttribute("height", Number(zoomHeight)+10);
}

function zoomOut() {
    var zoomWidth = getImageElement().getAttribute("width");
    var zoomHeight = getImageElement().getAttribute("height");
    getImageElement().setAttribute("width", Number(zoomWidth)-10);
    getImageElement().setAttribute("height", Number(zoomHeight)-10);
}

function rotationRight(){
    var obj = getImageElement();
    var rotation_str = obj.style.transform  ;
    var rotation = parseFloat( rotation_str.substr(7, rotation_str.length-11 ) );
    obj.style.transform  = 'rotate('+ (rotation + 0.1 ) +'rad)' ;
}
function rotationLeft() {
    var obj = getImageElement();
    var rotation_str = obj.style.transform  ;
    var rotation = parseFloat( rotation_str.substr(7, rotation_str.length-11 ) );
    obj.style.transform  = 'rotate('+ (rotation - 0.1 ) +'rad)' ;
}


var waitingDialog = waitingDialog || (function ($) {
    'use strict';

    // Creating modal dialog's DOM
    var $dialog = $(
        '<div class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;">' +
        '<div class="modal-dialog modal-m">' +
        '<div class="modal-content">' +
            '<div class="modal-header"><h3 style="margin:0;"></h3></div>' +
            '<div class="modal-body">' +
                '<div class="progress progress-striped active" style="margin-bottom:0;"><div class="progress-bar" style="width: 100%"></div></div>' +
            '</div>' +
        '</div></div></div>');

    return {
        /**
         * Opens our dialog
         * @param message Custom message
         * @param options Custom options:
         *                options.dialogSize - bootstrap postfix for dialog size, e.g. "sm", "m";
         *                options.progressType - bootstrap postfix for progress bar type, e.g. "success", "warning".
         */
        show: function (message, options) {
            // Assigning defaults
            if (typeof options === 'undefined') {
                options = {};
            }
            if (typeof message === 'undefined') {
                message = 'Фото завантажується';
            }
            var settings = $.extend({
                dialogSize: 'm',
                progressType: '',
                onHide: null // This callback runs after the dialog was hidden
            }, options);

            // Configuring dialog
            $dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-' + settings.dialogSize);
            $dialog.find('.progress-bar').attr('class', 'progress-bar');
            if (settings.progressType) {
                $dialog.find('.progress-bar').addClass('progress-bar-' + settings.progressType);
            }
            $dialog.find('h3').text(message);
            // Adding callbacks
            if (typeof settings.onHide === 'function') {
                $dialog.off('hidden.bs.modal').on('hidden.bs.modal', function (e) {
                    settings.onHide.call($dialog);
                });
            }
            // Opening dialog
            $dialog.modal();
        },
        /**
         * Closes dialog
         */
        hide: function () {
            $dialog.modal('hide');
        }
    };

})(jQuery);

function move( fill , x , y ) {
    if (fill != "url(#img"+ getPosition() +")") {
        return 0;
    }

    var obj = document.querySelector( fill.substr( 4 ,  fill.length-5 ) + ' > image');
    //Получаем угол поворота
    var rotation = parseFloat( obj.style.transform.substr(7, obj.style.transform.length-11 ) );
    if( isSafari() ){ rotation = 0; }

    //Перемещяем изображение
    obj.setAttribute( "y", parseFloat( obj.getAttribute("y") ) + Math.cos( rotation )*y - Math.sin( rotation )*x );
    obj.setAttribute( "x", parseFloat( obj.getAttribute("x") ) + Math.sin( rotation )*y + Math.cos( rotation )*x );
}

var mouseOld = null;

function mouseStart() {
    mouseOld = this.event;
}

function mouseUp() {
    mouseOld = null;
}


function mouseMove( ) {
    if( !mouseOld ){ return null; }
    if( this.event.which != 1 ){ return null ; }

    var x = this.event.clientX - mouseOld.clientX ;
    var y = this.event.clientY - mouseOld.clientY ;

    mouseOld = this.event ;

    move( this.event.target.getAttribute('fill') , x, y );

}

var touchOld = null;

function touchStart() { touchOld = this.event.touches[0]; }

function touchMove( ) {
    if( ! touchOld ){ return null; }
    var x = this.event.touches[0].clientX - touchOld.clientX ;
    var y = this.event.touches[0].clientY - touchOld.clientY ;
    touchOld = this.event.touches[0];

    move( this.event.target.getAttribute('fill') , x, y );
}
