let isOdd = function(num) {
  if(num % 2 === 0) {
    return true;
  }else {
    return false;
  }
}

console.log("3 is odd: " + isOdd(3));
console.log("3 is odd: " + isOdd(8));



const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

chooseStations(stations);


function chooseStations (station) {
  const goodStations = [];
  for (const station of stations) {
    const capacity = station[1];
    if (capacity >= 20) {
      const type = station[2];
      if (type === "school" || type === "community centre")
      goodStations.push(station[0]);
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));





const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

const finalPosition = function(moves) {
  let xAxis = 0;
  let yAxis = 0;
  for (let move of moves) {
    if (move === "north") {
      yAxis = yAxis += 1;
    }
    if (move === "south") {
      yAxis = yAxis -= 1;
    }
    if (move === "west") {
      xAxis = xAxis -= 1;
    }
    if (move === "east") {
      xAxis = xAxis += 1;
    }
  }
  return[xAxis, yAxis];
};

finalPosition(moves);
console.log(finalPosition(moves));











const ageCalculator = function(name, yearOfBirth, currentYear) {
 return name + " is " + (currentYear - yearOfBirth) + " years old."
}


console.log(ageCalculator("Miranda", 1983, 2015));



const howManyHundreds = function(num) {
  return Math.trunc(num/100)
}
console.log(howManyHundreds(1000), "=?", 10);




const calculateRectangleArea = function(length, width) {
  let rectangleArea = length * width;
  if ((length < 0) || (width < 0)) {
    rectangleArea = undefined;
  }
  return rectangleArea;
}

const calculateTriangleArea = function(base, height) {
  let triangleArea = (base * height) / 2;
  if ((base < 0) || (height < 0)) {
    triangleArea = undefined;
  }
  return triangleArea;
}

const calculateCircleArea = function(radius) {
  let circleArea = Math.PI * (radius * radius);
  if (radius < 0) {
    circleArea = undefined;
  }
  return circleArea;
}


console.log(calculateCircleArea(10));
console.log(calculateCircleArea(-1));




