var Vec = function(x, y) {
    this.x = x;
    this.y = y;
  }
  
  Vec.prototype.plus = function(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }
  
  Vec.prototype.minus = function(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }
  
  Vec.prototype.length = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  var vec1 = new Vec(1, 2);
var vec2 = new Vec(2, 3);

console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
console.log(vec1.length()); // 2.23606797749979

//plus: Recibe otro vector como parámetro y retorna un nuevo vector con la suma de ambos vectores.

//minus: Recibe otro vector como parámetro y retorna un nuevo vector con la diferencia de ambos vectores.

//length: Retorna la longitud del vector, es decir, la distancia del punto (x, y) desde el origen (0, 0).