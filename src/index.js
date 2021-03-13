exports.min = function min (array) {
  let min;
  for(var i = 0; i < array.length; i++){
  if(min>array[i]) min=array[i];
  return min;
  }
  }
  
  exports.max = function max (array) {
  let max;
  for(var i = 0; i < array.length; i++){
  if(max<array[i]) max=array[i];
  return max;
  }
  }
  
  exports.avg = function avg (array) {
  var sum = 0;
  for(var i = 0; i < array.length; i++){
  sum += array[i];
  }
  let n=array.length;
  let avg=sum/n;
  return avg;
  }