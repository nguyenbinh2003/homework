/*
	input: money, numberOfProduct
	output:  product

	list:
	 -  pepsi  :  2$
	 - cocacola: 2$
	 - revine  : 1$
	 - nutri boost: 2$
	 - dr.thanh : 1$
	 - KHONG DO(MTP): 3$
*/
function vendinngMachine(numberOfProduct) {
    switch (numberOfProduct) {
        case 1:
            console.log("Pepsi");
            return 2;
        case 2:
            console.log("Cocacola");
            return 2;
        case 3:
            console.log("Revine");
            return 1;
        case 4:
            console.log("Nutri Boost");
            return 2;
        case 5:
            console.log("Dr. Thanh");
            return 1;
        case 6:
            console.log("Khong Do(MTP)");
            return 3;
        default:
            return 0;
    }
}

let total = +prompt("Please insert money:");
if (isNaN(total)) {
    console.log("Co lam moi co an.");
} else if (!isNaN(total) && total > 0 && parseInt(total) === total) {
    while (total > 0) {
        let number = +prompt("Please number of product:");
        console.log("You bought :", number);
        total = total - vendinngMachine(number);
        switch (true) {
           case total < vendinngMachine(number):
            console.log("You don't have enough money to buy it!");
            break
            case total >= vendinngMachine(number):
            console.log("You have leftovers :", total, "$");
            continue
        };    
    };
};

         