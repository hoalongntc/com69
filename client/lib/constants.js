// Define App Constants

if (Meteor.App) {
  throw new Meteor.Error('Meteor.App already defined? see client/lib/constants.js');
}

Meteor.App = {
  NAME: 'Com69',
  DESCRIPTION: 'Đặt cơm online - Cơm 69'
};
