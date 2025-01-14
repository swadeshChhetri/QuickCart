let bagItems;

const initApp = async () => {
  try {
    const headerResponse = await fetch("components/header.html");
    if (!headerResponse.ok) throw new Error("Failed to load header");
    const headerData = await headerResponse.text();
    document.getElementById("header").innerHTML = headerData;

    const footerResponse = await fetch("components/footer.html");
    if (!footerResponse.ok) throw new Error("Failed to load footer");
    const footerData = await footerResponse.text();
    document.getElementById("footer").innerHTML = footerData;

    let bagItemsStr = localStorage.getItem("bagItems");
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  } catch (error) {
    console.error("Error loading components:", error);
  }
};

(async () => {
  await initApp();
  search();
  shake();
  displayItemsOnHomePage();
  displayBagIcon();
  mobileMenu();
  popupContent();
})();

function mobileMenu() {
  const openButton = document.getElementById("open-sidebar-button");
  const navbar = document.getElementById("navbar");
  const closed = document.getElementById("close-sidebar-button");
  
  if (openButton && navbar && closed) {
    openButton.addEventListener("click", () => {
      navbar.classList.add("show");
    });

    closed.addEventListener("click", () => {
      navbar.classList.remove("show");
    });
  } else {
    console.warn("Sidebar menu elements are missing on this page.");
  }
}

function search() {
  document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value.toLowerCase();
    const filteredProducts = items.filter((item) =>
      item.productName.toLowerCase().includes(searchInput)
    );
    localStorage.setItem("filteredProducts", JSON.stringify(filteredProducts));
    window.location.href = "components/searchResults.html";
  });
};

function shake(){
  const button = document.getElementById("shakeButton");

  const triggerShake = () => {
    button.classList.add("shake");
    setTimeout(() => {
      button.classList.remove("shake");
    }, 500); // Match the duration of the animation
  };

  // Trigger the shake animation every 3 seconds
  setInterval(triggerShake, 3000);
};


function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector(".pro-container");
  if (!itemsContainerElement) {
    return;
  }
  let innerHTML = "";
  items.forEach((item) => {
    innerHTML += `   
      <div class='pro'>
      <div data-id="${item.id}" class="imageContainer">
        <img  src="${item.image}" alt="${item.productName}" />
      </div>
        <div>${item.rating} ⭐ | ${item.reviews}</div>
        <div class="des">
          <span>${item.brand}</span>
          <h5>${item.productName}</h5>
        </div>
        <div class="price">
          <span><strong>${item.original_percentage}%OFF</strong></span>
          <span>${item.original_price}</span>
          <span>₹${item.current_price}</span>
        </div>
        <div style="text-align:center">
          <button class="addCart" onclick="addToBag(${item.id})">Add to Cart</button>
        </div>
      </div>`;
  });
  itemsContainerElement.innerHTML = innerHTML;
};

function popupContent() {
  const productPopup = document.getElementById("product-popup");
  const productItemsContainer = document.querySelector(".pro-container"); // Parent container

  if (!productItemsContainer) return;

  productItemsContainer.addEventListener("click", (event) => {
    const proitem = event.target.closest(".imageContainer"); // Find closest image container

    if (proitem) {
      const productId = proitem.getAttribute("data-id");
      const product = items.find((p) => p.id == productId);

      if (product) {
        const store = `<div class="popup-content">
            <span style="float: right;" id="close-popup" class="close-btn">&times;</span>
            <div style="width: 100%; padding: 1rem; margin-left: 6rem;" id="product-details">
              <img style="border-radius: 8px;" width="70%" id="popup-image" src="${product.image}" alt="Product Image" />
              <h3 id="popup-name">${product.productName}</h3>
              <p id="popup-description">${product.rating}</p>
              <p id="popup-price">₹${product.current_price}</p>
              <div class="buttons">
                <button class="addCart">Buy Now</button>
                <button class="addCart" onclick="addToBag(${product.id})">Add to Cart</button>
              </div>
            </div>
          </div>`;

        productPopup.innerHTML = store;
        productPopup.classList.remove("hidden");

        const closePopup = document.getElementById("close-popup");
        closePopup.addEventListener("click", () => {
          productPopup.classList.add("hidden");
        });
      }
    }
  });
};


function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  if (bagItems) {
    let bagItemCountElement = document.querySelector(".cart_count");
    if (!bagItemCountElement) {
      console.error("Cart icon element not found.");
      return;
    }
    if (bagItems.length > 0) {
      bagItemCountElement.style.visibility = "visible";
      bagItemCountElement.innerText = bagItems.length;
    } else {
      bagItemCountElement.style.visibility = "hidden";
    }
  }
};

function displayBagIcon() {
  const bagCountElement = document.querySelector('.cart_count');
  const itemCount = bagItems.length;
  bagCountElement.textContent = itemCount > 0 ? itemCount : '';
}
