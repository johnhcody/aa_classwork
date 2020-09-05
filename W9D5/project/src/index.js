const DOMNodeCollection = require('./dom_node_collection.js');


window.$l = function(arg) {

    if (arg instanceof HTMLElement) {
        const nodes = document.querySelectorAll(arg);
        const nodesArray = Array.from(nodes);
        return new DOMNodeCollection(nodesArray)
    }

}

