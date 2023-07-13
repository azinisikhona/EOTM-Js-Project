function addProducts() {
    const id = Math.floor(Math.random() * 1000000);
    const product = {
        id,
        image: document.getElementById("image").value,
        name: document.getElementById("productName").value,
        price: parseFloat(document.getElementById("productPrice").value),
        category: document.getElementById("productCategory").value,
        quantity: parseInt(document.getElementById("quantity").value),
    }
    adminProducts.push(product);
    localStorage.setItem("adminProducts", JSON.stringify(adminProducts));
    displayAdminProducts();
}
const addBtn = document.getElementById("addToStore");
addBtn.addEventListener("click", addProducts)
function displayAdminProducts() {
    const listProducts = document.getElementById("productList");
        listProducts.innerHTML = "";
        adminProducts.forEach((product) => {
            let adminTable = document.createElement("tr");
            adminTable.innerHTML = `
            <td class="text-center"><img src="${product.image}"> </td>
            <td class="text-center">${product.name}</td>
            <td class="text-center">${product.price}</td>
            <td class="text-center">${product.category}</td>
            <td class="text-center">${product.quantity}</td>
            <td>
                <button class="deleteBtn px-2 bg-black text-white fw-bold border-white" onclick="deleteProducts(${product.id})"> Delete </button>
            </td>
            `;
            listProducts.appendChild(adminTable);
        })
}
displayAdminProducts();
function deleteProducts(productId) {
    const adminIndex = adminProducts.findIndex((product) => product.id === productId);
    if(adminIndex !== -1) {
        adminProducts.splice(adminIndex, 1);
    }
    localStorage.setItem("adminProducts", JSON.stringify(adminProducts));
    displayAdminProducts();
};