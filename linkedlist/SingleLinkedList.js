var singleNode = require("../common/SingleNode");

function SingleLinkedList(){
	this.head = null;
	
	this.getHead = function(){
		return this.head;
	};
	
	this.setHead = function(h){
		this.head = h;
	};
	
	this.insert = function(key){
		var node = new singleNode(key, "");
		if(this.getHead() == null){
			this.setHead(node);
		}
		else{
			node.next = this.getHead();
			this.setHead(node);
		}
		this.print_list();
	};
	
	this.deleteElement = function(ele){
		var x = this.getHead();
		var prev = null;
		var flag = false;
		while(x != null){
			if(x.key == ele){
				if(x == this.getHead() && prev == null){
					this.setHead(x.next);
					flag = true;
				}
				else{
					prev.next = x.next;
					flag = true;
				}
			}
			prev = x;
			x = x.next;
		}
		if(flag){
			console.log("Element "+ ele + " deleted from the list.\n");
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
	
	this.getNthElementFromBack = function(k){
		/*
		 * Find kth element from the back
		 */
		var num = parseInt(k);
		console.log(num);
		var x = this.getHead();
		var y = this.getHead();
		for(var i = 0; i < num ; i++){
			if(x != null){
				x = x.next;
			}
			else{
				console.log("There is no kth element from back.");
			}
		}
		
		while(x != null){
			x = x.next;
			y = y.next;
		}
		console.log("The "+ k + "th element is :" + y.key);
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

module.exports = SingleLinkedList;