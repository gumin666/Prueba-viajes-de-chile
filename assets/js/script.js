//notificacion "mensaje enviado"
document.getElementById("formulario").addEventListener("submit", function(e){
e.preventDefault();
    alert("Mensaje enviado correctamente");
});


var elementos = document.querySelectorAll('[data-bs-toggle="tooltip"]');

elementos.forEach(function(item){
    new bootstrap.Tooltip(item);
});


//croll
$(document).ready(function () {
  $('a[href^="#"]').on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 70
        },
        800
      );
    }
  });
});
