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
const kiienOne = <li class="card">
<article>
  <img
    class="card_img"
    src="https://dev.adalab.es/gato-siames.webp"
    alt="siames-cat"/>
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race">Siamés</h4>
  <p class="card_description">
    Porte elegante, su patrón de color tan característico y sus ojos
    de un azul intenso, pero su historia se remonta a Asía al menos
    hace 500 años, donde tuvo su origen muy posiblemente.
  </p>
</article>
</li>;

list.innerHTML = 'kittenOne'; //Añade cada variable al html utilizando propiedad innerHTML.

const kittenTwo = <li class="card">
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
</li>;

list.innerHTML = 'kittenTwo';

const kittenThree = <li class="card">
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
</li>;

list.innerHTML = 'kittenThree';


const item=document.querySelector(".js-btn-add");





