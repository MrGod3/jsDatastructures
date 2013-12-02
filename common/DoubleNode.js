function DoubleNode(key, data){
	this.key = key;
	this.data = data;
	
	this.next = null;
	this.prev = null;
}
/*
DoubleNode.prototype.next = null;
DoubleNode.prototype.prev = null;
*/
module.exports = DoubleNode;