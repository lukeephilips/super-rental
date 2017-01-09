import Ember from 'ember';

export function rentalPropertyTypeUppercase([params]/*, hash*/) {
  return params.toUpperCase();
}

export default Ember.Helper.helper(rentalPropertyTypeUppercase);
