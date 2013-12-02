var dblNode = require("../common/DoubleNode");

function DblLinkedList(){
	this.head = null;
	
	this.getHead = function(){
		return this.head;
	};
	
	this.setHead = function(h){
		this.head = h;
	};
	
	this.insert = function(key){
		var node = new dblNode(key, "");
		if(this.getHead() == null){
			this.setHead(node);
		}
		else{
			node.next = this.getHead();
			this.getHead().prev = node;
			this.setHead(node);
		}
		this.print_list();
	};
	
	this.deleteElement = function(ele){
		var x = this.getHead();
		while(x != null){
			if(x.key == ele){
				if(x == this.getHead()){
					this.setHead(x.next);
					this.getHead().prev = null;
				}
				else{
					var before = x.prev;
					var after = x.next;
					before.next = after;
					after.prev = before;
				}
				console.log("Deleted :" + x.key);
				delete(x);
				this.print_list();
				return;
			}
			x = x.next;
		}
		console.log("Element "+ ele + " not found in the list. Cannot delete.\n");
		this.print_list();
	};
	
	this.search = function(ele){
		var x = this.getHead();
		while(x != null){
			if(x.key == ele){
				console.log("Key exists!\n");
				return;
			}
			x = x.next;
		}
		console.log("Element "+ ele + " not found in the list.\n");
	};
	
	this.print_list = function(){
		var tmp_arr = [];
		var x = this.getHead();
		while(x != null){
			tmp_arr.push(x.key);
			x = x.next;
		}
		console.log("\nCurrent List : "+tmp_arr.join() + "\n");
	};
}

module.exports = DblLinkedList;