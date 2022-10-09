// shortcut function
function updateProductNumber(product, price, isIncresing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncresing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update total tk
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
}
// phone plus button event handler
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})
// phone minus button event handler
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})

//  plus button event handeller
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
})
// minus button event handller
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})
