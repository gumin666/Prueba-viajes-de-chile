
document.getElementById("formulario").addEventListener("submit", function(e){

    e.preventDefault();

    alert("Mensaje enviado correctamente");

});





var elementos = document.querySelectorAll('[data-bs-toggle="tooltip"]');

elementos.forEach(function(item){

    new bootstrap.Tooltip(item);

});
