
const merge = function (array1, array2) {
  let combineArrays = [];
  combineArrays = combineArrays.concat(array1, array2);
  combineArrays.sort(function(a,b){return a-b});
  return combineArrays;
};


console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
console.log(merge([ 1, 2, 6 ], []));
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
