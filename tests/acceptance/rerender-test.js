import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | rerender', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    expectComponent('twitter-feed');
    expectElement('.twitter_feed > a');
  });
});

test('visiting /no-feed first', function(assert) {
  visit('/no-feed').then(function() {
    visit('/');
  });

  andThen(function() {
    assert.equal(currentURL(), '/');
    expectComponent('twitter-feed');
    expectElement('.twitter_feed > a');
  });
});

test('visiting /no-feed second', function(assert) {
  visit('/').then(function() {
    return visit('/no-feed');
  }).then(function() {
    visit('/');
  });

  andThen(function() {
    assert.equal(currentURL(), '/');
    expectComponent('twitter-feed');
    expectElement('.twitter_feed > a');
    /*
      It would be ideal to have:
      expectElement('.twitter_feed > iframe');

      The actual test happens in the component when it asserts _insertedNode
    */
  });
});
