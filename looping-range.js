function range (start, end, step) {
 if (start < end && step > 0) {
  let output = [];
  for (let i = start; i <= end; i += step) {
    output.push(i);
  }
  return output;

 }  else if ((start === undefined) || (end === undefined) || (end === undefined)) {
    const noWorky = [];
   return noWorky;

  } else if (step <= 0 || start > end) {
  const noWorky = [];
  return noWorky;
  }}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));













