function $()
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
{alert('Пауза');
$('MyDiv1').style.borderBottom='2px';
$('MyDiv1').style.borderStyle='solid';
$('MyDiv1').style.margin='5px';
$('MyDiv1').style.clear='both';
$('MyDiv1').style.backgroundPosition='centre';}


function f2()
{alert('Пауза');
$('MyDiv2').style.borderBottom='2px';
$('MyDiv2').style.borderStyle='solid';
$('MyDiv2').style.margin='5px';
$('MyDiv2').style.clear='both';
$('MyDiv2').style.backgroundPosition='centre';}


function f3()
{alert('Пауза');
$('MyDiv1').style.borderBottom='2px';
$('MyDiv1').style.borderStyle='solid';
$('MyDiv1').style.margin='5px';
$('MyDiv1').style.clear='both';
$('MyDiv1').style.backgroundPosition='centre';}


function f4()
{alert('Пауза');
$('MyDiv1').style.borderBottom='2px';
$('MyDiv1').style.borderStyle='solid';
$('MyDiv1').style.margin='5px';
$('MyDiv1').style.clear='both';
$('MyDiv1').style.backgroundPosition='centre';}


function f5()
{alert('Пауза');
$('MyDiv1').style.borderBottom='2px';
$('MyDiv1').style.borderStyle='solid';
$('MyDiv1').style.margin='5px';
$('MyDiv1').style.clear='both';
$('MyDiv1').style.backgroundPosition='centre';}


function f6()
{alert('Пауза');
$('MyDiv1').style.borderBottom='2px';
$('MyDiv1').style.borderStyle='solid';
$('MyDiv1').style.margin='5px';
$('MyDiv1').style.clear='both';
$('MyDiv1').style.backgroundPosition='centre';}


function f7()
{alert('Пауза');
$('MyDiv1').style.borderBottom='2px';
$('MyDiv1').style.borderStyle='solid';
$('MyDiv1').style.margin='5px';
$('MyDiv1').style.clear='both';
$('MyDiv1').style.backgroundPosition='centre';}
