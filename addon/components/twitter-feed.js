import Ember from 'ember';
import layout from '../templates/components/twitter-feed';

export default Ember.Component.extend({
  layout: layout,

  classNames: ['twitter_feed'],

  didInsertElement: function() {
    let elementId = this.get('elementId');
    Ember.assert('The first children must be a.twitter-timeline',
                 Ember.$(elementId + ' > a.twitter-timeline'));

    // TODO: instead of twitterWJS.remove() do twitterWJS.reEvaluate() ???

    /* jshint ignore:start */
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
    /* jshint ignore:end */
  },

  willClearRender: function() {
    let id = 'twitter-wjs';
    let twitterWJS = document.getElementById(id);
    twitterWJS.remove();
  } 

});
