/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }

    wasExpensive() {
        if (this.budget > 100000000) {
            return true;
        } else {
            return false;
        }
    }
}

const teemoBeemo = new Movie("teemo beemo", "herobrine", 300e6);
const starWars = new Movie("Star Wars", "George Lucas", 11e6);

console.log('teemoBeemo ===', teemoBeemo.wasExpensive());
console.log('starWars ===', starWars.wasExpensive());