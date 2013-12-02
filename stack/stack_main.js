var readline = require('readline');
var tmp = require('./stack');
var stack = new tmp();

var rl = readline.createInterface({
	input : process.stdin,
	output : process.stdout
});

var callback = function(option, parentRl){
	switch(option){
		case "1" : 
			rl.question("Insert number to insert : ", function(answer){
				insert(answer);
				//rl.close();
				operate();
			});
			break;
		case "2" :
				deleteEntry();
				operate();
			break;
		case "3" :
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
	stack.push(data);
};

var deleteEntry = function(){
	stack.pop();
};

var operate = function(){
	rl.question("\n\n************************Stack Operations*************************************\n" +
			"Insert option of you choise, \nPress 1 : To Insert Element\nPress 2 : Delete Element\nPress 3 : Exit\n", function(answer){
		callback(answer, rl);
	});
};
operate();
