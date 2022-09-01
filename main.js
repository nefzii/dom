let plusBtn = document.getElementsByClassName('btn-plus');
for (let plus of plusBtn) {
  plus.addEventListener('click', function () {
    plus.previousElementSibling.innerText++;

    // Update the total price
    totalPrice();
  });
}

// Dimune Quantity
// Get the minus buttons
let minusBtn = document.getElementsByClassName('btn-moins');
for (let minus of minusBtn) {
  minus.addEventListener('click', function () {
    if (minus.nextElementSibling.innerText > 0) {
      minus.nextElementSibling.innerText--;
    }

    // Update the total price
    totalPrice();
  });
}

// Calculate the total price
function totalPrice() {
  // Get the product price
  let productPrice = document.getElementsByClassName('prx');
  // Get the product quantity
  let productQuantity = document.getElementsByClassName('quantity');
  // Initilize the sum
  let sum = 0;
  for (let i = 0; i < productPrice.length; i++) {
    sum += productPrice[i].innerText * productQuantity[i].innerText;
  }
  document.getElementById('prix-total').innerText = sum;
}