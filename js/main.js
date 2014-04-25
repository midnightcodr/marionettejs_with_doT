// the only thing that you need to do in order to replace the stock underscore templating with
// doT

Marionette.TemplateCache.prototype.compileTemplate= function(rawTemplate){
	return doT.template(rawTemplate);
}

var MJ=Backbone.Marionette, MainApp=new MJ.Application();

MainApp.addRegions({
	mainRegion: '#main-region',
	sideRegion: '#side-region',
	
});

MainApp.Person=Backbone.Model.extend({});
MainApp.PersonView=MJ.ItemView.extend({
	template: '#selector-demo-tmpl'
});

MainApp.Info=Backbone.Model.extend({});
MainApp.InfoView=MJ.ItemView.extend({
	template: doT.template('I have something very important to say: {{! it.msg }}.')
});


MainApp.addInitializer( function() {
	var person=new MainApp.Person({
		name: 'Midnightcodr',
		what: 'how to use doT in Marionette.js'
	}), person_view=new MainApp.PersonView({ model: person });
	MainApp.mainRegion.show(person_view);

	var info=new MainApp.Info({
		msg: 'Marionette.js is great'
	}), info_view=new MainApp.InfoView({ model: info });
	MainApp.sideRegion.show(info_view);
});
MainApp.start();
