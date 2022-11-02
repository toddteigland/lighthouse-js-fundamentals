
let bins = {
  waste: 0,
  recycling: 0,
  compost: 0,
}


function smartGarbage (trash, bins) {
  bins[trash]++;
  return bins;

}


console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
console.log(bins);

