import Ember from 'ember';

export default Ember.Component.extend({
  // classNameBindings:['isAlert:alert-danger','isWarning:alert-warning', 'isSuccess:alert-success'],
  // isAlert: false,
  // isWarning: true,
  // isSuccess: false,
  type: null,
  types: Ember.String.w('Warning Alert Success'),
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },
    selectType(type) {
      this.set('type', type);
    },
    saveAnnouncement() {
    var params = {
      title: this.get('title') ? this.get('title'): "",
      text: this.get('text') ? this.get('text'): "",
      type: this.get('type') ? this.get('type'): "info"
    };
    console.log(params);
    this.set('addNewAnnouncement', false);
    this.sendAction('saveAnnouncement',params);
    }
  }
});
