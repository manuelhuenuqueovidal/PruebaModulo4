//Importar la clase Animal.
import Animal from "./ClaseAnimal.js";
console.log(Animal);

//Función asíncrona para obtener datos de animales.
const getDatos = async () => {
    try {
        // Realiza la petición a la URL.
        const response = await fetch("../../animales.json");
        console.log(response);

        // Convierte la respuesta en formato JSON.
        const datos = await response.json();
        console.log(datos);

        // Condición interna.
        if (datos !== null) {
            return datos;
        }
    } catch (error) {
        console.log(error.message);
    }
};
getDatos().then(datos => console.log(datos));


//Constante para buscaar imágenes.
const imagenesAnimales = {
    Leon: "assets/imgs/Leon.png",
    Lobo: "assets/imgs/Lobo.jpg",
    Oso: "assets/imgs/Oso.jpg",
    Serpiente: "assets/imgs/Serpiente.jpg",
    Aguila: "assets/imgs/Aguila.png"
};


$(document).ready(function() {
    
    //Evento clic.
    $("#btnRegistrar").click(function(event) {
        
        //Evento para formulario vacío.
        event.preventDefault(); 
        let formulario = $('#comentarios').val();       
        console.log(formulario);
        let filtro = /\S/;

        //Condición para formulario vacío.
        if (!filtro.test(formulario)) {
            alert("Ingresa un comentario, por favor.");
            return;
        }

        //Obtener el valor del animal seleccionado.
        let animalSeleccionado = $("#animal").val();
        
        //Obtener el valor de los años seleccionados
        let edadSeleccionada = $("#edad").val();
  
        //Obtener el comentario ingresado.
        let comentario = $("#comentarios").val();
                                
        //Obtener la ruta de la imagen del animal seleccionado
        let imagen = imagenesAnimales[animalSeleccionado];
  
        //Guardar comentarios en cada animal.
        let nuevoAnimal = new Animal(animalSeleccionado, edadSeleccionada, imagen, comentario);
        console.log(nuevoAnimal);

        //Mostrar la imagen del animal en id preview.
        $("#preview").html(`<img src="${imagen}" alt="${animalSeleccionado}" class="img-fluid">`);
     
        //Crear un nuevo elemento HTML para la fila de la tabla.
        let nuevoElemento = `<tr><td><img src="${imagen}" alt="${animalSeleccionado}" class="img-thumbnail" style="width: 100px; height: 100px; margin: 5px"></td><td>${edadSeleccionada}</td></tr>`;
        
        //Agregar nueva fila a la tabla.
        $("#Animales").append(nuevoElemento);
                               
        //Limpiar los campos después de agregar la fila.
        $("#animal").val("");
        $("#edad").val("");
        $("#comentarios").val("");

        
    });
});



  




