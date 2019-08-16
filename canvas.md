# canvas的基本使用

## 1.使用步骤 

>在html中写canvas标签

```javascript
<canvas id="myCanvas" width="306" height="166" style="border:1px solid #000000"></canvas>
```

>使用js对画布进行操作

```javascript
var c=document.getElementById("myCanvas");
//创建 context 对象
var ctx=c.getContext("2d");
//绘制一个红色的矩形
ctx.fillStyle="#FF0000";
//fillRect(x,y,width,height) 方法定义了矩形当前的填充方式。
ctx.fillRect(0,0,150,75);
```

>绘制线条

```javascript
//定义线条开始坐标
ctx.moveTo(0,0);
 //定义线条结束坐标
ctx.lineTo(200,100);
ctx.stroke();
```

> 绘制圆

```javascript
//单纯的画圆
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
//画有颜色的圆
cv.beginPath();
cv.arc(110,80,5,0,2*Math.PI);
// 改变线条的颜色
//cv.strokeStyle='#9af300';
cv.closePath()
cv.fillStyle = '#9af300';
cv.strokeStyle = '#9af300';
cv.lineWidth = 2;
cv.fill();
cv.stroke();

```

>绘制文本

```javascript
// 设置字体
context.font = "Bold 50px Arial";
// 设置对齐方式
context.textAlign = "left";
// 设置填充颜色
context.fillStyle = "#005600";
// 设置字体内容，以及在画布上的位置
 context.fillText("老马!", 10, 50);
// 绘制空心字
context.strokeText("blog.itjeek.com!", 10, 100);
```

> 画三角形

```javascript
//通过id获得当前的Canvas对象
var canvasDom=document.getElementById("demoCanvas");
//通过Canvas Dom对象获取Context的对象
var context = canvasDom.getContext("2d");
context.beginPath(); // 开始路径绘制
context.moveTo(20, 20); // 设置路径起点，坐标为(20,20)
context.lineTo(200, 200); // 绘制一条到(200,20)的直线
context.lineTo(400, 20);
context.closePath();
context.lineWidth = 2.0; // 设置线宽
context.strokeStyle = "#CC0000"; // 设置线的颜色
context.stroke(); // 进行线的着色，这时整条线才变得可见
```

> 线性渐变

```javascript
// 创建渐变
var grd=ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");
 
// 填充渐变
ctx.fillStyle=grd;
ctx.fillRect(10,10,150,80);
```

> 给填充颜色的实心圆设置透明度

```javascript
ctx.strokeStyle = 'rgba(102, 112, 147, 0.7)';
```





