﻿﻿function $() 
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
var t;
var r1=255;
var g1=255;
var b1=255;
function f()
{
var x1=document.getElementById('b11');
x1.style.left=(parseInt(x1.style.left)+100)+'px';
x1.style.top=(parseInt(x1.style.top)+100)+'px';
r1-=100;
g1-=50;
b1-=100;
str1='rgb('+r1+', '+g1+', '+b1+')';
x1.style.backgroundColor=str1;
}
function h()
{t=setInterval('f()',600);}
function g()
{
clearInterval(t);
}