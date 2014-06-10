/*
* This function updates the DOM with the output of the businessLogic
*/
function updateDOM(receipt,ulID){
	var ul = document.getElementById(ulID);
	
	for(var i in receipt.items){
		var li = document.createElement("li");
		var item = receipt.items[i];
		var text = item.number + " " + item.name + ": " + item.priceWithTax
	    li.appendChild(document.createTextNode(text));
	    ul.appendChild(li);
	}
    
    var liTax = document.createElement("li");
    liTax.appendChild(document.createTextNode("Sales Taxes: " +receipt.totalTax));
    ul.appendChild(liTax);

    var liTotal = document.createElement("li");
    liTotal.appendChild(document.createTextNode("Total: " +receipt.total));
    ul.appendChild(liTotal);
}

/* Exacute Input 1*/
function computeInput1(){
	var rec = computeReceipt([
	{   
		number : 1,
		name : "book",
		price: 12.49,
		category: "book",
		imported: false
	},
		{   
		number : 1,
		price: 14.99,
		name : "music CD",
		category: "music",
		imported: false
	},
		{   
		number : 1,
		price: 0.85,
		category: "food",
		name : "chocolate Bar",
		imported: false
	}
	]);

	updateDOM(rec,"output1");
}

/* Exacute Input 2*/
function computeInput2(){
	var rec = computeReceipt([
		{   
			number : 1,
			price: 10.00,
			category: "food",
			name: "imported box of chocolates",
			imported: true
		},
			{   
			number : 1,
			price: 47.50,
			name: "imported bottle of perfume",
			category: "other",
			imported: true
		}
	]);

	updateDOM(rec,"output2");
}

/* Exacute Input 3*/
function computeInput3(){
	var rec = computeReceipt([
		{   
			number : 1,
			price: 27.99,
			category: "other",
			name: "imported bottle of perfume",
			imported: true
		},
			{   
			number : 1,
			price: 18.99,
			category: "other",
			name: "bottle of perfume",
			imported: false
		},
			{   
			number : 1,
			price: 9.75,
			category: "medical",
			name: "packet of headache pills",
			imported: false
		},
		{   
			number : 1,
			price: 11.25,
			category: "food",
			name: "imported box of chocolates",
			imported: true
		}
	]);
	updateDOM(rec,"output3");
}


