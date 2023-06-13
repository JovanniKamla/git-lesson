// --- FUNCION PARA MOSTRAR/OCULTAR UN ARCHIVO TRAMITE BOTON ---

function myFunction() {
    // Creo variable que guardará la información de una identificación (ID) correspondiente a un archivo
    let elementId = document.getElementById("nombre de mi id del archivo que deseo utilizar para el display");
    // Si (if) el elemento (elementID) con su próprio estilo (style) y su visualización (display) es equivalente (===) a nada ("none")
    if (elementId.style.display === "none") {
        // El elemento (elementId.style.display) es igual (=) al bloque ("block"). Lo que significa, que se mostrará en el recuadro/bloque elegido
      elementId.style.display = "block";
    // Si no, el elemento no se mostrará
    } else {
      elementId.style.display = "none";
    }
  }

//---  ---   

function ejecutarMiBusqueda() {
    let onClick = // Necesito pasarle a esta variable la cadena de texto que se mete dentro del recuadro de búsqueda y después redireccionar todo a un motor de búsqueda
}