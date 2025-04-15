document.addEventListener("DOMContentLoaded", () =>{
    //initialisation de la base donnée simulé
    let user = JSON.parse(localStorage.getItem("users"))||[];
    //Gestion d'inscription
    document.getElementById("formInscrip").addEventListener("submit",function(e){
        e.preventDefault();
        //recuperation des champs
        const userName = document.getElementById("userName");
        const email = document.getElementById("mail");
        const motDePasse = document.getElementById("mdp");
        // console.log(userName, email, motDePasse);
        const newUser = {userName,email,motDePasse};
        user.push(newUser);
        localStorage.setItem("users",JSON.stringify(user));
        alert("Inscription reussite");
    })
})