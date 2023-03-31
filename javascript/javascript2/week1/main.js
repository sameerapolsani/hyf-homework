console.log("Script loaded");

const products = getAvailableProducts();
const ulTag = document.createElement("ul");
const bodyTag = document.createElement("body");
function renderProducts(products) {
  for (product of products) {
    const liTag = document.createElement("li");
    const title = document.createElement("h1");
    const price = document.createElement("p");
    const rating = document.createElement("p");
    title.innerText = `${product.title}`;
    price.innerText = `${product.price}`;
    rating.innerText = `${product.rating}`;
    liTag.appendChild(title);
    liTag.appendChild(price);
    liTag.appendChild(rating);
    ulTag.appendChild(liTag);
  }
}
bodyTag.appendChild(ulTag);
renderProducts(products);
console.log(products);
