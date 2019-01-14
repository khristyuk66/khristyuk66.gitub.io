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
function middle()

{
var A = parseInt(document.getElementById('A').value),
B = parseInt(document.getElementById('B').value),
 i, j, Nums = [];		
for (i = A; i <= B; i++)		
{
for (j = 0; j < i; j++) Nums.push(i);
}
console.log(Nums);
document.getElementById('result').innerHTML = Nums.join(", ");
}