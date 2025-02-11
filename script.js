const apiUrl = "VOTRE_URL_APPS_SCRIPT"; // Remplacez par votre URL Google Apps Script

function ajouterUtilisateur() {
    let nom = document.getElementById("nom").value;
    let telephone = document.getElementById("telephone").value;
    
    fetch(apiUrl + "?action=ajouterUtilisateur&nom=" + nom + "&telephone=" + telephone)
    .then(response => response.text())
    .then(data => alert(data));
}

function mettreAJourConsommation() {
    let id = prompt("ID de l'utilisateur ?");
    let conso = document.getElementById("consoActuelle").value;
    let tarif = document.getElementById("tarifActuel").value;
    
    fetch(apiUrl + "?action=mettreAJourConsommation&id=" + id + "&conso=" + conso + "&tarif=" + tarif)
    .then(response => response.text())
    .then(data => alert(data));
}

function chargerUtilisateurs() {
    fetch(apiUrl + "?action=getUtilisateurs")
    .then(response => response.json())
    .then(data => {
        let table = document.getElementById("userTable");
        table.innerHTML = "";
        data.forEach(user => {
            let row = `<tr><td>${user[1]}</td><td>${user[3]}</td><td>${user[5]}</td><td>${user[8]}</td></tr>`;
            table.innerHTML += row;
        });
    });
}

chargerUtilisateurs();

