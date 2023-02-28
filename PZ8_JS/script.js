/*class Apple{
	constructor(type,weight){
		this.type = type;
		this.weight = weight;
	}
	print(){
		console.log("TYPE: " + this.type + " WEIGHT: "+ this.weight +"\n");
	}
}

const apple1= new Apple("Белый",100);
apple1.print();
*/

/*
class Wine{
	#name;
	#type;
	#quantity;
	constructor(name,type,quantity){
		this.#name = name;
		this.#type=type;
		this.#quantity=quantity;
	}
	print(){
		console.log("NAME: "+ this.name + "TYPE: " +this.type+ "QUANTITY: "+this.quantity+ "\n");
	}
	get name() {
		return this.#name;
	}
	
	get type() {
		return this.#type;
	}
	
	get quantity() {
		return this.#quantity;
	}
	set name(name){
		this.#name=name;
	}set type(type){
		this.#type=type;
	}set quantity(quantity){
		this.#quantity=quantity;
	}
	
	literCount(){
		let liter=0;
		liter=this.quantity*0.7;
		console.log(this.name+" Have a " +liter +" liter "+"\n");
	}
}

const wine2= new Wine("BEBE ","WHITE",5);
const wine3= new Wine("BIBI ","RED",15);
const wine1= new Wine();
wine1.name="KAKA ";
wine1.type="RED ";
wine1.quantity=10;

wine1.print();
wine2.print();
wine3.print();
wine1.literCount();
wine2.literCount();
wine3.literCount();
*/


class Person{
	#FIO;
	#dateBD;
	constructor(FIO,dateBD){
		this.#FIO=FIO;
		this.#dateBD=dateBD;
	}
	print(){
		console.log("FIO: "+this.#FIO + "dateBD: " +this.#dateBD);
	}
	calcAge(){
		const deltaTime=Date.now()-Date.parse(this.#dateBD);
		const age = Math.floor(deltaTime/(365*24*60*60*1000));
		console.log(age+ " years old");
	}
	set FIO(FIO){
		this.#FIO=FIO;
	}
	get FIO(){
		return this.#FIO;
	}
	set dateBD(dateBD){
		this.#dateBD=dateBD;
	}
	get dateBD(){
		return this.#dateBD;
	}
}

class Teacher extends Person{
	#lessonList;
/*	constructor(lessonList){	
		this.lessonList=lessonList;
	}*/
	set lessonList(lessonList){
		this.#lessonList=lessonList;
	}
	get lessonList(){
		return this.#lessonList;
	}
	MasLIST(){
		console.log("LessonList: "+ this.lessonList);
	}
}


const pep1=new Person("GEG TER PSA ","08/23/2002");
pep1.print();
pep1.calcAge();


const teach=new Teacher(["MATH","FUS","ANGL"]);
teach.FIO="RES TER FAS ";
teach.dateBD="09/11/1966";
teach.print();
teach.calcAge();
teach.MasLIST();











