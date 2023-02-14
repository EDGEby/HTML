let a = prompt("Enter age",5);
if(a<=2){
	console.log("младенец");
}
 else if(2<a && a<12){
	console.log("ребенок");
}
 else if(12<a && a<18){
	console.log("подросток");
}
 else if(18<a && a<=60){
	console.log("взрослый");
}
if(a>60){console.log("пожилой");}

let str1 = 'xxx';
let str2 = 'yyy';
let txt  = 'aaa ' + str1 + ' bbb ' + str2 + ' ccc'; 
console.log(txt);
	
	
	
	 let sw=	prompt("enter age",1);
	switch(sw){
		case 0:	
			console.log("11");
			break;
		case 1:
			console.log("11111");
			break;
		case 2:
			console.log("11");
			break;
		default:
		console.log("222");
			break;
		
	}
