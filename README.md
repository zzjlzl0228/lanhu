# lanhu


 /*改变滚动条样式*/
        .innerbox::-webkit-scrollbar {
            width: 4px;    
            /*height: 4px;*/
        }
        .innerbox::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            background: rgba(0,0,0,0.2);
        }
        .innerbox::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            border-radius: 0;
            background: rgba(0,0,0,0.1);

        }

（css）更改img路径
CSS
#my-img:hover {
    content: url('http://dummyimage.com/100x100/eb00eb/fff');
}


图片的绝对居中
.circle1 {
	width: 700px;
	height: 700px;
	text-align: center;
	margin: 0 auto;

}

.circle1 img {
	width: 600px;
	height: 600px;
	position: absolute;
	top: 50%;
	left: 50%;
	margin-top: -300px;
	margin-left: -300px;
}


解决浏览器字体最小为12px的问题：
display: inline-block;
-webkit-transform: scale(0.75);
font-size: 8px;


四、Canvas绘制线条
    Context对象的beginPath方法表示开始绘制路径，moveTo(x, y)方法设置线段的起点，lineTo(x, y)方法设置线段的终点，stroke方法用来给透明的线段着色。moveto和lineto方法可以多次使用。最后，还可以使用closePath方法，自动绘制一条当前点到起点的直线，形成一个封闭图形，省却使用一次lineto方法。
 <script type="text/javascript">
            //通过id获得当前的Canvas对象
            var canvasDom = document.getElementById("demoCanvas");
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
        </script>
绘制文本
<script type="text/javascript">
            //通过id获得当前的Canvas对象
            var canvasDom = document.getElementById("demoCanvas");
            //通过Canvas Dom对象获取Context的对象
            var context = canvasDom.getContext("2d");
            context.moveTo(200,200);
            
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
        </script>
画圆
var cptd1 = document.getElementById('cptd-1');
var cv = cptd1.getContext("2d");

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

