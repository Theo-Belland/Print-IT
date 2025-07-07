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

let currentIndex = 0;

const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots');

slides.forEach((_, index) => {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	if (index === currentIndex) {
		dot.classList.add('dot_selected');
	}
	dotsContainer.appendChild(dot);
});

function updateBanner(index){
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
	bannerText.innerHTML = slides[index].tagLine;
	const allDots = document.querySelectorAll('.dot');
	allDots.forEach((dot, i) => {
		dot.classList.toggle('dot_selected', i == index);
	});
}


arrowLeft.addEventListener('click', () => {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	updateBanner(currentIndex);
});

arrowRight.addEventListener('click', () => {
	currentIndex = (currentIndex + 1) % slides.length;
	updateBanner(currentIndex);
});

