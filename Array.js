class MyArray{

    constructor(){
        this.length=0;
        this.arr={};
    }

    push(val){
        this.arr[this.length]=val;
        this.length++;
    }

    delete(pos){
        for(let i=pos;i<this.length-1;i++){
            this.arr[i]=this.arr[i+1];
        }
        delete this.arr[this.length-1];
        this.length--;
    }
    
    insert(pos, val){
        for(let i=this.length-1;i>=pos;i--){
            this.arr[i+1]=this.arr[i];
        }
        this.arr[pos]=val;
        this.length++;
    }

}