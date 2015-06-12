Meteor.startup(function () {
    var i;
    if (ProductCategory.find().count() === 0) {
        var prdCats = EJSON.parse(Assets.getText('initdata/PRD_CAT.json'));
        for (i = 0; i < prdCats.length; i++)
            ProductCategory.insert(prdCats[i]);
    }

    if (Product.find().count() === 0) {
        var prds = EJSON.parse(Assets.getText('initdata/PRD.json'));
        for (i = 0; i < prds.length; i++)
            Product.insert(prds[i]);
    }

	if (Menu.find().count() === 0) {
		try {
			Menu.insert({
		    	PRD_ID: 'PRD0001',
		    	MNU_DT: moment().format('YYYY-MM-DD')
		    });
		} catch(e) {
			console.log(e);
		}
	}

    var users = EJSON.parse(Assets.getText('initdata/USR.json'));
    for (i = 0; i < users.length; i++)
    	if(!(typeof Meteor.users.findOne({username: users[i].username}) === 'object')) {
    		var roles = users[i].roles;
    		delete users[i].roles;
    		var user = Accounts.createUser(users[i]);
    		Roles.addUsersToRoles(user, roles);
    	}
});