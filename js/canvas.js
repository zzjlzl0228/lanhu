// var myimage1 = document.getElementById('myimage-1');
// var myimage2 = document.getElementById('myimage-2');
var x = $('#myimage-1').position().left;
var y = $('#myimage-1').position().top;
console.log(x,y)
var x1 = $('#myimage-2').position().left;
var y1 = $('#myimage-2').position().top;
console.log(x1,y1)
var $context = $('#myCanvas')[0]
var c = $context.getContent("2d");

c.moveTo(x,y);
c.lineTo(x1,y1);
c.stroke()
