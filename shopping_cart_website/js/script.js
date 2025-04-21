let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
let totalPrice = 0;
let cartCount = 0;

function addToCart(productCard) {
  const name = productCard.querySelector(".product-name").textContent;
  const priceText = productCard.querySelector(".product-price").textContent;
  const price = parseFloat(priceText.replace("$", ""));
  const imgSrc = productCard.querySelector(".product-img").src;

  const existingItem = cartItems.find((item) => item.name === name);
  if (existingItem) {
    existingItem.quanity += 1;
  } else {
    const newItem = {
      name,
      price,
      img: imgSrc,
      quanity: 1,
    };
    cartItems.push(newItem);
  }
  updateLocalStorage();
  updateCartDisplay();
  animateAddToCart(productCard.querySelector(".product-img"));
}

function animateAddToCart(element) {
  const cartIcon = document.getElementById("cart-icon");
  const cartRect = cartIcon.getBoundingClientRect();
  const rect = element.getBoundingClientRect();

  const flyingItem = document.createElement("div");
  flyingItem.classList.add("flying-item");
  flyingItem.style.cssText = `
        position: fixed;
        z-index: 1000;
        width: 150px;
        height: 150px;
        background-image: url('${element.src}');
        background-size: cover;
        border-radius: 50%;
        left: ${rect.left}px;
        top: ${rect.top}px;
        transition: all 2s cubic-bezier(0.19, 1, 0.22, 1);
        pointer-events: none;
    `;
  document.body.appendChild(flyingItem);

  setTimeout(() => {
    flyingItem.style.transform = `scale(0.5)`;
    flyingItem.style.left = `${cartRect.left + cartRect.width / 2 - 25}px`;
    flyingItem.style.top = `${cartRect.top + cartRect.height / 2 - 100}px`;
    flyingItem.style.opacity = "0";
  }, 50);

  setTimeout(() => {
    document.body.removeChild(flyingItem);
  }, 2050);
}

function updateCartDisplay() {
  const cartContainer = document.getElementById("cart-items");
  const totalPriceEle = document.getElementById("total-price");
  const cartCountEle = document.getElementById("cart-count");

  cartContainer.innerHTML = "";

  totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quanity,
    0
  );
  cartCount = cartItems.reduce((count, item) => count + item.quanity, 0);

  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("cart-item");
    li.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="cart-item-img" />
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price} x ${item.quanity}</div>
            </div>
            <div class="quanity-controls">
                <button onclick="changeQuanity('${item.name}', -1)">-</button>
                <button onclick="changeQuanity('${item.name}', +1)">+</button>
            </div>
            <button class="remove-item" onclick="removeItem('${item.name}')">x</button>
        `;
    cartContainer.appendChild(li);
  });
  cartCountEle.textContent = cartCount;
  totalPriceEle.textContent = totalPrice.toFixed(2);
}

function updateLocalStorage() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

window.onload = () => {
  updateCartDisplay();
};

const cart_btn = document.getElementById("cart-icon");
const cart_modal = document.getElementById("cart-model");
const close_btn = document.querySelector(".close-btn");

function changeQuanity(name, change) {
  const item = cartItems.find((item) => item.name === name);

  if (item) {
    item.quanity += change;
    if (item.quanity <= 0) {
      removeItem(name);
    } else {
      updateLocalStorage();
      updateCartDisplay();
    }
  }
}

function removeItem(name) {
  cartItems = cartItems.filter((item) => item.name !== name);
  updateLocalStorage();
  updateCartDisplay();
}

cart_btn.onclick = () => {
  cart_modal.classList.toggle("open-menu");
};

close_btn.onclick = () => {
  cart_modal.classList.remove("open-menu");
};
