import Ember from 'ember';

export default Ember.Route.extend({
  classNameBindings:['isAlert:alert-danger','isWarning:alert-warning', 'isSuccess:alert-success'],
  isAlert: false,
  isWarning: true,
  isSuccess: false,
  model(){
    return this.store.findAll("announcement")
  },
  actions: {
    saveAnnouncement(params) {
      var newAnnouncement = this.store.createRecord('announcement', params);
      newAnnouncement.save();
      this.transitionTo('announcement');
    },
    delete(announcement) {
      if (confirm('Are you sure you want to delete this announcement?')) {
        announcement.destroyRecord();
        this.transitionTo('announcement');
      }
    }
  }
});
