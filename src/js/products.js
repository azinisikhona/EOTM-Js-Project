const products = JSON.parse(localStorage.getItem("catalogue")) || [];

function ShowProducts() {
    products.forEach((product) => {
        if (product.genre == "RnB") {
            const RnBvinyls = document.getElementById("RnB")
            const elementProduct = document.createElement("div")
            elementProduct.innerHTML = `
            <div class="product-card col">
            <img src="${product.image}" alt="${product.name}" class="img-thumbnail">
            <h3>${product.name}</h3>
            <p>${product.desc}</p>
            <p>R${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to cart</button>
            </div>`;
            RnBvinyls.appendChild(elementProduct);
        }
    })


products.forEach((product) => {
    if (product.genre == "Soul") {
        const Soulvinyls = document.getElementById("Soul")
        const elementProduct = document.createElement("div")
        elementProduct.innerHTML = `
        <div class="product-card col">
        <img src="${product.image}" alt="${product.name}" class="img-thumbnail">
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
        <p>R${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to cart</button>
        </div>`;
        Soulvinyls.appendChild(elementProduct);
    }
})


products.forEach((product) => {
    if (product.genre == "Pop") {
        const Popvinyls = document.getElementById("Pop")
        const elementProduct = document.createElement("div")
        elementProduct.innerHTML = `
        <div class="product-card col">
        <img src="${product.image}" alt="${product.name}" class="img-thumbnail">
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
        <p>R${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to cart</button>
        </div>`;
        Popvinyls.appendChild(elementProduct);
    }
})

products.forEach((product) => {
    if (product.genre == "Rap") {
        const Rapvinyls = document.getElementById("Rap")
        const elementProduct = document.createElement("div")
        elementProduct.innerHTML = `
        <div class="product-card col">
        <img src="${product.image}" alt="${product.name}" class="img-thumbnail">
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
        <p>R${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to cart</button>
        </div>`;
        Rapvinyls.appendChild(elementProduct);
    }
})
}

ShowProducts();

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