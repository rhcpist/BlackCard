function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'photos.json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {

            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(xobj.responseText);

        }
    }
    xobj.send(null);

}

// Call to function with anonymous callback
loadJSON(function(response) {
    // Do Something with the response e.g.
    jsonresponse = JSON.parse(response);

    // Assuming json data is wrapped in square brackets as Drew suggests
    console.log(jsonresponse);

    // Load data from json to Category #1
    if (localStorage.getItem("cat1") === null) {
        document.querySelector("#img1 > image").setAttribute("x", jsonresponse["foto"]["cat1"].pos_x);
        document.querySelector("#img1 > image").setAttribute("y", jsonresponse["foto"]["cat1"].pos_y);
        document.querySelector("#img1 > image").setAttribute("width", jsonresponse["foto"]["cat1"].width);
        document.querySelector("#img1 > image").setAttribute("height", jsonresponse["foto"]["cat1"].height);
        document.querySelector("#img1 > image").setAttribute("xlink:href", jsonresponse["foto"]["cat1"].image);
    }
    else {
        var obj1 = JSON.parse(localStorage.getItem("cat1"));
        document.querySelector("#img1 > image").setAttribute("x", obj1.pos_x);
        document.querySelector("#img1 > image").setAttribute("y", obj1.pos_y);
        document.querySelector("#img1 > image").setAttribute("width", obj1.width);
        document.querySelector("#img1 > image").setAttribute("height", obj1.height);
        document.querySelector("#img1 > image").setAttribute("xlink:href", obj1.image);
    }
    

    // Load data from json to Category #2
    if (localStorage.getItem("cat2") === null) {
        document.querySelector("#img2 > image").setAttribute("x", jsonresponse["foto"]["cat2"].pos_x);
        document.querySelector("#img2 > image").setAttribute("y", jsonresponse["foto"]["cat2"].pos_y);
        document.querySelector("#img2 > image").setAttribute("width", jsonresponse["foto"]["cat2"].width);
        document.querySelector("#img2 > image").setAttribute("height", jsonresponse["foto"]["cat2"].height);
        document.querySelector("#img2 > image").setAttribute("xlink:href", jsonresponse["foto"]["cat2"].image);
    }
    else {
        var obj2 = JSON.parse(localStorage.getItem("cat2"));
        document.querySelector("#img2 > image").setAttribute("x", obj2.pos_x);
        document.querySelector("#img2 > image").setAttribute("y", obj2.pos_y);
        document.querySelector("#img2 > image").setAttribute("width", obj2.width);
        document.querySelector("#img2 > image").setAttribute("height", obj2.height);
        document.querySelector("#img2 > image").setAttribute("xlink:href", obj2.image);
    }
    

    // Load data from json to Category #3
    if (localStorage.getItem("cat3") === null) {
        document.querySelector("#img3 > image").setAttribute("x", jsonresponse["foto"]["cat3"].pos_x);
        document.querySelector("#img3 > image").setAttribute("y", jsonresponse["foto"]["cat3"].pos_y);
        document.querySelector("#img3 > image").setAttribute("width", jsonresponse["foto"]["cat3"].width);
        document.querySelector("#img3 > image").setAttribute("height", jsonresponse["foto"]["cat3"].height);
        document.querySelector("#img3 > image").setAttribute("xlink:href", jsonresponse["foto"]["cat3"].image);
    }
    else {
        var obj3 = JSON.parse(localStorage.getItem("cat3"));
        document.querySelector("#img3 > image").setAttribute("x", obj3.pos_x);
        document.querySelector("#img3 > image").setAttribute("y", obj3.pos_y);
        document.querySelector("#img3 > image").setAttribute("width", obj3.width);
        document.querySelector("#img3 > image").setAttribute("height", obj3.height);
        document.querySelector("#img3 > image").setAttribute("xlink:href", obj3.image);
    }

    // Load data from json to Category #4
    if (localStorage.getItem("cat4") === null) {
        document.querySelector("#img4 > image").setAttribute("x", jsonresponse["foto"]["cat4"].pos_x);
        document.querySelector("#img4 > image").setAttribute("y", jsonresponse["foto"]["cat4"].pos_y);
        document.querySelector("#img4 > image").setAttribute("width", jsonresponse["foto"]["cat4"].width);
        document.querySelector("#img4 > image").setAttribute("height", jsonresponse["foto"]["cat4"].height);
        document.querySelector("#img4 > image").setAttribute("xlink:href", jsonresponse["foto"]["cat4"].image);
    }
    else {
        var obj4 = JSON.parse(localStorage.getItem("cat4"));
        document.querySelector("#img4 > image").setAttribute("x", obj4.pos_x);
        document.querySelector("#img4 > image").setAttribute("y", obj4.pos_y);
        document.querySelector("#img4 > image").setAttribute("width", obj4.width);
        document.querySelector("#img4 > image").setAttribute("height", obj4.height);
        document.querySelector("#img4 > image").setAttribute("xlink:href", obj4.image);
    }

    // Load data from json to Category #5
    if (localStorage.getItem("cat5") === null) {
        document.querySelector("#img5 > image").setAttribute("x", jsonresponse["foto"]["cat5"].pos_x);
        document.querySelector("#img5 > image").setAttribute("y", jsonresponse["foto"]["cat5"].pos_y);
        document.querySelector("#img5 > image").setAttribute("width", jsonresponse["foto"]["cat5"].width);
        document.querySelector("#img5 > image").setAttribute("height", jsonresponse["foto"]["cat5"].height);
        document.querySelector("#img5 > image").setAttribute("xlink:href", jsonresponse["foto"]["cat5"].image);
    }
    else {
        var obj5 = JSON.parse(localStorage.getItem("cat5"));
        document.querySelector("#img5 > image").setAttribute("x", obj5.pos_x);
        document.querySelector("#img5 > image").setAttribute("y", obj5.pos_y);
        document.querySelector("#img5 > image").setAttribute("width", obj5.width);
        document.querySelector("#img5 > image").setAttribute("height", obj5.height);
        document.querySelector("#img5 > image").setAttribute("xlink:href", obj5.image);
    }

    // Load data from json to Category #6
    if (localStorage.getItem("cat6") === null) {
        document.querySelector("#img6 > image").setAttribute("x", jsonresponse["foto"]["cat6"].pos_x);
        document.querySelector("#img6 > image").setAttribute("y", jsonresponse["foto"]["cat6"].pos_y);
        document.querySelector("#img6 > image").setAttribute("width", jsonresponse["foto"]["cat6"].width);
        document.querySelector("#img6 > image").setAttribute("height", jsonresponse["foto"]["cat6"].height);
        document.querySelector("#img6 > image").setAttribute("xlink:href", jsonresponse["foto"]["cat6"].image);
    }
    else {
        var obj6 = JSON.parse(localStorage.getItem("cat6"));
        document.querySelector("#img6 > image").setAttribute("x", obj6.pos_x);
        document.querySelector("#img6 > image").setAttribute("y", obj6.pos_y);
        document.querySelector("#img6 > image").setAttribute("width", obj6.width);
        document.querySelector("#img6 > image").setAttribute("height", obj6.height);
        document.querySelector("#img6 > image").setAttribute("xlink:href", obj6.image);
    }

    // Load data from json to Category #7
    if (localStorage.getItem("cat7") === null) {
        document.querySelector("#img7 > image").setAttribute("x", jsonresponse["foto"]["cat7"].pos_x);
        document.querySelector("#img7 > image").setAttribute("y", jsonresponse["foto"]["cat7"].pos_y);
        document.querySelector("#img7 > image").setAttribute("width", jsonresponse["foto"]["cat7"].width);
        document.querySelector("#img7 > image").setAttribute("height", jsonresponse["foto"]["cat7"].height);
        document.querySelector("#img7 > image").setAttribute("xlink:href", jsonresponse["foto"]["cat7"].image);
    }
    else {
        var obj7 = JSON.parse(localStorage.getItem("cat7"));
        document.querySelector("#img7 > image").setAttribute("x", obj7.pos_x);
        document.querySelector("#img7 > image").setAttribute("y", obj7.pos_y);
        document.querySelector("#img7 > image").setAttribute("width", obj7.width);
        document.querySelector("#img7 > image").setAttribute("height", obj7.height);
        document.querySelector("#img7 > image").setAttribute("xlink:href", obj7.image);
    }

    // Load data from json to Category #8
    if (localStorage.getItem("cat8") === null) {
        document.querySelector("#img8 > image").setAttribute("x", jsonresponse["foto"]["cat8"].pos_x);
        document.querySelector("#img8 > image").setAttribute("y", jsonresponse["foto"]["cat8"].pos_y);
        document.querySelector("#img8 > image").setAttribute("width", jsonresponse["foto"]["cat8"].width);
        document.querySelector("#img8 > image").setAttribute("height", jsonresponse["foto"]["cat8"].height);
        document.querySelector("#img8 > image").setAttribute("xlink:href", jsonresponse["foto"]["cat8"].image);
    }
    else {
        var obj8 = JSON.parse(localStorage.getItem("cat8"));
        document.querySelector("#img8 > image").setAttribute("x", obj8.pos_x);
        document.querySelector("#img8 > image").setAttribute("y", obj8.pos_y);
        document.querySelector("#img8 > image").setAttribute("width", obj8.width);
        document.querySelector("#img8 > image").setAttribute("height", obj8.height);
        document.querySelector("#img8 > image").setAttribute("xlink:href", obj8.image);
    }

    // Load data from json to Center Circle
    document.querySelector("#face > image").setAttribute("x", jsonresponse["foto"]["face"].pos_x);
    document.querySelector("#face > image").setAttribute("y", jsonresponse["foto"]["face"].pos_y);
    document.querySelector("#face > image").setAttribute("width", jsonresponse["foto"]["face"].width);
    document.querySelector("#face > image").setAttribute("height", jsonresponse["foto"]["face"].height);
    document.querySelector("#face > image").setAttribute("xlink:href", jsonresponse["foto"]["face"].image);


});


