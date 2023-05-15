/*

Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

*/


// Creare i vari DIV con le img 
// creare l'array con i path delle img
// chiedere all'utente se ha img da inserire

const arrayPathImmages = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];


let container = document.getElementById("container");
// const img = document.querySelector(".item");
// console.log(items);
// console.log(next);
// console.log(next);


for ( let i = 0; i < arrayPathImmages.length; i++ ) {
    
    // se sei sul primo elemento lo crei e gli assegni la classe active

    container.innerHTML +=    
    `<div class="item">
        <img src="${arrayPathImmages[i]}" alt="">
    </div> `;

    // per tutti gli altri elementi crei solo gli elementi
}

const next = document.querySelector(".button.next");
const before = document.querySelector(".button.before");
const items = document.querySelectorAll(".item");
let count = 0;

items[count].classList.add("active");

// button next img
next.addEventListener("click",
    function () {
        if ( count < ( items.length - 1 )) {

            // rimuovo dal div dell'img in cui suono posizionata la classe active
            items[count].classList.remove("active");


            // incremento il contatore dell'immagine su cui sono posizionata in questo momento
            count++;
            console.log(count);

            // and aggiungo la classe active al successivo
            items[count].classList.add("active");

            if ( count !== 0 ) {
                before.classList.remove("hidden");
            }

            if ( count === (items.length - 1)) {
                next.classList.add("hidden");
            }
        }

    }
)

// button before img
before.addEventListener("click",
    function () {
        if ( count >= 0) {

            // rimuovo dal div dell'img in cui suono posizionata la classe active
            items[count].classList.remove("active");


            // incremento il contatore dell'immagine su cui sono posizionata in questo momento
            count--;
            console.log(count);

            // and aggiungo la classe active al successivo
            items[count].classList.add("active");

            if ( count < (items.length - 1)) {
                next.classList.remove("hidden");
            }

            if ( count === 0 ) {
                before.classList.add("hidden");
            }
        }

    }
)
