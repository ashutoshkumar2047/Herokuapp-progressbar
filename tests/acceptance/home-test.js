import { test } from 'qunit';
import moduleForAcceptance from 'herokuapp-progressbar/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home');

test('should redirect to home page', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/home');
  });
});

test('should have heading', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.heading').length, 1, "should have a heading");
  });
});
