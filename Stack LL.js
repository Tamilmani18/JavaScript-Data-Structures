class Node{
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    
    push(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.bottom = newNode;
            this.top = newNode;
        }
        else{
            const oldTop = this.top;
            this.top = newNode;
            this.top.next = oldTop;
        }
        this.length++;
        return this;
    }
    
    pop(){
        if(!this.top) return null;
        if(this.top === this.bottom) this.bottom = null;
        const temp = this.top;
        this.top = this.top.next;
        this.length--;
        return temp;
    }
    
    peek(){
        if(!this.top) return null;
        return this.top;
    }
    
    isEmpty(){
        if(this.top) return false;
        else return true;
    }
}

let myStack = new Stack();
myStack.push("google");
myStack.push("youtube");
myStack.push("discord");
myStack.pop();
myStack.peek();
myStack.isEmpty();