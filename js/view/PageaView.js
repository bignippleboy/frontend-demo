define(['jquery','underscore','backbone','text!template/pagea-template.html'], function($,_,BackBone,template_a) {
    return BackBone.View.extend({

    	el: $("#page-a"),

        render: function() {
            this.$el.html(template_a);
        }
    });
})
