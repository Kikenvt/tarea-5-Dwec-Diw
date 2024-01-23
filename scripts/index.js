//Definimos las variables para el formulario
const formulario = document.querySelector('#formulario')
const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const email = document.querySelector('#email')
const telefono = document.querySelector('#telefono')
const mensaje = document.querySelector('#mensaje')
const enviar = document.querySelector('#enviar')
const errores = document.querySelector('#errores')



//Declaramos el array para los mensajes de error
let mensajesErrores = []

const validarFormulario = (e) =>{
    e.preventDefault()
    mensajesErrores = []
    //Revisamos que el nombre no puede estar vacío, no empezar por una letra mayúscula o contener número
    nombre.value.trim().length === 0 && mensajesErrores.push('El nombre no puede ser un campo vacio')
    !/^[A-Z][a-z]{1,40}$/.test(nombre.value.trim()) && mensajesErrores.push('Un nombre propio comienza siempre por una letra mayúscula y no contiene números')
    
    apellido.value.trim().length === 0 && mensajesErrores.push('El apellido no puede ser un campo vacio')
    !/^[A-Z][a-z]{1,40}$/.test(nombre.value.trim()) && mensajesErrores.push('Un apellido comienza siempre por una letra mayúscula y no contiene números')
    
    //Revisamos que el email tenga estructura correcta
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value.trim()) && mensajesErrores.push('Introduce una dirección de correo válida')

    //Revisamos que el teléfono tenga estructura correcta
    !/^[679]\d{8}$/.test(telefono.value.trim()) && mensajesErrores.push('El telefono no es valido');
    // Revisamos que el mensaje no pueda ser vacio o menor a 10 carácteres
    mensaje.value.trim().length < 10 && mensajesErrores.push('El mensaje es demasiado corto')

    //Si no hay errores en el array se envia el formulario
    if(mensajesErrores.length === 0 && confirm('¿Estas seguro de enviar el formulario?')){
        formulario.submit()
        //Si hay mensajes de error se muestan el la lista
    }else if(mensajesErrores.length > 0){
        errores.textContent = ""
        
        mensajesErrores.forEach(function (mensaje){
            const li = document.createElement('li')
            li.textContent = mensaje
            errores.appendChild(li)
        })
    }
}

formulario.addEventListener('submit', validarFormulario)

// NAVBAR

const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

document.querySelector('.hamburger-menu').addEventListener('click', function() {
    this.classList.toggle('open');
});

window.addEventListener('scroll', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-list');
    if (hamburgerMenu.classList.contains('open')) {
        hamburgerMenu.classList.remove('open');
        navMenu.classList.remove('active');
    }
});