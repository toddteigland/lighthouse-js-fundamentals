

// Tried first pushing into array, then looping through that. 2nd try was more efficient
/*
const loopyLighthouse = function(range, multiples, words) {
  let logNums = [];
  for (let i = range[0]; i <= range[1]; i++) {
    logNums.push(i);
  }
  console.log(logNums.pop());
 console.log(words[1],words[0]);

  for (let j = logNums[0]; j < logNums.pop(); i++) {
    if (j % 2 === 0 && j % 5 === 0) {
      j = words[0];
      logNums.push(j);
    }
  }
};
*/


const loopyLighthouse = function(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {

    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log(`${words[0]}${words[1]}`);
    } else if (i % multiples[0] === 0) {
      console.log(words[0]);
    } else if (i % multiples[1] === 0) {
      console.log(words[1])
    } else {
      console.log(i);
    }
  }
}


loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);


//if number is multiple of 2 && 5
//if number is multiple of 2
//if number is multiple of 5