// --- VARIABILI ----

//Variabile con array di icone
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

//Variabile container
const container = document.getElementById("icons-container");

//Variabile selector
const selector = document.getElementById("icons-selector");


// ---- CODICE DA ESEGUIRE ----

//Cambia il color di ciascuna icona con un colore casuale
genRandomColors();

//Stampa tutte le box al caricamento pagina
printAllBoxes();

//EventListener del selector
selector.addEventListener("change", function () {
	container.innerHTML = "";

	if (selector.value == "all") {
		printAllBoxes();
	} else {
		printFilteredBoxes();
	}
});

// ---- FUNZIONI ----

//Genera codice di una singola box
function genBoxCode(icon) {
	return `
<div class="box">
    <i class="${icon.family} ${icon.prefix}${icon.name}" style="color: ${icon.color};"></i>
    <div class="name">${icon.name}</div>
</div>
`;
}

//Stampa tutte le box
function printAllBoxes() {
	icons.forEach((icon) => {
		container.innerHTML += genBoxCode(icon);
	});
};

//Stampa le box in base al filtro
function printFilteredBoxes() {
	let boxes = filterBoxes();
	boxes.forEach((box) => {
		container.innerHTML += genBoxCode(box);
	});
}

//Filtra le box in base al selector
function filterBoxes() {
	return icons.filter((box) => {
		return box.type == selector.value;
	});
}

//Da a ciascuna icon nell'array icons un colore hex casuale
function genRandomColors() {
	icons.forEach((icon) => {
		icon.color = randomColor();
	})
}

//Genera un colore hex casuale
function randomColor() {
	const chars = "0123456789ABCDEF";
	let tempColor = "#";

	for (let i = 0; i < 6; i++) {
		tempColor += chars[randomInt(0, 15)];
	}

	return tempColor;
}

//Genera un numero intero casuale dato un intervallo
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}