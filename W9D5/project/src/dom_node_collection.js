class DOMNodeCollection {

    constructor (htmlNodesArr) {
        this.nodes = htmlNodesArr;
    }

    // node is any DOM object.  HTML element is a node.

    html(element) {
        if (typeof element === 'undefined') {
            // return the inner html of the first node in the arr
            return this.nodes[0].innerHTML;
        } else {
            // string will become the inner HTML of each of the ndoes
            // const content = element.innerHTML;
            // element.innerHTML = htmlString;
            element = element.innerHTML;
            nodes.forEach(node => {
                node.setAttributeNode(element);
            });
        }
    }

    empty(element) {
        // this.html('')
        document.getElementById(element).innerHTML = "";
    }

    append(arg) {
            // the argument recieved is the children of the element it is called on
            // insert the specified content as the last child of each element in the JQery collection.
        if (arg instanceof String) {
            // append the outerHTML of each element in arg to the innerHTML of the DOMNodeCollection
            // element.outerHTML gets the serialized HTML fragment describing the element including its descendants.  It can also be set to replace the element with nodes parsed from the given string
            // const ele = document.getElementById(`${arg}`);
            // const outerHTMLEle = ele.outerHTML;

            this.nodes.appendChild(arg)
            // arg.forEach(ele ={

            // });
        } else if (arg instanceof HTMLElement) {
            // document.getElementById(`$arg`).appendChild(this.nodes)
            this.nodes.appendChild(arg)

        } else if (arg instanceof JQuery) {
            this.nodes.appendChild(arg)
        }
    }



}


module.exports = DOMNodeCollection;