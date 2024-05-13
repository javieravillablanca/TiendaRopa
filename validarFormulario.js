
const nombre = document.getElementById('name');
const lastName = document.getElementById('lastName');
const number = document.getElementById('number');
const email = document.getElementById('email');
const errorNombre = document.getElementById('errorNombre'); 
const errorApellido = document.getElementById('errorApellido'); 
const errorNumero = document.getElementById('errorNumero'); 
const errorEmail = document.getElementById('errorEmail'); 
  
  
  
  
function validarFormulario() {
    
    let mensajesError = [];
  
      
  
      if (nombre.value === null || nombre.value === '') {
          mensajesError.push('¡Ingrese su nombre!');
          errorNombre.textContent = '¡Ingrese su nombre!';
      } else if (/[0-9]/.test(nombre.value)) {
          mensajesError.push('Debe ingresar solo letras');
          errorNombre.textContent = 'Debe ingresar solo letras';
  
      } else {
      errorNombre.textContent = ''; 
      }
      
       if (lastName.value === null || lastName.value === '') {
         mensajesError.push('¡Ingrese su apellido!');
         errorApellido.textContent = '¡Ingrese su apellido!';
      } else if (/[0-9]/.test(lastName.value)) {
         mensajesError.push('Debe ingresar solo letras');
         errorApellido.textContent = 'Debe ingresar solo letras';
      } else {
         errorApellido.textContent = ''; 
      }
  
        if(number.value === null || number.value === ''){
         mensajesError.push('¡Ingrese su numero!');
         errorNumero.textContent = '¡Ingrese su numero!';
      }else if (/[A-Z a-z]/.test(number.value))  {
         mensajesError.push('Debe ingresar solo numeros');
         errorNumero.textContent = 'Debe ingresar solo numeros';
  
      }else{
          errorNumero.textContent='';
      }
  
    
       if (email.value === null || email.value === '') {
         mensajesError.push('¡Ingrese su email!');
         errorEmail.textContent = '¡Ingrese su email!';
      } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
         mensajesError.push('El email no tiene un formato valido');
         errorEmail.textContent = 'El email no tiene un formato valido';
      } else {
         errorEmail.textContent = ''; 
      }
  
  
  
      
}