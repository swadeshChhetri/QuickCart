const CONVENIENCE_FEES = 99;
let bagItemObjects = [];

async function fetchItems() {
    try {
    } catch(error){
      console.error("Error fetching items:", error);
    }
}

function initializeBagItems(){
let bagItemsStr = localStorage.getItem('bagItems');
bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
console.log("Bag Items from localstorage:", bagItems);
}

function onLoad() {
    initializeBagItems();
    fetchItems().then (() => { 
    loadBagItemObjects();
    displayBagItems();
  })
}

onLoad();



function loadBagItemObjects() {
    if(!items || items.length === 0){
        console.warn("items array is empty or undefined");
        bagItemObjects = [];
        return;
    }

    bagItemObjects = bagItems.map(itemId => {
        return items.find(item => item.id === itemId);
    });
    console.log("Bag Item Objects", bagItemObjects);
}

function displayBagItems() {
    const containerElement = document.querySelector('.bag-items-container');
    let innerHTML = '';
    
    if(bagItemObjects.length === 0 ){
        innerHTML = '<tr><td colspan="5">Your cart is empty.</td></tr>';
    } else {
        bagItemObjects.forEach(item => {
            if(item) {
                innerHTML += generateItemHTML(item);
            }
        });
      }


    containerElement.innerHTML = innerHTML;
}

function generateItemHTML(item) {
    console.log(item.image);
    return `<tr>
            <td><img src="${item.image}" alt="${item.productName}" /></td>
            <td>${item.productName}</td>
            <td>₹${item.current_price}</td>
            <td><input type="number" value="1" /></td>
            <td>
                <div class="remove-from-cart" onclick="removeFromBag(${item.id})">
                    <i class="far fa-times-circle"></i>
                </div>
            </td>
        </tr>
    `;
}



function removeFromBag(itemId) {
    bagItems = bagItems.filter(bagItemId => bagItemId !== itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    loadBagItemObjects();
    displayBagItems();
    displayBagIcon(); 
}

