var readline = require('readline');
var tmp = require('./SingleLinkedList');
var lk = new tmp();

var rl = readline.createInterface({
	input : process.stdin,
	output : process.stdout
});

var callback = function(option, parentRl){
	switch(option){
		case "1" : 
			rl.question("Enter key to insert : ", function(answer){
				insert(answer);
				operate();
			});
			break;
		case "2" :
			rl.question("Enter key to delete : ", function(answer){
				deleteEntry(answer);
				operate();
			});
			break;
		case "3" : 
			rl.question("Enter key to search : ", function(answer){
				searchEntry(answer);
				operate();
			});
			break;
		case "4" : 
			rl.question("Enter kth element from back : ", function(answer){
				searchkthelement(answer);
				operate();
			});
			break;
		case "5" :
			rl.question("Are you sure you want to exit Y/N : ", function(answer){
				if(answer == "y" || answer == "Y"){
					rl.close();
					parentRl.close();
					return;
				}
				operate();
			});
			break;
		default : 
			operate();
			break;
	}
};

var insert = function(data){
	lk.insert(data);
};

var deleteEntry = function(data){
	lk.deleteElement(data);
};

var searchEntry = function(data){
	lk.search(data);
};

var searchkthelement = function(data){
	lk.getNthElementFromBack(data);
};


var operate = function(){
	rl.question("\n\n************************Single Linked List*************************************\n" +
			"Insert option of you choise, \nPress 1 : To Insert Element\nPress 2 : Delete Element\nPress 3 : " +
			"Search a key\nPress 4 : search kth element from back\nPress 5 : Exit\n\n", function(answer){
		callback(answer, rl);
	});
};
operate();
