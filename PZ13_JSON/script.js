
let monster = {
	type: "zombie",
	health: 25.0,
	damage: 4,
	gold: 8,
	isDead: false
};

//let jsonMonster = JSON.stringify(monster);
//alert(jsonMonster);

let badExample = {
	[Symbol("id")]: 1,
	property: undefined,
	Foo () {
		console.log ("Hi!");
	}
};

//let emptyStr = JSON.stringify(badExample);
//alert (emptyStr);

let Warior = {
	type: "human",
	health: 25.0,
	damage: 6,
	gold: 2,
	isDead: false
};

let Sword={
	type: "iron",
	damage: 12,
	price: 100,
	typeDMG: "cutting"
	
}
let Mace={
	type: "iron",
	damage: 10,
	price: 90,
	typeDMG: "crushing"	
}


Sword.parent= Warior;
Warior.weapon= Sword;

//let WarSw=JSON.stringify(Sword);
//console.log(WarSw);


let Chest = {
	capacity: 50,
	portable: false,
	content: {
		gold: 20,
		diet: 1,
		Sword: {
			"type": "iron",
			"damage": 12,
			"price": 100,
			"typeDMG": "cutting"
		}
	}
}

let Backpack={
	capacity: 25,
	portable: true,
	content: {
		gold: 10,
		diet: 3,
		arrow:15,
		Bow: {
			"damage": 10,
			"price": 50,
			"typeDMG": "pricking"	
		}
	}
}

function checkPortable(key,value){
	if(key ==="portable" && value == false){
		return undefined;
	}
	return value;
	
}

//let jsonBkPk = JSON.stringify(Backpack,checkPortable, 4);
//alert(jsonBkPk);

//let jsonCh = JSON.stringify(Chest,checkPortable, 2);
//alert(jsonCh);


let personStr = '{"firstName": "Andrey","lastName": "Ivanov","age": 20,"isStudent": true,'+
	'"contactInfo": { "phone": " 098-556-33-41 ","email": " AndreyIvanov@gmail.com "},'+
	'"disciplines": [ "Programming","Machine engineering","English" ] }'

let person = JSON.parse(personStr);

//alert(person.firstName);
//alert(person.contactInfo.phone);


let model = {
	name: "BMW",
	autopilot: undefined,
	toJSON(){
		let jsonStr='{"name": "${this.name}","autopilot": ';
		if(this.autopilot === undefined){
		jsonStr =+ '"Not"}'
		}
		else{
		jsonStr=+ '"${this.autopilot}"}'
	}
	return jsonStr;
}}
let car={
	color:"Black",date: new Date(2019,7,21),model,
}

let carJSON = JSON.stringify(car);
alert(carJSON);



















