import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-filter'],
  value: "",

  init() {
    this._super(...arguments);
    this.get('filter')('').then((results) => this.set('results', results));
  },
  actions: {
    handleFilterEntry() {
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');
      filterAction(filterInputValue).then((filterResults) => this.set('results', filterResults))
    },
    FilterEntryClick() {
      // let filterInputValue = this.get('value');
      // let filterAction = this.get('filter');
      // filterAction(filterInputValue).then((filterResults) => console.log(filterResults))
      console.log("filterEntryClick function",this.get('value'));
      this.sendAction("filterResults2",this.get('value'));
    }
  }
});
