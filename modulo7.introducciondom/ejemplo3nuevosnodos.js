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

document.getElementById("quote")
  .appendChild(
    createNode("footer", createNode("strong", "- Karl Popper"))
  )