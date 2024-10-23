'use strict';

//Adakitten 2.1 intro a la programación

/*
-crear repositorio 
-crear archivo main.js y añadir 'use strict'
-agregamos al listado la clase js-list y creamos variable,
copiamos el contenido con comillas francesas*/





const listOfCats = document.querySelector('.js-list');
const bottonDropDown = document.querySelector(".js-btn-drop-down");
const formCats = document.querySelector('.js-new-form');
const bottonCancel = document.querySelector(".js-btn-cancel");
const  bottonSearch = document.querySelector(".js_button-search");
const inputDescription = document.querySelector(".js_in_search_desc");



//ejercicio objetos 

const kittenData_1 = {
  image: "https://dev.adalab.es/gato-siames.webp",
  name: "Anastacio",
  desc: "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.", 
  race: "Siamés",
}

const kittenData_2 = {
  image: "https://dev.adalab.es/sphynx-gato.webp",
  name: "Fiona",
  desc: "Produce fascinación y curiosidad. Exótico, raro, bello, extraño...hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.",
  race: "Sphynx",

}

const kittenData_3 = {
  image: "https://dev.adalab.es/sphynx-gato.webp",
  name: "Cielo", 
  desc: "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.",
  race: "Maine Coon",

}

/*
Crear una lista con todos los gatitos (array)
*/
const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];


 






//  list.innerHTML = kittenOne + kittenTwo + kittenThree;


bottonDropDown.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("click");

})

// quitamos clase "collapsed" al formulario

//formCats.classList.remove('collapsed');


/*ocultar la seccion del formulario de añadir nuevo gatito 
cuando el usuario haga click en cancelar 
-seleccionar  el elemento de añadir
-cuando la usuaria haga click en cancelar oculto  el elemento de añadir

*/

bottonDropDown.addEventListener("click", function() {
  bottonCancel.addEventListener("click")

});

//Cuando la usuaria hace click en Buscar, tienes que recoger el valor del input de la descripción
bottonSearch.addEventListener("click", (ev) => {
  ev.preventDefault();
  const descrSearchText = input_search_desc.value; // Recoge el valor del input de la descripción en una variable
});





















// // añadir la clase js-list 



// /* Agregar el código del li desde HTMl 
// Repetir este proceso por cada gatito */

    



// //Pasos:
// //cuando la usuaria haga click en el boton desplegar menú
// //tenemos que darle un evento al LI para que cuando la usuaria haga click se esconda el formulario (quitar collapsed)

// // primer ejercicio pair
// const list =  document.querySelector('.js-list');

// // añado el codigo de li dentro de una variable 




// //EJERCICIO 2

// /* cuando la usuaria haga click en + aparece el menú desplegable
//     seleccionar el elemento html (botón y los inputs)
//     cuando la usuaria haga click en el botón, mostrar el formulario 

// */




// })


// /* Cuando la usuaria haga click en "buscar", tiene que recoger el valor del input*/
//  //NOS HEMOS QUEDADO POR AQUÍ LUNES 21/10
// const searchButton = document.querySelector (".js_button-search");
// const description = document.querySelector(".js_in_search_desc");


// searchButton.addEventListener("click", (ev) => {
//     ev.preventDefault();
//     const descriptionValue = description.value;
//     console.log("la usuaria ha hecho click");


//     if (kittenDesc1.includes(descriptionValue)){
//       //hay que completar el código a partir de aquí y no sé como 
//       kittenDesc1.innerHTML = "Este es tu gatito"
    
//     }

// });

// //acceder al texto de la descripción de cada gatito








// // Tipos de eventos











    
