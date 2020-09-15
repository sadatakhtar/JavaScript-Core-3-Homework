 let order = [
     { itemName: "Hot cakes       ", quantity: 1, unitPrice: 2.29},
     { itemName: "Apple Pie       ", quantity: 2, unitPrice: 1.39},
     { itemName: "Egg McMuffin    ", quantity: 1, unitPrice: 2.80},
     { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.00},
     { itemName: "Hot Coffee      ", quantity: 2, unitPrice: 1.00},
     { itemName: "Hash Brown      ", quantity: 4, unitPrice: 0.40}
 ]
 let grandTotal;
 console.log("QTY     ITEM                 TOTAL");

 order.filter(items => {
     let {itemName, quantity, unitPrice} = items;
     totalItemsCost = getTotal(quantity, unitPrice);
     finalTotal = totalSum(totalItemsCost);
     console.log(`${quantity}       ${itemName}     ${totalItemsCost}`);      
 })

//CALCULATES PRICE FOR ITEMS BASED ON QUANTITY
function getTotal(quantity, price){
    return quantity * price;
}

function totalSum(price){
   return price += totalItemsCost;
}

console.log(`Total: ${finalTotal}`);