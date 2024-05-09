const btnCart = document.querySelector('.container-icon');

const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');
// Lista de todos los contenedores de productos
const productsList = document.querySelector('#container')
// Variable de arreglos de Productos
let allProducts = [];



productsList.addEventListener('click', e => {
	if(e.target.classList.contains('btn-add-cart')) {
    const product = e.target.parentElement

    console.log(product.querySelector('h3'))
  }

});


