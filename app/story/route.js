import Ember from 'ember'

export default Ember.Route.extend({
  beforeModel(transition){
    console.log('transition', transition)
  },
  model(params) {
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      story: this.store.findRecord('story', params.id),
      // contributions: this.store.findAll('contribution')
    })
  },
})
