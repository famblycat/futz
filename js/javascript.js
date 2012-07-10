var stooges = [{name : 'moe', age : 40}, {name : 'larry', age : 50}, {name : 'curly', age : 55}];

var groups = _.groupBy(stooges, function(item) {
  if(item.age < 50) {
    return '40s';
  } else if(item.age < 60) {
    return '50s';
  } else if(item.age < 70) {
    return '60s';
  }
});

console.log(groups);
