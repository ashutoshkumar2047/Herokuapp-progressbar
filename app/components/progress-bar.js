import Ember from 'ember';

export default Ember.Component.extend({
  store:Ember.inject.service('store'),
  init(){
    this._super(arguments);
    let config = this.get('model'), bars=Ember.A(), barIdentifiers= Ember.A();
    config.bars.forEach((bar, index)=>{
      var limitExceeds = bar > config.limit ? true : false;
      bars.pushObject(this.get('store').createRecord('bar', {uniqueId: index+1, value:bar, limit:config.limit, isExceedLimit:limitExceeds}));
      barIdentifiers.pushObject(Ember.Object.create({text:'Progress Bar: #'+(index+1), value:index+1}));
    });

    this.setProperties({
      bars:bars,
      barIdentifiers: barIdentifiers,
      selectedBarIndex:barIdentifiers[0].get('value')
    });


  },
  actions:{
    updateProgressBar(change){
      let num = Number.parseInt(change),
          bar = this.get('bars').findBy('uniqueId', Number.parseInt(this.get('selectedBarIndex'))),
          value = bar.get('value') + num;
      bar.set('value', value>=0?value:0);
    }
  }
});
