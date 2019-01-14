﻿﻿﻿function $() 
{ var elements = new Array(); 
for (var i = 0; i < arguments.length; i++) 
{ var element = arguments[i]; 
if (typeof element == 'string') 
element = document.getElementById(element); 
if (arguments.length == 1) 
return element; 
elements.push(element); 
} 
return elements; }

function middle() {

var N = parseInt(document.getElementById('N').value);
var K = parseInt(document.getElementById('K').value);

var summ=0;
for (var i=1;i<=N;i++){

summ= summ + Math.pow(i,K);


//console.log(summ);
document.getElementById('result').innerHTML = summ;



}

}