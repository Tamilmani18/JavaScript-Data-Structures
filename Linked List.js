class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList{
    constructor(value){
        this.head = {
            value : value,
            next : null
        }
        this.tail = this.head;
        this.length =1;
    }
    
    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    
    insert(value, pos){
        if(pos === 0)
            this.append(value);
        const newNode = new Node(value);
        let temp = this.head;
        for(let i =0; i<pos-1;i++){
            temp = temp.next;
            if(temp===null)
                console.log("Invalid Possition");
        }
        newNode.next = temp.next;
        if(temp.next === null)
            this.tail = newNode;
        temp.next = newNode;
        this.length++;
        return this;
    }
    
    remove(index){
        let temp = this.head;
        let prev = null;
        if(index === 0){
            this.head = this.head.next;
            // delete temp;
            return this;
        }
        for(let i=0;i<index;i++){
            prev = temp;
            temp = temp.next;
            if(temp===null)
                console.log("Invalid Possition");
        }
        
        prev.next = temp.next;
        this.length--;
        return this;
    }
    
    display(){
        let temp = this.head; 
        let str = "";
        while(temp!=null){
            str+= temp.value;
            str+="-->"
            temp = temp.next;
        }
        console.log(str);
    }
}

const myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.prepend(0);
myLinkedList.insert(4,4);
myLinkedList.remove(1);
myLinkedList.display();