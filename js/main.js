'use strict';
// añadir la clase js-list 

const listOfCats = document.querySelector('.js-list')

/* Agregar el código del li desde HTMl 
Repetir este proceso por cada gatito */

    



//Pasos:
//cuando la usuaria haga click en el boton desplegar menú
//tenemos que darle un evento al LI para que cuando la usuaria haga click se esconda el formulario (quitar collapsed)

// primer ejercicio pair
const list =  document.querySelector('.js-list');

// añado el codigo de li dentro de una variable 
const kittenImage1 = "https://dev.adalab.es/gato-siames.webp";
const kittenDesc1 =
"Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente."; 
const kittenRace1 = "Siamés";
const kittenName1 = "Anastacio";


const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src= ${kittenImage1}
    alt="siames-cat"/>
  <h3 class="card_title">${kittenName1}</h3>
  <h4 class="card_race">Siamés</h4>
  <p class="card_description"> ${kittenDesc1}
    
  </p>
</article>
</li>`; //hay que meterlo toda etiqueta <> entre comillas francesas ``



const kittenTwo = `<li class="card">
<img
  class="card_img"
  src="https://dev.adalab.es/sphynx-gato.webp"
  alt="sphynx-cat"/>
<h3 class="card_title">Fiona</h3>
<h4 class="card_race">Sphynx</h4>
<p class="card_description">
  Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
  hasta con pinta de alienígena han llegado a definir a esta raza
  gatuna que se caracteriza por la «ausencia» de pelo.
</p>
</li>`;



const kittenThree = `<li class="card">
<img
  class="card_img"
  src="https://dev.adalab.es/maine-coon-cat.webp"
  alt="maine-coon-cat"
/>
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">Maine Coon</h4>
<p class="card_description">
  Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
  bella mirada se ha convertido en una de sus señas de identidad.
  Sus ojos son grandes y las orejas resultan largas y en punta.
</p>
</li>`;

list.innerHTML = kittenOne + kittenTwo + kittenThree;



//EJERCICIO 2

/* cuando la usuaria haga click en + aparece el menú desplegable
    seleccionar el elemento html (botón y los inputs)
    cuando la usuaria haga click en el botón, mostrar el formulario 

*/
const spanElement = document.querySelector(".js-btn-add");


spanElement.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("click");



})


/* Cuando la usuaria haga click en "buscar", tiene que recoger el valor del input*/
const searchButton = document.querySelector (".js_button-search");
const description = document.querySelector(".js_in_search_desc");

searchButton.addEventListener("click", (ev) => {
    ev.preventDefault();
    const description = js_in_search_desc.value;

});
console.log("ha hecho click")
//acceder al texto de la descripción de cada gatito



const kittenDesc2 = 
"Produce fascinación y curiosidad. Exótico, raro, bello, extraño...hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";

const kittenDesc3 =
"Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";

if (kittenDesc1.includes(description)){
  //hay que completar el código a partir de aquí y no sé como 
  kittenDesc1.innerHTML = "Este es tu gatito"

}


// Tipos de eventos











    





