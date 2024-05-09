import {ropa}from './ropa.js'

const obtenerUrlIndicador=(indicador)=>`https://mindicador.cl/api/${indicador}`
const contenedor=document.querySelector('#container') 



document.addEventListener('DOMContentLoaded', e=>{

    consultarApi('dolar');

})

function cargarProductos(valorCambio){


    ropa.forEach(ropa => {
        const cardDiv= document.createElement('div')
        const cardDivImage= document.createElement('div')
        const cardDivContent= document.createElement('div')
        const cardDivInput= document.createElement('div')
        
        cardDiv.classList.add('card')
        cardDivImage.classList.add('card-image')
        cardDivContent.classList.add('card-content')
        cardDivInput.classList.add('input-div')

        cardDivImage.innerHTML=`<img src="${ropa.urlImage}" alt="${ropa.altImg}" >`
        cardDivContent.innerHTML=`<h2>${ropa.nombreRopa}</h3>
        
        <p>&#36;${parseInt(ropa.precioDolar*valorCambio)}</p>`
        cardDivInput.innerHTML=` <button class="btn-add-cart">Añadir al carrito</button>`
        
        cardDiv.append(cardDivImage)
        cardDiv.append(cardDivContent)
        cardDiv.append(cardDivInput)
        contenedor.appendChild(cardDiv)


        
        


        
    });

}


function consultarApi(indicador){
    const urlIndicador=obtenerUrlIndicador(indicador)
    //toggleSpinner()
    console.log(urlIndicador)
    fetch(urlIndicador).then( resp => resp.json()).then(data=>{
        console.log(data)
        //toggleSpinner()
        const valorDolar= data.serie[0].valor
        cargarProductos(valorDolar)
    })


}




const btnCart = document.querySelector('.container-icon');

const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');
// Lista de todos los contenedores de productos
const productsList = document.querySelector('#container')
// Variable de arreglos de Productos
let allProducts = [];

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart'); 
});




productsList.addEventListener('click', e => {
	if(e.target.classList.contains('btn-add-cart')) {
        const product = e.target.parentElement;

        const infoProduct = {
                quantity: 1,
                title: product.querySelector('h2').textContent,
                price: product.querySelector('p').textContent,
            };
    
            const exits = allProducts.some(
                product => product.title === infoProduct.title
            );
    
            if (exits) {
                const products = allProducts.map(product => {
                    if (product.title === infoProduct.title) {
                        product.quantity++;
                        return product;
                    } else {
                        return product;
                    }
                });
                allProducts = [...products];
            } else {
                allProducts = [...allProducts, infoProduct];
            }
    
            showHTML();
        }
    });
    
    rowProduct.addEventListener('click', e => {
        if (e.target.classList.contains('icon-close')) {
            const product = e.target.parentElement;
            const title = product.querySelector('p').textContent;
    
            allProducts = allProducts.filter(
                product => product.title !== title
            );
    
            console.log(allProducts);
    
            showHTML();
        }
    });
    
    // Funcion para mostrar  HTML
    const showHTML = () => {
    
        if (!allProducts.length) {
            cartEmpty.classList.remove('hidden');
            rowProduct.classList.add('hidden');
            cartTotal.classList.add('hidden');
        } else {
            cartEmpty.classList.add('hidden');
            rowProduct.classList.remove('hidden');
            cartTotal.classList.remove('hidden');
        }
    // Limpiar HTML
    rowProduct.innerHTML = '';
    
    let total = 0;
    let totalOfProducts = 0;
    
    allProducts.forEach(product => {
      const containerProduct = document.createElement('div');
      containerProduct.classList.add('cart-product');
    
      containerProduct.innerHTML =`
      <div class="info-cart-product">
          <span class="cantidad-producto-carrito">${product.quantity}</span>
          <p class="titulo-producto-carrito">${product.title}</p>
          <span class="precio-producto-carrito">${product.price}</span>
      </div>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="icon-close"
      >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
          />
      </svg>
    `;
    
    rowProduct.append(containerProduct);
    
    total =
    total = total + parseInt(product.quantity * product.price.slice(1).replaceAll('.',''));
    totalOfProducts = totalOfProducts + product.quantity;
    });
    
    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;
    };