$(function(){

    $('.show-btn').on('click', function () {
        $('div.card-reveal[data-rel=' + $(this).data('rel') + ']').slideToggle('slow');
    });

    $('.card-reveal .close').on('click', function() {
        $('div.card-reveal[data-rel=' + $(this).data('rel') + ']').slideToggle('slow');
    });

});

$(":file").filestyle({input: false});
$(":file").filestyle('buttonText', 'Добавить свое фото');

function leftClick(num) {
    console.log("left click!");
    var lx = document.querySelector("#img" + num + " > image").getAttribute("x");
    document.querySelector("#img" + num + " > image").setAttribute("x", Number(lx)-2);
}

function rightClick(num) {
    console.log("right click!");
    var rx = document.querySelector("#img" + num + " > image").getAttribute("x");
    document.querySelector("#img" + num + " > image").setAttribute("x", Number(rx)+2);
}

function upClick(num) {
    console.log("up click!");
    var uy = document.querySelector("#img" + num + " > image").getAttribute("y");
    document.querySelector("#img" + num + " > image").setAttribute("y", Number(uy)-2);
}

function downClick(num) {
    console.log("down click!");
    var dy = document.querySelector("#img" + num + " > image").getAttribute("y");
    document.querySelector("#img" + num + " > image").setAttribute("y", Number(dy)+2);
}


