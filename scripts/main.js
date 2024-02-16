
const wrapper = document.querySelector('.container')
const boutons = document.querySelector('.buttons')




// On passe un argument "genre" à la fonction displayRobots qui sera utile quand on l'appellera plus tard
// Notons que si on n'envoie pas d'argument à une fonction, la valeur de l'argument sera "null" (ça a son importance ici :) )
function displayRobots(genre) {
    fetch(`scripts/robots.json`)
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      // On boucle sur les robots avec un forEach .. rien de compliqué ici :)
      data.robots.forEach(function(singleRobot) {
        // Je catch dans une variable sexe le sexe du robot en cours
        const sexe = singleRobot.gender
        // Si le genre (l'argument de la fonction) est égal à null (si on a pas passé d'argument à la fonction) OU si le genre est égal à "all" ou à la valeur de sexe (soit Male ou Female) alors on affiche le bloc html pour créer une galerie de robots 
        if (genre == null || genre == "all" || genre == sexe) {
          wrapper.innerHTML += `
          <div class="single-robot">
            <h1 class="${sexe}">${singleRobot.first_name} ${singleRobot.last_name}</h1>
            <img src="${singleRobot.portrait}" alt="${singleRobot.first_name} ${singleRobot.last_name}">
          </div>
          `
        }
      })
    })
    .catch(error => {console.log("Erreur lors de la récup des données :", error);
    })
  }

// On lance la fonction une fois en dehors de tout événement et on la lance .. sans argument du coup .. l'argument "gender" de la fonction vaudra null ici :)
displayRobots()

// Délégation d'événément d'amouuuuuuuuuur ♥ (sur le parent qui contient tous les boutons)
boutons.addEventListener('click', function(event){
  // On check qu'il s'agit bien d'un bouton (en regardant s'il a un data-gender) (on est pas obligé de vérifier ça avec un classList hein ^^) et si c'est bien le cas ...
  if(event.target.hasAttribute('data-gender')){
    // On vide le conteneur d'abord pour le remplacer par soit ...
    wrapper.innerHTML = ''
    // ... tous les robots ("all")
    if(event.target.getAttribute == "all") {
      displayRobots()
    // ... la valeur du data-gender du bouton sur lequel on a cliquay :)
    } else {
      displayRobots(event.target.getAttribute('data-gender'))
    }
  }
})






// let container = document.querySelector('.container')
// let buttonHomme = document.querySelector('.btn-hom')
// let buttonFemme = document.querySelector('.btn-fem')

// let img = document.querySelector('img')
// fetch("scripts/robots.json")
//     .then(response => response.json())
//     .then(datas => {
//         console.log(datas);
//         datas.robots.forEach(function(singleUser){
//             userImg = `<img class="${singleUser.gender}" src="${singleUser.portrait}">`
//             container.innerHTML += userImg;
            
//         })
//     });

// if (e.target.classList.contains("userImg")) {
//     document.querySelector(".user-details").innerHTML = 
//     `
//     <img src="${datas.users[e.target.getAttribute("data-userid")].image}">
//     <h2> ${datas.users[e.target.getAttribute("data-userid")].name}</h2>
//     <div>${datas.users[e.target.getAttribute("data-userid")].age} ans</div>
//     `
// }


// buttonFemme.addEventListener('click', function() {
//     img = document.querySelector('img')
//   img.forEach(function(femme){
//     if (femme.classList)
//     container.innerHTML =""
//     container.innerHTML += userImg;
// })

// })

// buttonFemme.addEventListener('click', function() {

// })


