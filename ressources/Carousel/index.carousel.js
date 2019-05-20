$(document).ready(function () {

    var carrousel = $('#carrousel'); // on cible le bloc du carrousel
    var img = $('#carrousel img');
    var caption = $('.texte'); // on cible les images contenues dans le carrousel
    var indexImg = img.length - 1; // on définit l'index du dernier élément
    var i = 0; // on initialise un compteur
    var currentImg = img.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)
    var currentCaption = caption.eq(i);

    img.css('display', 'none'); // on cache les images
    currentImg.css('display', 'block'); // on affiche seulement l'image courante
    caption.css('display', 'none');
    currentCaption.css('display', 'block');
    carrousel.append('<div class="controls"> <span class="prev">Precedent</span> <span class="next">Suivant</span> </div>');

    $('.next').click(function () { // image suivante

        i++; // on incrémente le compteur

        if (i <= indexImg) {
            img.css('display', 'none'); // on cache les images
            caption.css('display', 'none');

            currentImg = img.eq(i); // on définit la nouvelle image
            currentCaption = caption.eq(i); // puis on l'affiche

            currentImg.css('display', 'block');
            currentCaption.css('display', 'block');
        } else {
            i = 0;

            img.css('display', 'none'); // on cache les images
            caption.css('display', 'none');

            currentImg = img.eq(i); // on définit la nouvelle image
            currentCaption = caption.eq(i); // puis on l'affiche

            currentImg.css('display', 'block');
            currentCaption.css('display', 'block');
        }

    });

    $('.prev').click(function () { // image précédente

        i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"

        if (i >= 0) {
            img.css('display', 'none');
            caption.css('display', 'none');

            currentImg = img.eq(i);
            currentCaption = caption.eq(i);

            currentImg.css('display', 'block');
            currentCaption.css('display', 'block');
        } else {
            i = indexImg;

            img.css('display', 'none'); // on cache les images
            caption.css('display', 'none');

            currentImg = img.eq(i); // on définit la nouvelle image
            currentCaption = caption.eq(i); // puis on l'affiche

            currentImg.css('display', 'block');
            currentCaption.css('display', 'block');
        }

    });

    function slideImg() {
        setTimeout(function () { // on utilise une fonction anonyme

            if (i <= indexImg) { // si le compteur est inférieur au dernier index
                i++; // on l'incrémente
            } else { // sinon, on le remet à 0 (première image)
                i = 0;
            }

            img.css('display', 'none'); // on cache les images
            caption.css('display', 'none');

            currentImg = img.eq(i); // on définit la nouvelle image
            currentCaption = caption.eq(i); // puis on l'affiche

            currentImg.css('display', 'block');
            currentCaption.css('display', 'block');

            // slideImg(); // on oublie pas de relancer la fonction à la fin

        }, 3000); // on définit l'intervalle à 7000 millisecondes (7s)
    }

    // slideImg(); // enfin, on lance la fonction une première fois

});