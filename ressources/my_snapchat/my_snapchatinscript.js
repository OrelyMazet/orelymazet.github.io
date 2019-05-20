/*var allCookies = document.cookie;
if ((allCookies != "") && (allCookies != null)) {
    alert("Bon retour parmi nous ");
} else {
    window.location.replace("my_snapchatconnex.html");
}*/
window.onload = function () {
        var veriFormulaire = document.getElementById("bouton_envoyer");
        veriFormulaire.addEventListener("click", inscription);

        function inscription() {
            var monEmail = document.getElementById("email").value;
            var monPassword = document.getElementById("mdp").value;

            console.log(monEmail, monPassword);
            if ((monEmail == "") || (monEmail == "null")) {
                document.getElementById("erreur").innerHTML = "email manquant, veuillez saisir une adresse de type nom@domain.fr";
                document.getElementById("erreur").style.color = "red";
            }
            if ((monPassword == "") || (monPassword == "null")) {
                document.getElementById("erreur").innerHTML = "password manquant, veuillez saisir un mot de passe svp,";
                document.getElementById("erreur").style.color = "red";
            }

                var myComObjet = {
                    "email": monEmail,
                    "password": monPassword
                };
                console.log(myComObjet);
                var jsonmyComObjet = JSON.stringify(myComObjet);
                console.log(jsonmyComObjet);

                var XHR = new XMLHttpRequest();
                var requestURL = "https://api.snapchat.wac.epitech.eu/inscription";
                XHR.open("POST", requestURL, true);
                XHR.setRequestHeader("Content-Type", "application/JSON");
                XHR.onload = function () {
                    console.log(this.status);
                    console.log(this.statusText);
                    if ((this.status >= 200) && (this.status <= 299)) {
                        alert("Votre inscription est prise en compte!");
                        window.location.replace("my_snapchatconnex.html");
                        var ResInscript = JSON.parse(this.responseText);
                        console.log(ResInscript.data);
                    } else {
                        alert("erreur au niveau du serveur")
                    }

                }
                XHR.send(jsonmyComObjet);
            }
        }



        //function inscription(event) { //Si les champs sont vides
        //let monemail = document.getElementById("email");
        //let monpassword = document.getElementById("mdp");

        //if ((monEmail == "") || (monEmail == "null")) {
        //  document.getElementById("erreur").innerHTML = "email manquant, veuillez saisir une adresse de type nom@domain.fr";
        //document.getElementById("erreur").style.color = "red";
        //}
        //if ((monPassword == "") || (monPassword = "null")) {
        // document.getElementById("erreur").innerHTML = "password manquant, veuillez saisir un mot de passe svp,";
        // document.getElementById("erreur").style.color = "red";
        //}
        //if ((typeof letemail == "string") && (typeof letpassword == "string")) 
        //{  // document.getElementById("enconnexion").location = "file:///Users/douce/Coding_Academy/my_snapchat/my_snapchatEnconnex.html";}
        //let mail = document.getElementById("email").value;
        //let motpasse = document.getElementById("mdp").value;
        //let myComObjet={email : mail, password : motpasse};

        //let myNewComObjet = JSON.stringify(myComObjet);
        //console.log(myNewComObjet.email);
        //console.log(myNewComObjet.password);

        //var XHR = new XMLHttpRequest();
        //console.log("test");
        //var requestURL = "https://api.snapchat.wac.epitech.eu/inscription";
        //XHR.open("POST", requestURL, true);
        //XHR.setRequestHeader("content-Type","application/JSON");


        //XHR.onload = function () {
        //console.log(this.status);
        //console.log(this.responseText);
        //if(this.readyState == 4 && this.status == 200)
        // {   alert("Votre inscription est prise en compte!");
        //window.location.replace("my_snapchatconnex.html");
        //var ResInscript = JSON.parse(XHR.responseText);
        //console.log(ResInscript);
        //}
        //else {alert("erreur au niveau du serveur")};
        //}
        //XHR.send(myNewComObjet);
        //}


        //window.onload = function () {
        //let veriFormulaire = document.getElementById("bouton_envoyer");
        //veriFormulaire.addEventListener("click", inscription);
    
