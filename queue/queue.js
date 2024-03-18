var Queue = function(){
	var arr = [];
	var head = 0, tail = 0;
	
	this.enqueue = function(element){
		arr[tail] = element;
		tail++;
		this.print_queue();
	};
	
	this.dequeue = function(){
		if(this.is_empty()){
			console.log("Queue is empty. Cannot perform delete operation.\n");
			return;
		}
		console.log("Element de-queued is : " + arr[head]);
		head++;
		this.print_queue();
	};
	
	this.is_empty = function(){
		if(head == tail){
			return true;
		}
		else{
			return false;
		}
	};
	
	this.print_queue = function(){
		var tmp_arr = [];
		for(var i = tail-1; i >= head; i--){
			tmp_arr.push(arr[i]);
		}
		console.log(tmp_arr.join());
	};
};

module.exports = Queue;

/* 

ARITRO CHNAGES 

*/
