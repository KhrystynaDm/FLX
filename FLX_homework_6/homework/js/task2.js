let price = Number(prompt('Enter amount of money (0 to 9999999)'));
let discount = Number(prompt('Enter the discount (0 to 99 )'));
let afterDiscount, saved;

if ((price <= 9999999) && (price > 0) && (discount <= 99) && (discount > 0)) {
    afterDiscount = price - (price * (discount / 100));
    saved = price - afterDiscount;
    alert(
        'Price without discount:' + price + '\n' +
        'Discount:' + parseFloat(discount.toFixed()) + '%' + '\n' +
        'Price with discount:' + parseFloat(afterDiscount.toFixed(2)) + '\n' +
        'Saved:' + parseFloat(saved.toFixed(2))
    );

}
else {
    alert('Invalid input data');
}
