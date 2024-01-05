const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// création de l'index de base
let actualIndex = 0;

// récupération des éléments Arrows
let arrowLeft = document.querySelector('.arrow_left');
let arrowRight = document.querySelector('.arrow_right');

// création de la fonction qui met à jour les infos de la banniere en cours
function updateBanner(index) {
	// mise à jour de l'image
	let imageBanner = document.querySelector('.banner-img')
	imageBanner.src = './assets/images/slideshow/' + slides[index].image;
	
	// Mise à jour du texte
	let tagLine = document.querySelector('#banner p')
	tagLine.innerHTML = slides[index].tagLine;
  }

function updateDot(indexDot) {
	// mise à jour des bullet points
	let dots = document.querySelectorAll('.dot');

	for (let i = 0; i < dots.length; i++) {
		if (i===indexDot) {
			dots[i].classList.add('dot_selected');
		} else {
			dots[i].classList.remove('dot_selected');
		}
		
	}		
  }

// changement du actualIndex au clique sur la fleche gauche
arrowLeft.addEventListener('click', function () {
	actualIndex--; // decrementation
	// condition si on est à la première image
    if (actualIndex < 0) {
        actualIndex = slides.length - 1; // Affiche la dernière image
    }
	updateBanner(actualIndex);
	updateDot(actualIndex);
    });

// changement du actualIndex au clique sur la fleche droite
arrowRight.addEventListener('click', function () {
	actualIndex++; 
    // condition si on est à la dernière image
    if (actualIndex >= slides.length) {
        actualIndex = 0; // Affiche la première image
    }
    updateBanner(actualIndex); 
	updateDot(actualIndex);
    });

// récupération de la div avec la classe dots
let dotsDiv = document.querySelector('.dots');

// Ajout des points avec une boucle for
for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement('div'); // création d'une div
	dot.classList.add('dot'); // ajout de la classe "dot" à la div créée
	// Mise en place de la fonction updateSlide à chaque click sur un bouton "dot"
	dot.addEventListener('click', function () {
		actualIndex = i;
		updateBanner(actualIndex);
		updateDot(actualIndex);
	});
  
	dotsDiv.appendChild(dot);
}  

updateBanner(actualIndex);
updateDot(actualIndex);