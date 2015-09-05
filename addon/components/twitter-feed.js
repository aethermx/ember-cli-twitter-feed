import Ember from 'ember';
import layout from '../templates/components/twitter-feed';

export default Ember.Component.extend({
  layout: layout,

  classNames: ['twitter_feed'],

  didInsertElement: function() {
    /* jshint ignore:start */
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
    /* jshint ignore:end */
  }

});
