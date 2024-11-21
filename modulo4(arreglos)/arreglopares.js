var car = {
    brand: 'Nissan',
    model: 'Versa',
    year: 2020
  }

  function keyValuePairs(obj) {
    var keys = Object.keys(obj);
    var pairs = [];

    for(var i = 0; i < keys.length; i++) {
      pairs.push( [keys[i], obj[keys[i]]] )
    }

    return pairs;
}
var result = keyValuePairs(car);

console.log(result)