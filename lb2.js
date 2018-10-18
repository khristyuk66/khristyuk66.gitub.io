function $()
{ var elements = new Array();
for (var i = 0; i < arguments.length; i++)
{ var element = arguments[i];
if (typeof element == "string")
element = document.getElementById(element);
if (arguments.length == 1)
return element;
elements.push(element);
}
return elements; }

function tg1()
{
alert('Пауза');
if($("sl1").selectedIndex==0)
$("MyDiv").style.color="red";

if($("sl1").selectedIndex==1)
$("MyDiv").style.color="pink";


if($("sl1").selectedIndex==2)
$("MyDiv").style.color="green";


if($("sl1").selectedIndex==3)
$("MyDiv").style.color="blue";
}