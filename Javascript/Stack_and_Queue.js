var list = document.getElementById('list');
var list1 = document.getElementById('list1');
var text = document.getElementById('text');
var push = document.getElementById('push');
var stack = document.getElementById('stack');
var click = 0;
list1.innerHTML = '';
class Stack extends Array {
    constructor(...elem) {
        super(...elem);
    }
    unshift_element(ele) {
        super.unshift(ele);
        if (this.length === 10) {
            stack.innerHTML = 'Stack overflow';
        }
    }
    shift_element() {
        if (this.length === 0) {
            stack.innerHTML = 'Stack Is Empty';
        } else {
            var ele = list.childNodes[0];
            super.shift();
            list.removeChild(ele);
            return ele;
        }
    }


    display_elements(s2) {
        for (let i = 0; i < s2.length; i++) {
            var x = document.createElement('li');
            var t = document.createTextNode(s2[i]);
            x.appendChild(t);
            list.appendChild(x);
        }
    }
}
const s1 = new Stack();
s1.display_elements(s1);

function Push() {
    var info = text.value;
    if (info == '') {
        alert('Empty Values cannot be inserted');
    } else {
        s1.unshift_element(info);
        var y = document.createElement('li');
        var u = document.createTextNode(info);
        y.appendChild(u);
        list.appendChild(y);
        list.insertBefore(y, list.childNodes[0]);
    }
}

function Pop() {
    var value = s1.shift_element().textContent;
    var k = document.createElement('li');
    var l = document.createTextNode(value);
    k.appendChild(l);
    list1.appendChild(k);
}

//Queue 
var List = document.getElementById('List');
var List1 = document.getElementById('List1');
var Text = document.getElementById('Text');
var enqueue = document.getElementById('enqueue');
var queue = document.getElementById('queue');
var click = 0;
List1.innerHTML = '';

class Queue extends Array {
    constructor(...elements) {
        super(...elements);
    }

    push_element(element) {
        super.push(element);
        if (this.length === 10) {
            queue.innerHTML = 'You can push only 10 elements';
        }
    }

    pop_element() {
        if (this.length === 0) {
            queue.innerHTML = 'Queue Is Empty';
        } else {
            var ptu = List.childNodes[this.length - 1];
            super.pop();
            List.removeChild(ptu);
            return ptu;
        }
    }

    Front() {
        if (this.length == 0) {
            alert('Queue is empty');
        } else {
            return (List.childNodes[this.length - 1]);
        }
    }

    Rear() {
        if (this.length == 0) {
            alert('Queue is empty');
        } else {
            return (List.childNodes[0]);
        }
    }

    display_elements(s3) {
        for (let i = 0; i < s3.length; i++) {
            var x1 = document.createElement('li');
            var y1 = document.createTextNode(s3[i]);
            x1.appendChild(y1);
            List.appendChild(y1);
        }
    }
}

const s = new Queue();
s.display_elements(s);

function enQueue() {
    var infor = Text.value;
    if (infor == '') {
        alert('Empty Values cannot be inserted');
    } else {
        s.push_element(infor);
        var x2 = document.createElement('li');
        var y2 = document.createTextNode(infor);
        x2.appendChild(y2);
        List.appendChild(x2);
        List.insertBefore(x2, List.childNodes[0]);
    }
}


function deQueue() {
    var value = s.pop_element().textContent;
    var x3 = document.createElement('li');
    var y3 = document.createTextNode(value);
    x3.appendChild(y3);
    List1.appendChild(x3);
}

var frontValue = document.getElementById('front__value');


function getFront() {
    var value = s.Front().textContent;
    alert(value);
}

function getRear() {
    var vaLue = s.Rear().textContent;
    alert(vaLue);
}


//End of Queue