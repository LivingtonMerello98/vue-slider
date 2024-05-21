const slides = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Eseguo la destructuring dell'oggetto Vue per estrarre la funzione createApp
const { createApp } = Vue;

createApp({
    // Definisco i dati della mia applicazione
    data() {
        return {
            // Definisco l'array di diapositive
            slide: slides,
            // Imposto l'indice dell'immagine correntemente visualizzata a 0
            currentIndex: 0
        }
    },
    // Definisco i metodi che userò nell'applicazione
    methods: {
        // Definisco un metodo per visualizzare la prossima diapositiva
        nextSlide() {
            // Incremento l'indice corrente e assicuro che rimanga nell'intervallo delle diapositive

            //l'operatore modulo ci permette di creare un loop tra le diapositive, facendo tornare l'indice al primo elemento dopo aver raggiunto l'ultimo elemento.
            this.currentIndex = (this.currentIndex + 1) % this.slide.length;
        },
        // Definisco un metodo per visualizzare la diapositiva precedente
        prevSlide() {
            // Decremento l'indice corrente e assicuro che rimanga nell'intervallo delle diapositive
            this.currentIndex = (this.currentIndex - 1 + this.slide.length) % this.slide.length;
        }
    }
})
.mount('#app');

