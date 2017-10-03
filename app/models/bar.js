import Model from 'ember-data/model';
import DS from 'ember-data';
import Ember from 'ember';

export default Model.extend({
  uniqueId: DS.attr(),
  value:DS.attr(),
  limit:DS.attr(),
  text:Ember.computed('uniqueId', function(){
    return 'Progress Bar: #'+this.get('uniqueId');
  })
});
