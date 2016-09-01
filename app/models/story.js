import DS from 'ember-data'

export default DS.Model.extend({
  title: DS.attr(),
  startDate: DS.attr(),
  summary: DS.attr(),
  editLock: DS.attr(),
  genreId: DS.attr(),
  checkoutTime: DS.attr(),
  stateId: DS.attr(),
  // user: DS.belongsTo('user'),
  // contributions: DS.hasMany('contribution', {async: true}),
})
