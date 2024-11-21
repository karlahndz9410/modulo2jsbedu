 /*

 var car = {
	brand: 'Nissan',
	model: 'Sentra',
	year: 2020
}

function addColor(car) {
  car.color = 'Black';

  return car;
}

console.log('Before calling addColor()', car);

var sameCar = addColor(car);

console.log('After calling addColor()', car);
console.log('After calling addColor()', sameCar);

console.log('Same car?', car === sameCar);

 */ 

var car = {
	brand: 'Nissan',
	model: 'Sentra',
	year: 2020
}

function addColor(car) {
    var newCar = Object.assign({}, car, {
      color: 'Black'
    });
  
    return newCar;
  }

  console.log('Before calling addColor()', car);

var newCar = addColor(car);

console.log('After calling addColor()', car);
console.log('After calling addColor()', newCar);

console.log('Same car?', car === newCar); // false