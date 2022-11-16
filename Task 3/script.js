/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const showUsersBtn = document.getElementById("btn");
const message = document.getElementById("message");

showUsersBtn.addEventListener("click", (e) => {
    e.preventDefault();
    getData(ENDPOINT);
    showUsersBtn.style.display = "none";
    message.style.display = "none";
  });

  function getData(url) {
    return fetch(url)
      .then((resp) => resp.json())
      .then((dataInJs) => {
        generateCards(dataInJs, "output");
      })
      .catch((err) => console.warn("klaida", err));
  }
  