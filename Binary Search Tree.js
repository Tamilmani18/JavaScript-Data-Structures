class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    
    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
        }
        else{
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }else{
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
        
    }
    // Search
    lookup(value){
        if(!this.root){
            return false;
        }
        let currentNode = this.root;
        while(currentNode){
            if(value < currentNode.value){
                currentNode = currentNode.left;
            }else if(value > currentNode.value){
                currentNode = currentNode.right;
            }
            else if(value === currentNode.value){
                return currentNode;
            }
        }
        return false;
    }
    
    remove(value){
        if(!this.root){
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while(currentNode){
            if(value < currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.left;
            }
            else if(value > currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.right;
            }
            else if(value === currentNode.value){
                // No Right child
                if(currentNode.right === null){
                    
                    if(parentNode === null){
                        this.root = currentNode.left;
                    }else{
                        // if current value < parent , make current left child a child of parent
                        if(currentNode.value < parentNode.value){
                            parentNode.left = currentNode.left;
                        }
                        // if current value > parent, make current left child a right child of parent
                        else if(currentNode.value > parentNode.value){
                            parentNode.right = currentNode.left;
                        }
                    }
                }
                // Right child which doesn't have a left child
                else if(currentNode.right.left === null){
                    
                    if(parentNode === null){
                        this.root = currentNode.left;
                    }else{
                        currentNode.right.left = currentNode.left;
                        // if current value < parent , make right child a left child of parent
                        if(currentNode.value < parentNode.value){
                            parentNode.left = currentNode.right;
                        }
                        // if current value > parent, make right child a right child of parent
                        else if(currentNode.value > parentNode.value){
                            parentNode.right = currentNode.right;
                        }
                    }
                }
                // Right child that has a left child
                else{
                    // find the Right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while(leftmost.left !== null){
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }
                    // Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;
                    
                    if(parentNode === null){
                        this.root = leftmost;
                    }else{
                        if(currentNode.value < parentNode.value){
                            parentNode.left = leftmost;
                        }else if(currentNode.value > parentNode.value){
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
    }
}

const obj = new BinarySearchTree();
obj.insert(20);
obj.insert(14);
obj.insert(7);
obj.insert(16);
obj.insert(24);
obj.insert(22);
obj.insert(28);

console.log(JSON.stringify(traverse(obj.root)));
function traverse(node){
    const tree = { value : node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}