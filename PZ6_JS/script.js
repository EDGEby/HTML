/*let arr = [];
let n = parseInt(prompt("Enter num",0));
for(let i=0;i<n;i++){
	arr.push(2*i+1);
}
alert(arr);
*/

/*
delete arr[1];
console.log(arr.length);
console.log(arr);
*/

/*let arr = [];
let n = parseInt(prompt("Enter num",1));
for(let i=0;i<n;i++){
	arr.push(2**(i+1));
}
alert(arr);
*/
/*
let arr = [];
let a = parseInt(prompt("Enter num",1));
let d = parseInt(prompt("Enter num",1));
let n = parseInt(prompt("Enter num",1));
for(let i=0;i<n;i++){
	arr.push(a*d**(i+1));
}
alert(arr);
*/

/*
let arr = [1,1];
let n = parseInt(prompt("Enter num",3));
for(let i=2;i<n;i++){
	arr.push(arr[i-1]+arr[i-2]);
}
alert(arr);
*/
/*
let arr = [];
let a = parseInt(prompt("Enter num",1));
let b = parseInt(prompt("Enter num",1));
let n = parseInt(prompt("Enter num",3));
arr.push(a);
arr.push(b);
for(let i=2;i<n;i++){
	let sum=0;
	for(let j=0; j<i;j++){
		sum+=arr[j];
	}
	arr.push(sum);
}
alert(arr);
*/

/*
let arr=[];
let n = parseInt(prompt("Enter num",1));
let k=0;
for(let i=0;i<n;i++){
	arr.push(n+i);
	if(arr[i]%2!=0){
		console.log(arr[i]);
		k++;
	}
}
console.log('colvo '+k);
console.log(arr);
*/

/*
let arr=[];
for(let i=0; i<10;i++){
	let x = Math.floor(Math.random()*11);
	arr.push(x);
}
console.log(arr);
con = false;
for(let i=0;i<arr.length;i++){
	if(arr[i]<arr.at(-1)){
		con=true;
		console.log(arr[i]+ ' pos ' + (i+1));
		break;
	}
}
if(!con) console.log(0);
*/

let arr=[];
let n = parseInt(prompt("Enter num",1));
let max=0;
let maxmax=0;
let temp=0;
let tempArr=0;
let tempmax=[];
for(let i=0; i<n;i++){
	let x = Math.floor(Math.random()*11);
	arr.push(x);
}
console.log(arr);

for(let i=0;i<n;i++){
	temp=arr[i];
	for(let j=0;j<n;j++){
		if(arr[i]==arr[j]){
			max++;
		}
	}
	if(maxmax==max&& tempmax[tempArr]!=temp){
		for(let k=0;k<tempmax.length;k++){
			tempArr++;
			tempmax[tempArr]=temp;
		}
	}
	if(maxmax<max){
	maxmax=max;
	tempmax[tempArr]=temp;
	}
	
	
	max=0;
}
console.log('colvo '+maxmax);
console.log('num '+tempmax);















