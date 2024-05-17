
const nombre = document.getElementById('name');
const lastName = document.getElementById('lastName');
const number = document.getElementById('number');
const email = document.getElementById('email');
const errorNombre = document.getElementById('errorNombre'); 
const errorApellido = document.getElementById('errorApellido'); 
const errorNumero = document.getElementById('errorNumero'); 
const errorEmail = document.getElementById('errorEmail'); 

nombre.addEventListener('input', validarFormularioNombre);
lastName.addEventListener('input', validarFormularioApellido);
number.addEventListener('input', validarFormularioNumero);
email.addEventListener('input', validarFormularioEmail);


function validarFormularioNombre() {
    let mensajesError = [];
    
    if (nombre.value === null || nombre.value === '') {
        mensajesError.push(' ¡Ingrese su nombre!. ');

    } else if (/\d/.test(nombre.value)) {
        nombre.value = nombre.value.replace(/\d/g, '');
        mensajesError.push(' Ingresar solo letras, por favor. ');

    } else if (nombre.value.length < 3) {
        mensajesError.push(' Debe contener al menos 3 letras. ');
    } else if (nombre.value.length >15) {
        mensajesError.push(' Cantidad excedida. ');
    }

    if (mensajesError.length > 0) {
        errorNombre.textContent = mensajesError.join(' ');
    } else {
        errorNombre.textContent = '';
    }
}

function validarFormularioApellido() {
    let mensajesError = [];
    
    if (lastName.value === null || lastName.value === '') {
        mensajesError.push(' ¡Ingrese su Apellido!.');
    } else if (/\d/.test(lastName.value)) {
        lastName.value = lastName.value.replace(/\d/g, '');
        mensajesError.push(' Ingresar solo letras, por favor.');
    } else if (lastName.value.length < 3) {
        mensajesError.push(' Debe contener al menos 3 letras.');
    } else if (lastName.value.length >15) {
        mensajesError.push(' Cantidad excedida. ');
    } 
    if (mensajesError.length > 0) {
        errorApellido.textContent = mensajesError.join(' ');
    } else {
        errorApellido.textContent = '';
    }
}



function validarFormularioNumero() {
    let mensajesError = [];

    

        if(number.value === null || number.value === ''){
         mensajesError.push(' ¡Ingrese su numero!.');
         errorNumero.textContent = ' ¡Ingrese su numero!.';  
        }else if (/[A-Z a-z]/.test(number.value))  {
        number.value = number.value.replace(/\D/g, '');
         mensajesError.push(' Ingresar solo numeros, por favor.');
         errorNumero.textContent = ' Ingresar solo numeros, por favor.';
        } else if (!/^\d{5,}$/.test(number.value)) {
            
            mensajesError.push(' Debe ingresar al menos 5 numeros.');
            errorNumero.textContent = ' Debe ingresar al menos 5 numeros.';
        }
        if (mensajesError.length > 0) {
            errorNumero.textContent = mensajesError.join(' ');
        } else {
            errorNumero.textContent = '';
        }
  
}   


function validarFormularioEmail() {
    let mensajesError = [];

        if (email.value === null || email.value === '') {
         mensajesError.push(' ¡Ingrese su email!.');
         errorEmail.textContent = '¡Ingrese su email!.';
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
         mensajesError.push(' El email no tiene un formato valido');
         errorEmail.textContent = ' El email no tiene un formato valido.';
        


        } else {
         errorEmail.textContent = ''; 
        }
  
} 
  
function validarFormulario() {
    validarFormularioApellido();
    validarFormularioNombre();
    validarFormularioEmail();
    validarFormularioNumero();
    
    
    
   
}
