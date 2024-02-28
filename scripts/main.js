let button = document.querySelector("button")
let form = document.querySelector(".form")
let avatar = document.querySelector(".avatar")
let inputName = document.querySelector("#name")
let inputUrl = document.querySelector("#url")
let backButton = document.querySelector(".back")

//Remplir le formulaire avec les données du localStorage s'il y en a
if (localStorage.getItem('inputName') && localStorage.getItem('inputUrl')) {
    nameInput.value = localStorage.getItem('inputNameValue');
    avatarInput.value = localStorage.getItem('inputUrlValue');
}

function displayUser() {
    // Vérifier si les champs ne sont pas vides
    if (inputName.value !== "" && inputUrl.value !== "") {
        form.classList.add("slide_form")
        avatar.classList.add("slide_avatar")
        
    // Injection du contenu en HTML 
        avatar.innerHTML = 
        `
        <button class="back">🔙</button>
        <div class="image" style="background: url('${inputUrl.value}') center/cover"></div>
        <div class="userbonjour">Bonjour, ${inputName.value} !</div>
        
        `  

//         // Injection du contenu en HTML
//         circle.style.background = `url(${avatarInput.value}) center / cover`;
//         userInfo.innerHTML = `
//             <p>Bonjour, ${nameInput.value}.</p>
//         `;
//         // Enregistrement des données dans le local storage
//         localStorage.setItem("name", nameInput.value);
//         localStorage.setItem("avatar", avatarInput.value);

//         // Réinitialisation des valeurs du formulaire
//         nameInput.value = "";
//         avatarInput.value = "";
//     } else {
//         alert("Veuillez remplir tous les champs.");
//     }
// }


button.addEventListener('click', function(){
    
})

avatar.addEventListener('click', function(e){
    if (e.target.classList.contains('back')) {
        form.classList.remove("slide_form")
        avatar.classList.remove("slide_avatar")
    }
})


//https://cache.cosmopolitan.fr/data/photo/w1200_h630_c17/4u/rebelle.jpg

// // Déclaration de variables
// let form = document.querySelector(".form"),
//     nameInput = document.querySelector(".name"),
//     avatarInput = document.querySelector(".avatar"),
//     button = document.querySelector("button"),
//     show = document.querySelector(".showBox"),
//     circle = document.querySelector(".circle"),
//     back = document.querySelector(".back"),
//     userInfo = document.querySelector(".user-info");

// // Remplir le formulaire avec les données du local storage s'il y en a
// if (localStorage.getItem("name") && localStorage.getItem("avatar")) {
//     nameInput.value = localStorage.getItem("name");
//     avatarInput.value = localStorage.getItem("avatar");
// }

// function displayUser() {
//     // Vérifier si les champs ne sont pas vides
//     if (nameInput.value !== "" && avatarInput.value !== "") {
//         form.classList.add("slide_form");
//         show.classList.add("slide_box");

//         // Injection du contenu en HTML
//         circle.style.background = `url(${avatarInput.value}) center / cover`;
//         userInfo.innerHTML = `
//             <p>Bonjour, ${nameInput.value}.</p>
//         `;
//         // Enregistrement des données dans le local storage
//         localStorage.setItem("name", nameInput.value);
//         localStorage.setItem("avatar", avatarInput.value);

//         // Réinitialisation des valeurs du formulaire
//         nameInput.value = "";
//         avatarInput.value = "";
//     } else {
//         alert("Veuillez remplir tous les champs.");
//     }
// }

// // Évenement sur le bouton "Envoyer"
// button.addEventListener("click", function(){
//     displayUser()
//     nameInput.value = localStorage.getItem("name");
//     avatarInput.value = localStorage.getItem("avatar");
// });

// // Évenement sur le bouton "Retour"
// back.addEventListener("click", function(){
//     form.classList.remove("slide_form");
//     show.classList.remove("slide_box");
// });