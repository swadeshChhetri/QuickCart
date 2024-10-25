import {featuredBrands} from './data.js';

let items = document.querySelector('.items');
let items2 = document.querySelector('.items2');
let items3 = document.querySelector('.items3');
// let HI = document.getElementById('HI');

// HI.addEventListener('click',function(){
//   alert("Button is clicked: it's mean JS is working in Shop.html");
// })
fetch('header.html')
.then(response => response.text())
.then(data => document.getElementById('header').innerHTML = data);

fetch('footer.html')
.then(response => response.text())
.then(data => document.getElementById('footer').innerHTML = data);

featuredBrands.forEach(data => {
  const ProductHTML = `
        <div class="pro">
      
          <img src="${data.image}" alt="${data.productName}" />
          <div style="text-align : left">
          4.6 ⭐ | 1308
        </div>
          <div class="des">
            <span>${data.brand}</span>
            <h5>${data.productName}</h5>
            <h4>₹${data.price}</h4>
          </div>
        </div>
      </div>
    
  `;
  if(data.categories === 'clothes'){
  items.innerHTML+= ProductHTML;
  }else if( data.categories === 'beauty'){
   items2.innerHTML+= ProductHTML;
  }else if( data.categories === 'gadgets'){
    items3.innerHTML += ProductHTML;
  }
});

{/* <div id="poet" className="book-container">
<img className="book-image" src={book.image} alt="book image" />

<div className="company-name">{book.book}</div>
<div className="book-name">{book.author}</div>
<div className="price">
  <span className="current-price">Rs {book.current_price}</span>
  <span className="original-price">Rs {book.original_price}</span>
  <span className="discount">({book.discount_percentage}% OFF)</span>
</div> */}