function setDataToLocalStorage() {
    var cx1 = document.querySelector("#img1 > image").getAttribute("x");
    var cy1 = document.querySelector("#img1 > image").getAttribute("y");
    var width1 = document.querySelector("#img1 > image").getAttribute("width");
    var height1 = document.querySelector("#img1 > image").getAttribute("height");
    var href1 = document.querySelector("#img1 > image").getAttribute("xlink:href");

    var cx2 = document.querySelector("#img2 > image").getAttribute("x");
    var cy2 = document.querySelector("#img2 > image").getAttribute("y");
    var width2 = document.querySelector("#img2 > image").getAttribute("width");
    var height2 = document.querySelector("#img2 > image").getAttribute("height");
    var href2 = document.querySelector("#img2 > image").getAttribute("xlink:href");

    var cx3 = document.querySelector("#img3 > image").getAttribute("x");
    var cy3 = document.querySelector("#img3 > image").getAttribute("y");
    var width3 = document.querySelector("#img3 > image").getAttribute("width");
    var height3 = document.querySelector("#img3 > image").getAttribute("height");
    var href3 = document.querySelector("#img3 > image").getAttribute("xlink:href");

    var cx4 = document.querySelector("#img4 > image").getAttribute("x");
    var cy4 = document.querySelector("#img4 > image").getAttribute("y");
    var width4 = document.querySelector("#img4 > image").getAttribute("width");
    var height4 = document.querySelector("#img4 > image").getAttribute("height");
    var href4 = document.querySelector("#img4 > image").getAttribute("xlink:href");

    var cx5 = document.querySelector("#img5 > image").getAttribute("x");
    var cy5 = document.querySelector("#img5 > image").getAttribute("y");
    var width5 = document.querySelector("#img5 > image").getAttribute("width");
    var height5 = document.querySelector("#img5 > image").getAttribute("height");
    var href5 = document.querySelector("#img5 > image").getAttribute("xlink:href");

    var cx6 = document.querySelector("#img6 > image").getAttribute("x");
    var cy6 = document.querySelector("#img6 > image").getAttribute("y");
    var width6 = document.querySelector("#img6 > image").getAttribute("width");
    var height6 = document.querySelector("#img6 > image").getAttribute("height");
    var href6 = document.querySelector("#img6 > image").getAttribute("xlink:href");

    var cx7 = document.querySelector("#img7 > image").getAttribute("x");
    var cy7 = document.querySelector("#img7 > image").getAttribute("y");
    var width7 = document.querySelector("#img7 > image").getAttribute("width");
    var height7 = document.querySelector("#img7 > image").getAttribute("height");
    var href7 = document.querySelector("#img7 > image").getAttribute("xlink:href");

    var cx8 = document.querySelector("#img8 > image").getAttribute("x");
    var cy8 = document.querySelector("#img8 > image").getAttribute("y");
    var width8 = document.querySelector("#img8 > image").getAttribute("width");
    var height8 = document.querySelector("#img8 > image").getAttribute("height");
    var href8 = document.querySelector("#img8 > image").getAttribute("xlink:href");
    
    var cat1 = {
        image: href1,
        pos_x : cx1,
        pos_y : cy1,
        width : width1,
        height : height1
    };

    var cat2 = {
        image: href2,
        pos_x : cx2,
        pos_y : cy2,
        width : width2,
        height : height2
    };

    var cat3 = {
        image: href3,
        pos_x : cx3,
        pos_y : cy3,
        width : width3,
        height : height3
    };

    var cat4 = {
        image: href4,
        pos_x : cx4,
        pos_y : cy4,
        width : width4,
        height : height4
    };

    var cat5 = {
        image: href5,
        pos_x : cx5,
        pos_y : cy5,
        width : width5,
        height : height5
    };

    var cat6 = {
        image: href6,
        pos_x : cx6,
        pos_y : cy6,
        width : width6,
        height : height6
    };

    var cat7 = {
        image: href7,
        pos_x : cx7,
        pos_y : cy7,
        width : width7,
        height : height7
    };

    var cat8 = {
        image: href8,
        pos_x : cx8,
        pos_y : cy8,
        width : width8,
        height : height8
    };
     
    var serialCat1 = JSON.stringify(cat1);
    var serialCat2 = JSON.stringify(cat2);
    var serialCat3 = JSON.stringify(cat3);
    var serialCat4 = JSON.stringify(cat4);
    var serialCat5 = JSON.stringify(cat5);
    var serialCat6 = JSON.stringify(cat6);
    var serialCat7 = JSON.stringify(cat7);
    var serialCat8 = JSON.stringify(cat8);
     
    localStorage.setItem("cat1", serialCat1);
    localStorage.setItem("cat2", serialCat2);
    localStorage.setItem("cat3", serialCat3);
    localStorage.setItem("cat4", serialCat4);
    localStorage.setItem("cat5", serialCat5);
    localStorage.setItem("cat6", serialCat6);
    localStorage.setItem("cat7", serialCat7);
    localStorage.setItem("cat8", serialCat8);
}