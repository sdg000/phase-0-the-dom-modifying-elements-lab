let node = document.getElementById("main");
if (node.parentNode) {
    node.parentNode.removeChild(node);
}

const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);

newHeader.id = 'victory';
newHeader.innerHTML = 'YOUR-NAME is the champion';