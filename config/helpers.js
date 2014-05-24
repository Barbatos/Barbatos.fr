var moment = require('moment');
var ejs = require('ejs');

ejs.filters.formatDate = function(date){
  return moment(date).format('MMM D, YYYY');
}

