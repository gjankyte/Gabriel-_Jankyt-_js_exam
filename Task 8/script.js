/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klase "Calculator", kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


class Calculator {
    sum(a, b) {
        return a + b;
    }

    subtraction(a, b){
        return a - b;
    }

    multiplication(a, b){
        return(a * b);
    }

    division(a, b){
        return(a / b);
    }
}

const calculated = new Calculator();


console.log('calculated.sum(5, 3) ===', calculated.sum(5, 3));
console.log('calculated.subtraction(5, 3) ===', calculated.subtraction(5, 3));
console.log('calculated.multiplication(5, 3) ===', calculated.multiplication(5, 3));
console.log('calculated.division(5, 3) ===', calculated.division(5, 3));