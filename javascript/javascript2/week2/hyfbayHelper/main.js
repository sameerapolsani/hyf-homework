console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
  //   creating tags
  const main = document.querySelector("main");
  const ulTag = document.createElement("ul");
  main.appendChild(ulTag);
  for (let i = 0; i < products.length; i++) {
    const liTag = document.createElement("li");
    const nameTag = document.createElement("h3");
    const priceTag = document.createElement("div");
    const ratingTag = document.createElement("div");

    // populate tags
    nameTag.innerHTML = products[i].name;
    priceTag.innerHTML = "price: " + products[i].price;
    ratingTag.innerHTML = "rating: " + products[i].rating;

    // append tags
    liTag.appendChild(nameTag);
    liTag.appendChild(priceTag);
    liTag.appendChild(ratingTag);
    ulTag.appendChild(liTag);
  }
  console.log(main);
}
renderProducts(products);

// filter searching
const input = document.querySelector("input");
input.addEventListener(input, productSearch);

function productSearch() {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(input.value.toLocaleLowerCase())
  );
  renderProducts(filteredProducts);
  console.log(filteredProducts);
}
// max price
const priceInput = document.querySelector("#price");
priceInput.addEventListener("keyup", priceResult);
function priceResult() {
  if (parseInt(priceInput.value) > 0) {
    const filteredProducts = products.filter(
      (product) => product.price < parseInt(priceInput.value)
    );

    renderProducts(filteredProducts);
    console.log(filteredProducts);
  } else renderProducts(products);
}
// function to remove old lists
function removeOldList() {
  const ulTag = document.querySelector("ul");
  while (ulTag.hasChildNodes()) {
    ulTag.removeChild(ulTag.firstChild);
  }
}
