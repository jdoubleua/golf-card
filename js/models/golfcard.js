var app = app || {};


app.golfcardModel = Backbone.Model.extend({

    defaults: {
        name: "Player"

    },

    initialize: function(){
        console.log("New golfcardModel created" + " " + this.get('name'));
    }

});