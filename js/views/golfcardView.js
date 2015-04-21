var app = app || {};

app.golfCardView = Backbone.View.extend({

    model: new app.golfcardModel,
    tagname: "tr",

    initialize: function(){
        this.template = _.template($('.frontNine-template').html());
    },
    events: function(){

    },

    render: function() {
        this.$el.html(this.template(
            this.model.toJSON()));
        }
    });
