Meteor.publish("PRD_CAT", function () {
    return ProductCategory.find({});
});