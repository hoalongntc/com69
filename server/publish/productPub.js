Meteor.publish("PRD", function () {
    return Product.find({});
});