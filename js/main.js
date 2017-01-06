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
    document.querySelector("#img1 > image").setAttribute("x", jsonresponse["foto"]["cat1"].pos_x);
    document.querySelector("#img1 > image").setAttribute("y", jsonresponse["foto"]["cat1"].pos_y);
    document.querySelector("#img1 > image").setAttribute("width", jsonresponse["foto"]["cat1"].width);
    document.querySelector("#img1 > image").setAttribute("height", jsonresponse["foto"]["cat1"].height);
    document.querySelector("#img1 > image").setAttribute("xlink:href", jsonresponse["foto"]["cat1"].image);

    // Load data from json to Category #2
    document.querySelector("#img2 > image").setAttribute("x", jsonresponse["foto"]["cat2"].pos_x);
    document.querySelector("#img2 > image").setAttribute("y", jsonresponse["foto"]["cat2"].pos_y);
    document.querySelector("#img2 > image").setAttribute("width", jsonresponse["foto"]["cat2"].width);
    document.querySelector("#img2 > image").setAttribute("height", jsonresponse["foto"]["cat2"].height);
    document.querySelector("#img2 > image").setAttribute("xlink:href", jsonresponse["foto"]["cat2"].image);

    // Load data from json to Category #3
    document.querySelector("#img3 > image").setAttribute("x", jsonresponse["foto"]["cat3"].pos_x);
    document.querySelector("#img3 > image").setAttribute("y", jsonresponse["foto"]["cat3"].pos_y);
    document.querySelector("#img3 > image").setAttribute("width", jsonresponse["foto"]["cat3"].width);
    document.querySelector("#img3 > image").setAttribute("height", jsonresponse["foto"]["cat3"].height);
    document.querySelector("#img3 > image").setAttribute("xlink:href", jsonresponse["foto"]["cat3"].image);

    // Load data from json to Category #4
    document.querySelector("#img4 > image").setAttribute("x", jsonresponse["foto"]["cat4"].pos_x);
    document.querySelector("#img4 > image").setAttribute("y", jsonresponse["foto"]["cat4"].pos_y);
    document.querySelector("#img4 > image").setAttribute("width", jsonresponse["foto"]["cat4"].width);
    document.querySelector("#img4 > image").setAttribute("height", jsonresponse["foto"]["cat4"].height);
    document.querySelector("#img4 > image").setAttribute("xlink:href", jsonresponse["foto"]["cat4"].image);

    // Load data from json to Category #5
    document.querySelector("#img5 > image").setAttribute("x", jsonresponse["foto"]["cat5"].pos_x);
    document.querySelector("#img5 > image").setAttribute("y", jsonresponse["foto"]["cat5"].pos_y);
    document.querySelector("#img5 > image").setAttribute("width", jsonresponse["foto"]["cat5"].width);
    document.querySelector("#img5 > image").setAttribute("height", jsonresponse["foto"]["cat5"].height);
    document.querySelector("#img5 > image").setAttribute("xlink:href", jsonresponse["foto"]["cat5"].image);

    // Load data from json to Category #6
    document.querySelector("#img6 > image").setAttribute("x", jsonresponse["foto"]["cat6"].pos_x);
    document.querySelector("#img6 > image").setAttribute("y", jsonresponse["foto"]["cat6"].pos_y);
    document.querySelector("#img6 > image").setAttribute("width", jsonresponse["foto"]["cat6"].width);
    document.querySelector("#img6 > image").setAttribute("height", jsonresponse["foto"]["cat6"].height);
    document.querySelector("#img6 > image").setAttribute("xlink:href", jsonresponse["foto"]["cat6"].image);

    // Load data from json to Category #7
    document.querySelector("#img7 > image").setAttribute("x", jsonresponse["foto"]["cat7"].pos_x);
    document.querySelector("#img7 > image").setAttribute("y", jsonresponse["foto"]["cat7"].pos_y);
    document.querySelector("#img7 > image").setAttribute("width", jsonresponse["foto"]["cat7"].width);
    document.querySelector("#img7 > image").setAttribute("height", jsonresponse["foto"]["cat7"].height);
    document.querySelector("#img7 > image").setAttribute("xlink:href", jsonresponse["foto"]["cat7"].image);

    // Load data from json to Category #8
    document.querySelector("#img8 > image").setAttribute("x", jsonresponse["foto"]["cat8"].pos_x);
    document.querySelector("#img8 > image").setAttribute("y", jsonresponse["foto"]["cat8"].pos_y);
    document.querySelector("#img8 > image").setAttribute("width", jsonresponse["foto"]["cat8"].width);
    document.querySelector("#img8 > image").setAttribute("height", jsonresponse["foto"]["cat8"].height);
    document.querySelector("#img8 > image").setAttribute("xlink:href", jsonresponse["foto"]["cat8"].image);

    // Load data from json to Center Circle
    document.querySelector("#face > image").setAttribute("x", jsonresponse["foto"]["face"].pos_x);
    document.querySelector("#face > image").setAttribute("y", jsonresponse["foto"]["face"].pos_y);
    document.querySelector("#face > image").setAttribute("width", jsonresponse["foto"]["face"].width);
    document.querySelector("#face > image").setAttribute("height", jsonresponse["foto"]["face"].height);
    document.querySelector("#face > image").setAttribute("xlink:href", jsonresponse["foto"]["face"].image);


});


$('body').on('click', '.btn.active', function(e){
    e.stopImmediatePropagation();
    e.preventDefault();
    //console.log(this, $('input:radio[name="options"]', this));
    $(this).removeClass('active');
    $('input:radio[name="cat"]', this).prop('checked', false);
});

