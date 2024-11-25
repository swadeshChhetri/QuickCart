
const CONVENIENCE_FEES = 99;
let bagItemObjects;

function onLoad() {
    loadBagItemObjects();
    displayBagItems();
}

    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    



function loadBagItemObjects() {
    bagItemObjects = bagItems.map(itemId => {
        return items.find(item => item.id === itemId);
    });
}

function displayBagItems() {
    const containerElement = document.querySelector('.bag-items-container');
    console.log(containerElement);
    let innerHTML = '';

    bagItemObjects.forEach(item => {
        innerHTML += generateItemHTML(item);
    });

    containerElement.innerHTML = innerHTML;
}


function generateItemHTML(item) {
    return `
        <tr>
            <td><img src="${item.image}" alt="" /></td>
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
    displayBagIcon(); 
    displayBagItems();
}