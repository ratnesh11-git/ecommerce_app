const products = [
  {id:1, name:"Laptop", price:50000},
  {id:2, name:"Phone", price:20000},
  {id:3, name:"Headphones", price:2000}
];

const cart = [];

function displayProducts(){
  const container = document.getElementById("products");
  products.forEach(p=>{
    const div = document.createElement("div");
    div.className="product";
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>Price: ₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(id){
  const product = products.find(p=>p.id===id);
  cart.push(product);
  updateCart();
}

function updateCart(){
  const cartList = document.getElementById("cart");
  cartList.innerHTML="";
  cart.forEach(item=>{
    const li = document.createElement("li");
    li.innerText = item.name + " - ₹" + item.price;
    cartList.appendChild(li);
  });
}

displayProducts();