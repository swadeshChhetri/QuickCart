// const bar = document.getElementById('bar');
// const close = document.getElementById('close');
// const nav = document.getElementById('navbar');

// if(bar){
//   bar.addEventListener('click',() => { 
//     nav.classList.add('active');
//    })
// }

// if(close){
//   close.addEventListener('click', () => { 
//     nav.classList.remove('active');
//    })
// }

import {featuredBrands} from './data.js';

let items = document.querySelector('.items');
let items2 = document.querySelector('.items2');
let items3 = document.querySelector('.items3');
// let HI = document.getElementById('HI');

// HI.addEventListener('click',function(){
//   alert("Button is clicked: it's mean JS is working in Shop.html");
// })
featuredBrands.forEach(data => {
  const ProductHTML = `
        <div class="pro">
          <img src="${data.image}" alt="${data.productName}" />
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