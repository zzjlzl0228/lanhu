var myimage1 = document.getElementById('myimage-1');
var myimage2 = document.getElementById('myimage-2');
var x = myimage1.style.left;
var y = myimage1.style.top;
var x1 = myimage2.style.left;
var y = myimage2.style.top;
var c = document.getElementById('myCanvas').getContent("2d");

c.moveTo(x,y);
c.lineTo(x1,y1);
c.stroke()
