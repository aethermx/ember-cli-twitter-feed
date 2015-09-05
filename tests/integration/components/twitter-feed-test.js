import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('twitter-feed', 'Integration | Component | twitter feed', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{#twitter-feed}}<a>#emberjs Tweets</a>{{/twitter-feed}}`);
  assert.equal(this.$().text().trim(), '#emberjs Tweets');
});
