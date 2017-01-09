import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByCity(param) {
      if (param !== '') {
        return this.store.query('rental', { city: param });
      } else {
        return this.store.findAll('rental');
      }
    }
  }
});
