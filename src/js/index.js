let cart = JSON.parse(localStorage.getItem("cart"));
if(!cart) {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
}
const saveCart =  () => {
  localStorage.setItem("cart", JSON.stringify(cart))
}
function addToCart(productId) {
  const product = products.find((product) => product.id === productId);
  if (product ) {
    cart.push(product);
    saveCart()
    updateCart();
  }
}
function deleteFromCart(index) {
  let deletedProduct = cart.splice(index, 1)[0];
  saveCart()
  updateCart();
}
function updateCart() {
  let cartContainer = document.getElementById("table");
  cartContainer.innerHTML = "";
  cart.forEach((product, index) => {
    let cartProduct = document.createElement("tr");
    cartProduct.innerHTML = `
    <td><img src="${product.image}" height="30px"></img></td>
    <td>${product.name}</td>
    <td>R${product.price}</td>
    <td><button onclick="deleteFromCart(${index})" class="delbtn">X</button></td>`;
    cartContainer.appendChild(cartProduct);
  });
  calculateTotal();
}
function calculateTotal() {
  let totalElement = document.getElementById("total");
  let total = 0;
  cart.forEach((product) => {
    total += parseFloat(product.price);
  });
  totalElement.textContent = `Total: R ${total.toFixed(2)}`;
}

updateCart();
function checkout() {
  if(cart.length > 0) {
    cart = [];
    localStorage.removeItem("cart");
    saveCart();
    updateCart();
    calculateTotal();
    alert("Thank you for shopping with us");
  }
  
}
