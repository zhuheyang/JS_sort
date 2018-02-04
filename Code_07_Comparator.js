function comparator(a, b) {
  return a - b;
}
function comparator2(a, b) {
  if(a < b) {
    return -1;
  } 
  if(a > b) {
    return 1;
  }
  return 0;
}
var arr = [1, 3, 4, 6, 2];
Array.prototype.sort.call(arr, comparator);
[].sort(arr, comparator);  // [] means Array.prototype in JS
arr.sort(comparator);
arr.sort((a, b) => a - b);
arr.sort(function(a, b) { return a - b;});
console.log(arr);