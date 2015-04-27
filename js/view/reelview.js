define(['jquery', 'underscore', 'view/kenview', 'text!template/reel-template.html','jqReel'], function($, _, Kenview, ReelTemplate, jqReel) {
    return Kenview.extend({

        el: $("#reel_page"),

        show: function() {
            console.log('pagea show');
            this.$el.show();
            Kenview.prototype.show.call(this);
        },

        hide: function() {
            console.log('pagea hide');
            this.$el.hide();
            Kenview.prototype.hide.call(this);
        },

        render: function() {
            console.log('page a render');
            this.$el.html(this.$el.html() + ReelTemplate);
            $('#image').reel({
                image: 'img/animal-locomotion.jpg',
                frames: 19,
                frame: 8,
                footage: 5,
                speed: 0.4
            });
            Kenview.prototype.render.call(this);
        }
    });
})
