let price = Number(prompt('Enter amount of money (0 to 9999999)'));
let discount = Number(prompt('Enter the discount (0 to 99 )'));
let afterDiscount;

if ((price <= 9999999) && (price > 0) && (discount <= 99) && (discount > 0)) {
    afterDiscount = price - (price * (discount / 100))
    alert(parseFloat(afterDiscount.toFixed(2)));
} else {
    alert('Invalid input data');
}
