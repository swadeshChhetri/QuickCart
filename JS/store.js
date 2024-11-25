

// let bagItems;

// const initApp = async () => {
//   try {
//     const headerResponse = await fetch("/components/header.html");
//     if (!headerResponse.ok) throw new Error("Failed to load header");
//     const headerData = await headerResponse.text();
//     document.getElementById("header").innerHTML = headerData;

//     const footerResponse = await fetch("/components/footer.html");
//     if (!footerResponse.ok) throw new Error("Failed to load footer");
//     const footerData = await footerResponse.text();
//     document.getElementById("footer").innerHTML = footerData;
//   } catch (error) {
//     console.error("Error loading components:", error);
//   }
// };
// // Ensure initialization runs after header and footer load
// (async () => {
//   // search();
//   // addCartToHTML();
//   displayItemsOnHomePage();
//   // addDataToHTML();
//   initApp();
//   onLoad();
//   displayBagIcon();
//   // addToCart();
// })();

// // Function to load header and footer asynchronously


// // Load initial data and display items
// function onLoad() {
//   let bagItemsStr = localStorage.getItem('bagItems');
//   bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
//   displayBagIcon();

// }

// // Display items on the homepage
// function displayItemsOnHomePage() {
//   let itemsContainerElement = document.querySelector('.pro-container');
//   if (!itemsContainerElement) {
//     return;
//   }
//   let innerHTML = "";
//   items.forEach((item) => {
//     innerHTML += `   
//       <div class='pro'>
//         <img src="${item.image}" alt="${item.productName}" />
//         <div>4.6 ⭐ | 1308</div>
//         <div class="des">
//           <span>${item.brand}</span>
//           <h5>${item.productName}</h5>
//         </div>
//         <div class="price">
//           <span><strong>${item.original_percentage}%OFF</strong></span>
//           <span>${item.original_price}</span>
//           <span>₹${item.current_price}</span>
//         </div>
//         <div style="text-align:center">
//           <button class="addCart" onclick="addToBag(${item.id})">Add to Cart</button>
//         </div>
//       </div>`;
//   });
//   itemsContainerElement.innerHTML = innerHTML;
// }

// // Handle "Add to Cart" button click
// function addToBag(itemId) {
//   bagItems.push(itemId);
//   localStorage.setItem('bagItems', JSON.stringify(bagItems));
//   displayBagIcon();
//   // console.log(bagItems);
// }

// // Display the cart icon with item count
// function displayBagIcon() {
//   let bagItemCountElement = document.querySelector('.me');
//   if (!bagItemCountElement) {
//     console.error("Cart icon element not found.");
//     return;
//   }
//   if (bagItems.length > 0) {
//     bagItemCountElement.style.visibility = 'visible';
//     bagItemCountElement.innerText = bagItems.length;
//   } else {
//     bagItemCountElement.style.visibility = 'hidden';
//   }
// }








/*<section id="cart-add" class="section-p1">
<div id="coupon">
  <h3>Apply Coupon</h3>
  <div>
    <input type="text" placeholder="Enter Your Coupon" />
    <button class="normal">Apply</button>
  </div>
</div>
<div id="subtotal">
  <h3>Cart Totals</h3>
  <table>
    <tr>
      <td>Cart Subtotal</td>
      <td>$ 335</td>
    </tr>
    <tr>
      <td>Shipping</td>
      <td>Free</td>
    </tr>
    <tr>
      <td><strong>Total</strong>Shipping</td>
      <td><strong>$ 335</strong></td>
    </tr>
  </table>
</div>
</section> 

<footer class="section-p1">
<footer id="footer"></footer>*/





// import { featuredBrands } from "./data/data.js";

// let listProductHTML = document.querySelector(".pro-container");
// let listCartHTML = document.querySelector(".shoo"); // This element should exist only on cart.html
// // console.log("Cart element:", listCartHTML); // Debugging to confirm it's detected

// let cart = [];

// const initApp = async () => {
//   try {
//     const headerResponse = await fetch("../components/header.html");
//     if (!headerResponse.ok) throw new Error("Failed to load header");
//     const headerData = await headerResponse.text();
//     document.getElementById("header").innerHTML = headerData;

// initApp();







// let items = document.querySelector(".items");
// let items2 = document.querySelector(".items2");
// let items3 = document.querySelector(".items3");





//-------------------------------------------------------------------------
// const imgs = document.querySelectorAll('.img-select a');

// const imgBtns = [...imgs];

// let imgId = 1;

// imgBtns.forEach((imgItem) => {
//     imgItem.addEventListener('click', (event) => {
//         event.preventDefault();
//         imgId = imgItem.dataset.id;
//         slideImage();
//     });
// });

// function slideImage(){
//     const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

//     document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
// }

// window.addEventListener('resize', slideImage);

//------------------------------------------------------------------------------


  // items.innerHTML += ProductHTML;
          //   if (data.categories === "clothes") {
          //     items.innerHTML += ProductHTML;
          //   } else if (data.categories === "beauty") {
          //     items2.innerHTML += ProductHTML;
          //   } else if (data.categories === "gadgets") {
          //     items3.innerHTML += ProductHTML;
          //   }



// const search = () => {
//   document.getElementById("search").addEventListener("click", () => {
//     let searchInput = document
//       .getElementById("search-input")
//       .value.toLowerCase();
//     const filteredProducts = featuredBrands.filter((item) =>
//       item.productName.toLowerCase().includes(searchInput)
//     );
//     localStorage.setItem("filteredProducts", JSON.stringify(filteredProducts));
//     window.location.href = "/components/searchResults.html";
//   });
// };

// (async () => {
//   await initApp();
//   search();
//   addDataToHTML();
//   addCartToHTML();
//   addToCart();
//   CLICK();

//  })();


// const footerResponse = await fetch("/components/footer.html");
//     if (!footerResponse.ok) throw new Error("Failed to load footer");
//     const footerData = await footerResponse.text();
//     document.getElementById("footer").innerHTML = footerData;

//     search();

