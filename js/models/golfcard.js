var app = app || {};


app.golfcardModel = Backbone.Model.extend({

    defaults: {
        name: "Player",
        hole1: 0,
        hole2: 0,
        hole3: 0,
        hole4: 0,
        hole5: 0,
        hole6: 0,
        hole7: 0,
        hole8: 0,
        hole9: 0,
        total: 0
    },

    initialize: function(){
        console.log("New golfcardModel created" + " " + this.get('name') + "" + this.get('hole'));
    }

});