/*

Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

*/
const next = document.querySelector(".button.next");
const before = document.querySelector(".button.before");
const items = document.querySelectorAll("[class ^= img_ ]");

const img = document.querySelector("[class ^= img_ ]");
console.log(items);
console.log(next);
console.log(next);



let count = 0;

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
/*
// button before img
before.addEventListener("click",
    function () {

            // rimuovo dal div dell'img in cui suono posizionata la classe active
            items[count].classList.remove("active");


            // incremento il contatore dell'immagine su cui sono posizionata in questo momento
            count--;
            console.log(count);
            // and aggiungo la classe active al successivo
            items[count].classList.add("active");

            
         }
)
*/
