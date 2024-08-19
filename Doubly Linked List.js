class Node{
    constructor(value){
        this.value = value,
        this.next = null,
        this.prev = null
    }
}

class LinkedList{
    constructor(value){
        this.head = {
            value : value,
            next : null,
            prev : null
        }
        this.tail = this.head;
        this.length =1;
    }
    
    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        newNode.prev = this.tail;
        this.length++;
        return this;
    }
    
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }
    
    insert(value,index){
        if(index === 0){
            this.append(value);
            return this;
        }
        const newNode = new Node(value);
        let temp = this.head;
        for(let i =0; i<index-1;i++){
            temp = temp.next;
            if(temp===null)
                console.log("Invalid Possition");
        }
        newNode.prev = temp;
        newNode.next = temp.next;
        if(temp.next === null)
            this.tail = newNode;
        if(temp.next != null)
            temp.next.prev = newNode;
        temp.next = newNode;
        this.length++;
        return this;
    }
    
    remove(index){
        let temp = this.head;
        if(index === 0){
            this.head = this.head.next;
            if (this.head !== null)
                this.head.prev = null;
            else
                this.tail = null;
            this.length--;
            return this;
        }
        for(let i=0;i<index;i++){
            temp = temp.next;
            if(temp===null)
                console.log("Invalid Possition");
        }
        
        temp.prev.next = temp.next;
        if(temp.next != null)
            temp.next.prev = temp.prev;
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