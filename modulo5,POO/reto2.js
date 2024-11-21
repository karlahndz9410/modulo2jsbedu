var Group = function() {
    this.members = [];
  }
  
  Group.prototype.add = function(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }
  
  Group.prototype.has = function(value) {
    return this.members.includes(value);
  }
  
  Group.from = function(collection) {
    var group = new Group();
  
    for(var i = 0; i < collection.length; i++) {
      group.add(collection[i]);
    }
    return group;
  }

  var group = Group.from([1, 2, 3, 4, 5]);
console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
console.log(group.has(5)); // true
console.log(group.has(10)); // false

group.add(10);
console.log(group.has(10)); // true

//add: Agrega un nuevo valor al grupo sólo si no existe.

//has: Retorna un booleano indicando si el valor es un miembro del grupo.

//from: Método estático que recibe un arreglo y crea un grupo con todos los elementos de dicho arreglo.