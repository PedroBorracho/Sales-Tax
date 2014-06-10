/*
* This function applies the basic tax: applicable for all except
* categories books, food, medical
*/
function __applyBasicTax(item){
	var taxRate = 0.1; //basic Tax Rate is 10%

	//check the category, if not applicable and return 0
	if(item && ("food" == item.category || "book" == item.category || "medical" == item.category)){
		return 0
	}
	
	var tax = taxRate*item.price*item.number;
	//console.log("basicTax : " + tax);
	return __roundTaxAmount(tax)
}

/*
* This function applies the import tax: applicable for all items with 
* imported flag = true
*/
function __applyImportTax(item){
	var taxRate = 0.05; //import Tax Rate is 5%

	//check the the imported flag, otherwise not applicable and return 0
	if(item && item.imported){
		var tax = taxRate*item.price*item.number;
		//console.log("importTax : " + tax);
		return __roundTaxAmount(tax)
	}
	return 0

}

/*
* Handle the rounding up of the tax amount to the nearest 0.05
*/
function __roundTaxAmount(amount){
	//console.log("roundvalue : " + (Math.ceil(amount*20)/20).toFixed(2))
	return (Math.ceil(amount*20)/20).toFixed(2)
}

/*
* This function receive the puchased items and updated the content of the 
* DIV with id divID.
*/
function computeReceipt(items){
	var total = 0;
	var totalTax = 0;

	for(var i in items){
		var taxForItem = parseFloat(__applyBasicTax(items[i])) + parseFloat(__applyImportTax(items[i]));
		total = (parseFloat(total) + parseFloat(items[i].price) + parseFloat(taxForItem)).toFixed(2);
		totalTax = (parseFloat(totalTax) + parseFloat(taxForItem)).toFixed(2);
		items[i].priceWithTax = (parseFloat(items[i].price) + parseFloat(taxForItem)).toFixed(2);

		//console.log("tax : " + taxForItem);
		//console.log("total : " + total);
	}

	var receipt = {
		total: total,
		totalTax: totalTax,
		items: items
	};

	return receipt
}