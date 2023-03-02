//W3
/*class List{
	constructor(values){
		this.values=values;
	}
	printList(){
		this.values.sort();
		document.write('<p><oll>');
		for(const elem of this.values){
			document.write("<li>"+elem+"</li>");
		}
		document.write('</ol></p>');
	}
	add(product){
		this.values.push(product);
	}
	clearList(){
		this.values.splice(0,this.values.length);
	}
}

sp=['apple','pumpcin','melon','rice','peach','banana'];
l1=new List(sp);
l1.printList();
l1.add('nuggets');
l1.printList();
l1.clearList();
l1.printList();
sp2=['C','JS','cpp','py'];
for(elem of sp2) l1.add(elem);
l1.printList();
*/


//W4
/*
class btnClass{
	constructor(text,onClick){
		this.text=text;
		this.onClick=onClick;
		this.element=document.createElement('button');
		this.element.innerText=text;
		this.element.addEventListener('click',onClick);
	}

	render(parentElement){
		parentElement.appendChild(this.element);
	}
}

const myButton = new btnClass('Tap me', () => {
	alert('your tap to button');
});

const parentElement = document.querySelector('#myDiv');
myButton.render(parentElement);
*/



class Button{
	constructor(text){
		this.text=text;
	}
	show(){
		document.write(
			'<div id=btn1 style="width:150px;height:50px;padding:10px;'+
			'margin:10px 20px;background:#fa8072;'+
			'vertical-align:middle;text-align:center;display:teble-cell;">'+
			'<a href="#btn3">'+this.text+'</a></div>'		
		);
	}
}

class ButtonColor extends Button{
	constructor(text,color){
		super(text);
		this.color=color;
	}
	show(){
		document.write(
			'<div id=btn1 style="width:150px;height:50px;padding:10px;'+
			'margin:10px 20px;'+ 'background:'+this.color+';'+
			'vertical-align:middle;text-align:center;display:teble-cell;">'+
			'<a href="#btn3">'+this.text+'</a></div>'		
		);	
		
	}
}

btn1=new Button("Press me!");
btn1.show();

btn2=new ButtonColor("Unpress me","#f72a20");
btn2.show();










