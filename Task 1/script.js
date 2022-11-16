/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */


const inputEl = document.getElementById('search');
const outputEl = document.getElementById('output');
const submitBtn = document.getElementById('submit-btn');


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let kg = inputEl.value;
    lb = kg * 2.2046;
    g = kg / 0.001;
    oz = kg * 35.274;
    outputEl.innerHTML = `<p> ${kg} kg pavertus i lb yra = ${lb} </br>
     ${kg} kg pavertus i g yra = ${g} </br>
     ${kg} kg pavertus i oz yra = ${oz} </p>`
});

