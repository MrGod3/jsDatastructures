function BstNode(key, data){
	this.key = key;
	this.data = data;
	
	this.rightChild = null;
	this.leftChild = null;
	this.parent = null;
}

module.exports = BstNode;