import Ember from 'ember';

//let progressBarsConfig = {"buttons":[23,29,-26,-43],"bars":[18,22,86,34],"limit":100};

export default Ember.Route.extend({
  model(){
    //return progressBarsConfig;
    return Ember.$.getJSON('http://pb-api.herokuapp.com/bars');
  }
});
