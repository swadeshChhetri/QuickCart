let bagItems;

const initApp = async () => {
  try {
    const headerResponse = await fetch(
      "components/header.html"
    );
    if (!headerResponse.ok) throw new Error("Failed to load header");
    const headerData = await headerResponse.text();
    document.getElementById("header").innerHTML = headerData;

    const footerResponse = await fetch(
      "components/footer.html"
    );
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
  onLoad();
  dropdown();
  search();
  displayItemsOnHomePage();
  displayBagIcon();
})();

function onLoad() {}

function dropdown() {
  const dropdownBtns = document.querySelectorAll(".dropdownBtn");
  const dropdownContents = document.querySelectorAll(".dropdownContent");
  dropdownBtns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      dropdownContents[index].classList.toggle("show");
    });
  });
}

function search() {
  document.getElementById("search").addEventListener("click", () => {
    let searchInput = document
      .getElementById("search-input")
      .value.toLowerCase();
    const filteredProducts = items.filter((item) =>
      item.productName.toLowerCase().includes(searchInput)
    );
    localStorage.setItem("filteredProducts", JSON.stringify(filteredProducts));
    window.location.href =
      "components/searchResults.html";
  });
}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector(".pro-container");
  if (!itemsContainerElement) {
    return;
  }
  let innerHTML = "";
  // let product = document.createElement("div");
 items.forEach((item) => {
    innerHTML += `   
      <div class='pro'>
        <img src="${item.image}" alt="${item.productName}" />
        <div>${item.rating} ⭐ | ${item.reviews}</div>
        <div class="des">
          <span>${item.brand}</span>
          <h5><a href="/pages/product-details.html">${item.productName}</a></h5>
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
}

function addToBag(itemId) {
  // ... existing code for adding item to bagItems and updating local storage
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
  }}
