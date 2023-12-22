const product = document.getElementById("product");
const cartz = document.getElementById("cartz");
const loadMoreBtn=document.getElementById("load")

const limit = 4;
let page = 1;
async function get() {
  const skip = (page - 1) * limit;
  const res = await axios.get(
    `https://655c844f25b76d9884fd70a7.mockapi.io/products?limit=${limit}&page=${page}&skip=${skip}`
  );
  const data = await res.data;
  db = data;
  db.map((item) => {
    const box = document.createElement("div");
    box.className = "boxs";
    box.innerHTML = `
        <div class="divz">
        <img src="${item.image}" alt="">
        <div class="divc">
            <p>${item.title}</p>
        </div>
        <p>$ ${item.price}</p>
    <button onclick="addToCart(${item.id})">Sebete Ekle</button>
            </div>
        `;
    product.appendChild(box);
  });

  page++
}

function addToCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(db.find((item) => item.id == index));
  localStorage.setItem("cart", JSON.stringify(cart));

}
get();

loadMoreBtn.addEventListener("click", get)