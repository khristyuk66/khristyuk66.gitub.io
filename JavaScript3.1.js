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

function f1()
{
a=parseFloat($('tx1').value);
	b=parseFloat($('tx2').value);
        c=parseFloat($('tx3').value);
        x1=a;
        x2=b;
        x3=c;
	
if ((a>b>c)(a<b<c))
{$('t4').value=''+b;}
	

else if ((c<a<b)(c>a>b))
{$('t4').value=''+a;}

else if ((b<c<a)(b>c>a))
{$('t4').value=''+c;}

}