var app = app || {};

$(document).ready(function () {

    $('.hole-1').on('change', function(){
        var uN = $(".hole-1").val();
        app.golfer.set({
            hole1: uN
        });
    });
    app.golfer.on("change:hole1", function(model, hole1){

        $('.thole-1').text(hole1).val();

    });
    /*

     */
    $('.hole-2').on('change', function(){
        var uN = $(".hole-2").val();
        app.golfer.set({
            hole2: uN
        });
    });
    app.golfer.on("change:hole2", function(model, hole){

        $('.thole-2').text(hole).val();

    });
    /*

     */
    $('.hole-3').on('change', function(){
        var uN = $(".hole-3").val();
        app.golfer.set({
            hole3: uN
        });
    });
    app.golfer.on("change:hole3", function(model, hole){

        $('.thole-3').text(hole).val();

    });
    /*

     */
    $('.hole-4').on('change', function(){
        var uN = $(".hole-4").val();
        app.golfer.set({
            hole4: uN
        });
    });
    app.golfer.on("change:hole4", function(model,hole){

        $('.thole-4').text(hole).val();

    });
    /*

     */
    $('.hole-5').on('change', function(){
        var uN = $(".hole-5").val();
        app.golfer.set({
            hole5: uN
        });
    });
    app.golfer.on("change:hole5", function(model,hole){

        $('.thole-5').text(hole).val();

    });
    /*

     */
    $('.hole-6').on('change', function(){
        var uN = $(".hole-6").val();
        app.golfer.set({
            hole6: uN
        });
    });
    app.golfer.on("change:hole6", function(model,hole){

        $('.thole-6').text(hole).val();

    });
    /*

     */
    $('.hole-7').on('change', function(){
        var uN = $(".hole-7").val();
        app.golfer.set({
            hole7: uN
        });
    });
    app.golfer.on("change:hole7", function(model,hole){

        $('.thole-7').text(hole).val();

    });
    /*

     */
    $('.hole-8').on('change', function(){
        var uN = $(".hole-8").val();
        app.golfer.set({
            hole8: uN
        });
    });
    app.golfer.on("change:hole8", function(model, hole){

        $('.thole-8').text(hole).val();

    });
    /*

     */
    $('.hole-9').on('change', function(){
        var uN = $(".hole-9").val();
        app.golfer.set({
            hole9: uN
        });
    });
    app.golfer.on("change:hole9", function(model, hole){

        $('.thole-9').text(hole).val();

    });
    /*

     */
    $(".total").click( function(model, total){



    });

    $('#submitUserName').on('click', function(model, total){
        var a = $('.thole-1').text(total).val() + $('.thole-2').text(total).val() +
            $('.thole-3').text(total).val() + $('.thole-4').text(total).val() +
            $('.thole-5').text(total).val() + $('.thole-6').text(total).val() +
            $('.thole-7').text(total).val() + $('.thole-8').text(total).val() +
            $('.thole-9').text(total).val();

        $(".totalNumber").text(a).val();
    });

});