var btNode = require("../../common/BstNode");

function Bst(){
	this.root = null;
	
	this.getRoot = function(){
		return this.root;
	};
	
	this.setRoot = function(item){
		this.root = item;
	};
	
	this.insert = function(item){
		this.setRoot(this.put(this.getRoot(), item));
		this.inOrderTraversal(this.getRoot());
	};
	
	this.put = function(node, item){
		if(node == null){
			return new btNode(item);
		}
		else if(node.key == item){
			node.key = item;
		}
		else if(item < node.key){
			node.leftChild = this.put(node.leftChild, item);
			this.rotateRight(node);
		}
		else if (item > node.key){
			node.rightChild = this.put(node.rightChild, item);
			this.rotateLeft(node);
		}
		return node;
	};
	
	this.search = function(key){
		var x = this.getRoot();
		while(x != null){
			if(x.key == key){
				console.log("Key Exists!");
				return;
			}
			if(key < x.key){
				x = x.leftChild;
			}
			else{
				x = x.rightChild;
			}
		}
	};
	
	this.rotateLeft = function( node ){
		var v = node.rightChild;
		node.rightChild = v.leftChild;
		v.leftChild = node;
		return v;
	};
	
	this.rotateRight = function( node ){
		var v = node.leftChild;
		node.leftChild = v.rightChild;
		v.rightChild = node;
		return v;
	};
	
	this.inOrderTraversal = function(node){
		if(node == null){
			return;
		}
		this.inOrderTraversal(node.leftChild);
		console.log(node.key);
		this.inOrderTraversal(node.rightChild);
	};
}

module.exports = Bst;