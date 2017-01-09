import Ember from 'ember';

export function announcementType(params/*, hash*/) {
  if (params.type === "info"){
    return console.log("info");
  }
  return console.log("alert");
  }

export default Ember.Helper.helper(announcementType);
