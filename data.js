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
// --- VARIABILI ----

//Variabile container
const container = document.getElementById("icons-container");

//Variabile selector
const selector = document.getElementById("icons-selector");


// ---- CODICE DA ESEGUIRE ----

printAllBoxes();

selector.addEventListener("change", function () {
	container.innerHTML = "";

	if (selector.value == "all") {
		printAllBoxes()
	} else {
		printFilteredBoxes();
	}
});


// ---- FUNZIONI ----

//Genera codice di una singola box
function genBoxCode(icon) {
	return `
<div class="box">
    <i class="${icon.family} ${icon.prefix}${icon.name} ${icon.color}"></i>
    <div class="name">${icon.name}</div>
</div>
`;
}

//Genera tutte le box
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