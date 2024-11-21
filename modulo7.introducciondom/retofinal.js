function createNode(type, child) {
    var node = document.createElement(type);
  
    if(typeof child === "string") {
      var text = document.createTextNode(child);
      node.appendChild(text);
    } else {
      node.appendChild(child);
    }
  
    return node;
  }
  
  var title = createNode('h1', 'Hello World');
  console.log(title); // <h1>Hello World</h1>

  function createNode(type, child, attrs) {
    var node = document.createElement(type);
  
    if(attrs) {
      Object.keys(attrs).map(function(attr) {
        node[attr] = attrs[attr];
      });
    }
  
    if(typeof child === "string") {
      node.appendChild(document.createTextNode(child));
    } else {
      node.appendChild(child);
    }
  
    return node;
  }

  var title = createNode('h1', 'Hello World');
console.log(title); // <h1>Hello World</h1>

var p = createNode('p', 'Hello World', { className: 'subtitle' });
console.log(p); // <p class="subtitle">Hello World</p>

var container = document.createElement('div');

container.appendChild(title);
container.appendChild(p);

function appendChildren(node, children) {
    var documentFragment = document.createDocumentFragment();
  
    children.forEach(function(child) {
      documentFragment.appendChild(child);
    })
  
    node.appendChild(documentFragment);
  }

  appendChildren(container, [title, p]);