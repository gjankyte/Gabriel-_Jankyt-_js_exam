/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
const outputEl = document.getElementById("output");


function getData(url) {
  return fetch(url)
    .then((resp) => resp.json())
    .then((dataInJs) => dataInJs)
    .catch((err) => console.warn("error in getData", err));
}


function crEl(tag, container, classEl, text){

  const el = document.createElement(tag);
  el.className = classEl;
  el.text = textEl;
  container.append(el);
  return el;
}


function generateCards(obj) {

}

