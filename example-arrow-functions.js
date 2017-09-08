var names = ['Artnem', 'Leo', 'Jen'];
/*
names.forEach(function (name) {

	console.log('forEach', name);
});

names.forEach((name) => {
	console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));

var person = { 
	name: 'Artem',
	greet: function () {
		names.forEach ((name) => { // в стрелочной функции нет потерия конктекста в этом месте с использованием this(не надо делать bind)
			console.log(this.name + ' says hi ti ' + name)
		});
	}
};

person.greet();*/

function add (a,b) {
	return a + b;
}

console.log(add(1,3));
console.log(add(9,0));


var addStatement = (a,b) => { // если в стрелочной функции используем многострочность, то ретурн нужен
	return a+b;
}
console.log(addStatement(1,3));
console.log(addStatement(9,0));

var addExpression = (a,b) => a+b; // если стрелочаня функция в одну строку - ретурн не нужен

console.log(addExpression(1,3));
console.log(addExpression(9,0));