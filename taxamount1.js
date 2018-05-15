//Tax Amount
/*a function that takes two arguments, an amount in Naira and a tax percentage. 
Return an array with the tax amount in Kobo.
*/
function calculateTax(amount, taxPercentage){
    //ensuring that users enters the correct value or data type
    if(typeof(amount) === "number" && (typeof(taxPercentage) === "number")){
        //declaring and assigning variables
       
        var taxPerc = taxPercentage/100;//calculate tax percentage
        var payableAmount = amount * taxPerc;
        //calculating amount to be paid
        var taxAmount = payableAmount * 100;//outputing tax amount
        var calc = [taxAmount];

        console.log(calc + " kobo");
    }  
        else {
            console.log("input numerical values");
        }

}
calculateTax(1000,5)
calculateTax(2000,2)

