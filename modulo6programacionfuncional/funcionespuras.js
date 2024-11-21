function addColor(car) {
    var newCar = Object.assign({}, car, {
      color: 'Black'
    });
  
    return newCar;
  }

  var cart = [
    {
      item: 'Laptop',
      quantity: 1
    }
  ]

  function addItemToCart(item, quantity) {
    cart.push({
      item: item,
      quantity: quantity
    })
}

function addItemToCart(cart, item, quantity) {
    var newCart = cart.map(function(element) {
      return element;
    });
  
    newCart.push({
      item: item,
      quantity: quantity
    })
  
    return newCart;
  }

  cart = addItemToCart(cart, 'Phone', 1);

console.log(cart);