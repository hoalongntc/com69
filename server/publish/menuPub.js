Meteor.publish("menuForToday", function() {
	return Menu.find({MNU_DT: moment().format('YYYY-MM-DD')});
});

Meteor.publish("menuForTodayWithProduct", function() {
	Menu.find({MNU_DT: moment().format('YYYY-MM-DD')}).fetch().map(function(m) {
		m.PRD = Product.findOne({PRD_ID: m.PRD_ID});
	});
});