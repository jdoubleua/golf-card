var app = app || {};

$(document).ready(function () {

    /*
        Instantiate new golfCardModel
     */
    app.golfer = new app.golfcardModel({});
    /*
        Listen for changes in textbox and get value
     */
    $('#userName').on('change', function(){
        var uN = $("#userName").val();
        app.golfer.set({
            name: uN
        });
    });
    /*
        Recognize change to golfcardModel
     */
    app.golfer.on("change:name", function(model, name){
        console.log("Changed model name from " + app.golfer.previous("name") + " to " + name);
    });
    /*
        Submit username
     */
    $('#submitUserName').on('click', function(){
        alert("Your name is " + (app.golfer).get('name'));
    });
});
