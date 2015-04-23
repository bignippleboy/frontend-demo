define(['jquery','underscore','backbone','text!template/pageb-template.html'], function($,_,BackBone,template_b) {
    return BackBone.View.extend({

    	el: $("#page-b"),

        render: function() {
            this.$el.html(template_b);
        }
    });
})
