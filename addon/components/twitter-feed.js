import Ember from 'ember';
import layout from '../templates/components/twitter-feed';

export default Ember.Component.extend({
  layout: layout,

  classNames: ['twitter_feed'],

  _insertedNode: null,

  didInsertElement: function() {
    let elementId = this.get('elementId');
    Ember.assert('The first children must be a.twitter-timeline',
                 Ember.$(elementId + ' > a.twitter-timeline'));

    // TODO: instead of _insertedNode.remove() do _inserted.reEvaluateish() ????

    let insertedNode = null;
    /* Widget JS provided by Twitter start */
    /*jshint ignore:start*/
    !function(d,s,id) {
      var js,
          fjs=d.getElementsByTagName(s)[0],
          p=/^http:/.test(d.location) ? 'http':'https';
      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p+"://platform.twitter.com/widgets.js";
        insertedNode = fjs.parentNode.insertBefore(js,fjs); // custom
      } else {
        Ember.Logger.error('A twitter-wjs node is already present.'); // custom
      }
    }(document,"script","twitter-wjs");
    /*jshint ignore:end*/
    /* Widget JS provided by Twitter end */

    Ember.assert('A twitter-wsj node was inserted.', insertedNode);

    this._insertedNode = insertedNode;
  },

  willClearRender: function() {
    Ember.$(this._insertedNode).remove();
  } 

});
