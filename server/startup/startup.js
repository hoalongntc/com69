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
});