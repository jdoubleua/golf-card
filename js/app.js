var app = app || {};

$(document).ready(function () {
    alert("Your name is " + (new app.golfcardModel).get('name'));
});
