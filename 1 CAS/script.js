function calculateTotal(price, taxRate) {
  const finalPrice = price + price * taxRate;
  if (finalPrice > 100) {
    console.log("Expensive item!");
    return finalPrice * 0.9;
  } else {
    return finalPrice;
  }
}
const cartTotal = calculateTotal(120, 0.15);
console.log("Total after discount:", cartTotal);
