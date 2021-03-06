import {isEmpty, wasDecremented, wasIncremented, getTotal} from './products.js';

const body = document.querySelector('body');
const section = document.querySelector('.cards');
const products = [
  {
    id: 1,
    name: 'Pepsi',
    price: 1.50,
    quantity:0
  },
  {
    id: 2,
    name: 'Coca Cola',
    price: 1.00,
    quantity:0
  }
];


class Card {
  constructor(data){
    this.data = data;
  }
  generate(){
      return `
<div class="card" id="${this.data.id}">
  <h2 class="title">${this.data.name}</h2>
  <div class="price">$${this.data.price}</div>
  <label for="">Cantidad</label>
  <div class="quantity">${this.data.quantity}</div>
  <div class="button plus">Agregar</div>
  <div class="button minus">Disminuir</div>
</div>`;
  }
}

products.forEach(item => {
  let card = document.createElement('div');
  card.innerHTML = new Card(item).generate();
  section.append(card);
});


function addProduct(e){
  if(e.target.classList.contains('plus')) {      
    let id = parseInt(e.target.parentNode.id);
    if(wasIncremented(products, id)) {
      let parent = e.target.parentNode;
      let price = parent.querySelector('.quantity');
      products.forEach(item => {
        if(item.id === id){
          price.innerHTML = item.quantity;
        }
      });     
    }    
  }
}
      
function decrementProductQuantity(e){
  if(e.target.classList.contains('minus')) {      
    let id = parseInt(e.target.parentNode.id);
    if(wasDecremented(products, id)) {
      let parent = e.target.parentNode;
      let price = parent.querySelector('.quantity');
      products.forEach(item => {
        if(item.id === id) {
          price.innerHTML = item.quantity
        }
      });       
    }    
  }
}

body.addEventListener('click', (e) => {
  addProduct(e);
  decrementProductQuantity(e);
});
