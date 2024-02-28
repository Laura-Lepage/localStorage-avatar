let button = document.querySelector("button")
let form = document.querySelector(".form")
let avatar = document.querySelector(".avatar")
let inputName = document.querySelector("#name")
let inputUrl = document.querySelector("#url")
let backButton = document.querySelector(".back")

//Remplir le formulaire avec les données du localStorage s'il y en a
if (localStorage.getItem('name') && localStorage.getItem('avatarLink')) {
    inputName.value = localStorage.getItem('name'); //'name' = la clé qui contiendra la valeur de l'inputName
    inputUrl.value = localStorage.getItem('avatarLink'); //'avatarLink' = la clé qui contiendra la valeur de l'inputUrl
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
    // Enregistrement des données dans le localStorage
        localStorage.setItem('name', inputName.value);
        localStorage.setItem('avatarLink', inputUrl.value);

    // Réinitialisation des valeurs du formulaire
        inputName.value = "";
        inputUrl.value = "";

    } else {
        alert("Veuillez remplir tous les champs.");
    }
}

button.addEventListener('click', function(){
    displayUser()
    inputName.value = localStorage.getItem("inputName");
    inputUrl.value = localStorage.getItem("inputUrl");
    
})

// au chargement de la page, on vérifie si les données avaient déjà été remplies et, si oui, on affiche directement la box avatar
if(localStorage.getItem('name') != "" && localStorage.getItem('avatarLink')){
    form.classList.add("slide_form")
    avatar.classList.add("slide_avatar")
    avatar.innerHTML = 
    `
    <button class="back">🔙</button>
    <div class="image" style="background: url('${inputUrl.value}') center/cover"></div>
    <div class="userbonjour">Bonjour, ${inputName.value} !</div>
    
    ` 
    inputName.value = localStorage.getItem('name');
    inputUrl.value = localStorage.getItem('avatarLink');

}

avatar.addEventListener('click', function(e){
    if (e.target.classList.contains('back')) {
        form.classList.remove("slide_form")
        avatar.classList.remove("slide_avatar")
    }
})

//https://cache.cosmopolitan.fr/data/photo/w1200_h630_c17/4u/rebelle.jpg