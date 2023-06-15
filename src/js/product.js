const products = [
    {
        id: 1,
        image: "https://i.postimg.cc/26zrdvPQ/her-her-deluxe-edition.webp",
        name: "H.E.R. - H.E.R. (Deluxe Edition",
        desc: "H.E.R. by anonymous singer-songwriter H.E.R. (Gabi Wilson), is a collection of her previous releases Vol. 1 and Vol. 2. This deluxe edition also include six previously unreleased tracks to create a full-length release.",
        price: 559.60,
        genre: "RnB",
    },
    {
        id: 2,
        image: "https://i.postimg.cc/fb4Dq10f/dave-chappelle.webp",
        name: "Dave Chappelle",
        desc: "A signed LP Cover. Includes the vinyl. '846'. Guaranteed authentic. This was signed in-person by Dave Chappelle. Guaranteed authentic. Includes a certificate of authenticity (COA) provided by JSA. The certification number is: AB38903",
        price: 12569.31,
        genre: "Rap",
    },
    {
        id: 3,
        image: "https://i.postimg.cc/NfF5TqcN/Marvi-Gaye.webp",
        name: "Marvin Gaye - What's going on",
        desc: "This is a 12”Vinyl Record with a Marvin Gaye What's Going On Reproduction Label added and has the Autograph of Marvin Gaye printed directly on to it using a Unique State of the Art printing system",
        price: 22345.44,
        genre: "Soul",
    },
    {
        id: 4,
        image: "https://i.postimg.cc/jd0z4SM8/2Pac.webp",
        name: "2Pac",
        desc: "'Greatest Hits' is a posthumous greatest hits album by the American rapper. The album's non-chronological sequence focuses on the highlights of the rappers career. The album is comprised of 21 tracks, accompanied by four previously unreleased songs. Features the singles 'Changes' and 'Unconditional Love'.",
        price: 3200.00,
        genre: "Rap",
    },
    {
        id: 5,
        image: "https://i.postimg.cc/zvr26ZCK/Selena-gomez.webp",
        name: "Selena Gomez LP Album",
        desc: "This Selena Gomez autographed LP Album Vinyl Insert has been personally hand-signed by Selena Gomez.",
        price: 1863.58,
        genre: "Pop",
    },
    {
        id: 6,
        image: "https://i.postimg.cc/PfCF3y1S/Nora.webp",
        name: "Nora Noor - Soul Deep",
        desc: "Blue Mood is proud to present the comeback album from the Norwegian Queen of Soul. Noora Noor is finally back. Soul Deep, that gave Noor the Norwegian Grammy Award (Spellemannprisen), goes more retro and was recorded live in studio. ",
        price: 420.00,
        genre: "Pop",
    },
    {
        id: 7,
        image: "https://i.postimg.cc/hG0m7ndZ/jessica-simpson.webp",
        name: "Jessica Simpson - Irresistible",
        desc: "A copy of 'Irresistible' signed by Jessica. Autographed in-person LP album record cover. Includes the vinyl. Guaranteed authentic.",
        price: 7415.83,
        genre: "Pop",
    },
    {
        id: 8,
        image: "https://i.postimg.cc/cChfySs8/kanye-west.webp",
        name: "Kanye West - Ye",
        desc: "A signed LP Cover. Includes the vinyl. 'Ye''. This was signed in-person by Kanye West. Guaranteed authentic. Includes a certificate of authenticity (COA) provided by GA. The certification number is: GV939134",
        price: 14813.72,
        genre: "Rap",
    },
    {
        id: 9,
        image: "https://i.postimg.cc/xdNrcpm7/tina-turner.webp",
        name: "Tina Turner - Foreign affair",
        desc: "",
        price: 12566.98,
        genre: "Soul",
    },
   
];


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
    product.quantity++;
    saveCart()
    updateCart();
  }
}
function deleteFromCart(index) {
  let deletedProduct = cart.splice(index, 1)[0];
  deletedProduct.quantity++;
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
    <td><input type="number" placeholder="1" min="1" style="width: 40px;" height="40px"></td>
    <td>R${product.price}</td>
    <td><button onclick="deleteFromCart(${index})" class="delbtn">X</button></td>`;
    cartContainer.appendChild(cartProduct);
  });
  calculateTotal();
}
function calculateTotal() {
  let totalElement = document.getElementById("total");
  let total = 0;
  cart.forEach((item) => {
    total += eval(item.price);
  });
  // totalElement.textContent = `<span>${total}</span>`;
}

updateCart();
function checkout() {
  const modalFooter = document.querySelector(".");
  modalFooter.innerHTML =  cart = [];
  updateCart();
}
function renderCartTotal() {
  let totalCartPrice = 0;
  totalCartAmount = 0;
  cart.forEach((item) => {
    totalCartPrice += item.price * item.numberOfUnits;
  });
  totalPriceEl.innerHTML = `Total Price: R${totalCartPrice.toFixed(2)}`;
}
