function Stack(){
	var arr = [];
	var top = -1;
	var STACK_SIZE = 5;
	this.push = function(val){
		if(stack_overflow()){
			console.log("Stack Overflow! Cannot insert.");
			return;
		}
		arr[top+1] = val;
		top++;
		print_Stack();
	};
	
	this.pop = function(){
		if(is_empty()){
			console.log("Stack is empty!. No item to pop.");
			return;
		}
		top = top-1;
		console.log("Deleted Element : "+ arr[top+1]);
	};
	
	var is_empty = function(){
		if(top < 0){
			return true;
		}
		else{
			return false;
		}
	};
	
	var stack_overflow = function(){
		if((top+1) >= STACK_SIZE){
			return true;
		}
		else{
			return false;
		}
	};
	
	var print_Stack = function(){
		console.log(arr);
	};
}

module.exports = Stack;