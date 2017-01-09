import Ember from 'ember';

export default Ember.Component.extend({

  isImageShowing: false,
  actions: {
    toggleImage: function() {
      this.toggleProperty('isImageShowing')
    },
    delete(rental){
      if (confirm('Are you sure you want to delete this rental?')){
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
