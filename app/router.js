import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('dashboard', function(){
    this.route('profile');
    this.route('stories');
    this.route('contributions');
    this.route('pending');
    this.route('starred');
  });
  this.route('stories', function(){
    this.route('new');
    this.route('edit');
    this.route('story', {path: 'stories/:story_id'}, function(){
      this.route('contributions', function(){
        this.route('new');
        this.route('edit');
      });
    });  
  });
});

export default Router;
