const btnSaludar = document.getElementById('btn-saludar');
let mensajeMostrado = false;

btnSaludar.addEventListener('click', function(){
    console.log('Boton presionado');
    if(!mensajeMostrado == true){
        
        const seccionContacto = document.getElementById('Contacto');
        
        const mensaje = document.createElement('p');
        mensaje.textContent = 'Gracias por tu visita';
        mensaje.style.color= '#4c4c50';
        mensaje.style.fontWeight = 'bold';

        seccionContacto.appendChild(mensaje);
        mensajeMostrado=true;
        btnSaludar.textContent = 'Mensaje Enviado';
        btnSaludar.disabled = true;
        btnSaludar.style.backgroundColor = '#bdc3c7';

    }

})