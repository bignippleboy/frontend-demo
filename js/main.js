requirejs.config({
	//别名
	paths: {
		backbone: 'libs/backbone',
		underscore: 'libs/underscore',
		jquery: 'libs/jquery',
		template: '../template'
	}
});

require(['app'],function(App){
	App.init();
})