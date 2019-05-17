//function checkCookie(monCookie) {
//var userToken = getCookie('email');
//if (userToken != "") {
//alert("Bon retour parmi nous ");
//} else {
// window.location.replace("my_snapchatconnex.html");
//}
//}
//if (isset($_COOKIE['monCookie']) {
//$valeur = $_COOKIE['monCookie'];
//echo $valeur;
//}
//else {window.location.replace("my_snapchatconnex.html")}

var allCookies = document.cookie;
if ((allCookies != "") && (allCookies != null)) {
    alert("Bon retour parmi nous ");
} else {
    window.location.replace("my_snapchatconnex.html");
}

window.onload = function () {

    var monEmail;
    var imgData;
    document.getElementById('mesphotos').addEventListener('change', function voirPhoto() {
        if (this.files && this.files[0]) {
            var img = document.getElementById('myImg'); // $('img')[0]
            img.src = URL.createObjectURL(this.files[0]); 
            imgData = this.files[0];
            // set src to file url
            //img.onload = imageIsLoaded; // optional onload event listener
        }

    });
    /*document.getElementById('listeduree').addEventListener('click', function (e) { // 1.
        var selected;
        if (e.target.tagName === 'LI') { // 2.
            selected = document.getElementById('li')
        }
    }); */ // 2a.
    /*var myComObjetList = {
        'data': [{
            'email': 'monEmail'
        }, {
            'email': 'monEmail2'
        }]
    };*\

    /*function setCookie(monCookie, ResInscript) {
        var date = new Date();
        date.setTime(date.getTime() + (4 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + date.toUTCString;
        //var dateString = date.toUTCString();
        var cookieString = monCookie + "=" + ResInscript.data.token + ";" + expires + ";path=/";
        document.cookie = cookieString;*/

    function readCookie(monCookie) {
        //console.log('enter: read cookie');
        var monCookieEQ = monCookie + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(monCookieEQ) == 0) return c.substring(monCookieEQ.length, c.length);
        }
        return null;
    }

    document.getElementById('Contact').onclick = function UserEmail() {
        var XHR = new XMLHttpRequest();
        var requestURL = "https://api.snapchat.wac.epitech.eu/all";
        XHR.open("GET", requestURL, true);
        XHR.setRequestHeader("Token", readCookie('monCookie'));
        XHR.onload = function () {
            console.log(this.status);
            console.log(this.statusText);
            if ((this.status >= 200) && (this.status <= 299)) {
                alert("Obtention de la liste de vos contacts!");
                // window.location.replace("my_upload.html");
                var ResInscript = JSON.parse(this.responseText);
                console.log(ResInscript.data);
                //faire la requete get all et mettre résultat dans la variable ResInscript;

                var list = document.getElementById("listemail"); //creation liste+stock les emails
                var li; //creation des items dans mon objet List
                list.innerHTML = "";

                // Mettre ici code pour vider la liste existante.

                for (var i = 0; i < ResInscript.data.length; i++) {
                    li = document.createElement("option"); //cree la nouvelle LI +mise en menu déroulant select
                    li.appendChild(document.createTextNode(ResInscript.data[i].email));
                    list.appendChild(li);
                }
            }
            //document.getElementById("li").onclick = function SelectUser() {
            list.onchange = function () {
                monEmail = document.getElementsByTagName('option')[list.selectedIndex].innerText
                console.log(monEmail);
            };
    }

    document.getElementById('bouton_envoyer').onclick = function()
    { 
        var delaiSnap=document.getElementById('Duree').value;
        //var objetImage = {mesphotos:"myImg",delaiSnap:"duree"};
       // var blob=new Blob([objetImage],{type:'application/octet-binary'});
        //var url = URL.createObjectURL(blob);

        var formData = new FormData();
        //blob ou url dans formData append?
//                formData.append('monEmail','[blob]',([Json.stringify({
//                  formData})],{type:"application/json"}));
        console.log(delaiSnap, monEmail, imgData);
        
            formData.set('duration', delaiSnap);
            formData.set('to', monEmail);
            formData.set('image', imgData);

        /*fichier HTML choisi par l'utilisateur
        formData.append("userfile", fileInputElement.files[0]);

        // objet JavaScript de type fichier
        var content = '<a id="a"><b id="b">hey!</b></a>'; // the body of the new file...
        var blob = new Blob([content], {
            type: "text/xml"
        });

        formData.append("webmasterfile", blob);*/

    //var request = new XMLHttpRequest();
    //request.open("POST", "http://foo.com/submitform.php");
    //request.send(formData);

    var XHR = new XMLHttpRequest();
    var requestURL = "https://api.snapchat.wac.epitech.eu/snap";
    XHR.open("POST", requestURL, true);
    XHR.setRequestHeader("token", readCookie('monCookie'));
    XHR.onload = function () {
        console.log(this.status);
    }
    XHR.send(formData);
}

    XHR.send();
}
}