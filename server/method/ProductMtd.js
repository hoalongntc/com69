/*Meteor.methods({
	'productForToday': function() {
		var prdIds = Menu.find({MNU_DT: moment().format('YYYY-MM-DD')}).fetch().map(function(m) {
			return m.PRD_ID;
		});

		return Product.find({PRD_ID: {$in: prdIds}});
	}
});*/