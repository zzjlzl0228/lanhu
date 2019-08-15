window.onload = function () {
	// 技术体系画布
	var jstx = document.getElementById('jstx')
	var ctx = jstx.getContext("2d");
	var img1 = document.getElementById('img1')
	
	img1.onload = function() {
		ctx.drawImage(img1, 0, 0)
	}
	
	ctx.beginPath();
	ctx.arc(176, 108, 5, 0, 2 * Math.PI);
	ctx.closePath()
	ctx.fillStyle = '#f39700';
	ctx.strokeStyle = '#f39700';
	ctx.lineWidth = 1;
	ctx.fill();
	ctx.stroke();
	
	ctx.font = "14px Arial";
	// 设置对齐方式
	ctx.textAlign = "left";
	// 设置填充颜色
	ctx.fillStyle = "#FFFFFF";
	// 设置字体内容，以及在画布上的位置
	ctx.fillText("技术体系", 190, 115);
	
	
	ctx.drawImage(img1, 190, 50)
	ctx.font = "12px Arial";
	ctx.textAlign = "left";
	ctx.fillStyle = "#ccc";
	ctx.fillText("系统", 205, 55);
	
	
	ctx.drawImage(img1, 100, 50)
	ctx.font = "12px Arial";
	ctx.textAlign = "right";
	ctx.fillStyle = "#ccc";
	ctx.fillText("安全", 95, 55);
	
	
	ctx.drawImage(img1, 60, 100)
	ctx.font = "12px Arial";
	ctx.textAlign = "right";
	ctx.fillStyle = "#ccc";
	ctx.fillText("工程效率", 55, 105);
	
	ctx.drawImage(img1, 120, 140)
	ctx.font = "12px Arial";
	ctx.textAlign = "right";
	ctx.fillStyle = "#ccc";
	ctx.fillText("企业智能平台", 160, 165);
	
	// 画线
	ctx.beginPath(); // 开始路径绘制
	ctx.moveTo(176, 108); // 设置路径起点，坐标为(20,20)
	ctx.lineTo(193, 51); // 绘制一条到(200,20)的直线
	ctx.lineTo(103, 52);
	ctx.closePath();
	ctx.lineWidth = 1.0; // 设置线宽
	ctx.strokeStyle = "#CCCCCC"; // 设置线的颜色
	ctx.stroke(); // 进行线的着色，这时整条线才变得可见
	
	ctx.beginPath();
	ctx.moveTo(176, 108);
	ctx.lineTo(61, 102)
	ctx.lineTo(122, 142)
	ctx.closePath();
	ctx.lineWidth = 1.0;
	ctx.strokeStyle = "#CCCCCC";
	ctx.stroke();
	
	ctx.moveTo(103, 52);
	ctx.lineTo(61, 102);
	ctx.stroke();
	
	
	// 产品特点画布1
	var cptd1 = document.getElementById('cptd-1');
	var cv = cptd1.getContext("2d");
	// var img2 = document.getElementById('img2')
	// 
	// img2.onload = function() {
	// 	ctx.drawImage(img2,0,0)
	// }
	// 绘制圆形，并填充颜色
	cv.beginPath();
	cv.arc(110, 80, 5, 0, 2 * Math.PI);
	// 改变线条的颜色
	// cv.strokeStyle='#9af300';
	cv.closePath()
	cv.fillStyle = '#9af300';
	cv.strokeStyle = '#9af300';
	cv.lineWidth = 1;
	cv.fill();
	cv.stroke();
	
	cv.font = "14px Arial";
	cv.textAlign = "left";
	cv.fillStyle = "#FFFFFF";
	cv.fillText("产品特点", 125, 85);
	
	
	// 数据化
	cv.drawImage(img1, 150, 30);
	cv.font = '12px Arial';
	cv.fillStyle = "#ccc";
	cv.fillText("数据化", 135, 20);
	
	// 平台化
	cv.drawImage(img1, 50, 30);
	cv.fillText("平台化", 10, 40);
	
	// 智能化
	cv.drawImage(img1, 55, 100);
	cv.fillText("智能化", 40, 130);
	
	// 自动化
	cv.drawImage(img1, 140, 120);
	cv.fillText("自动化", 150, 125);
	
	
	cv.beginPath();
	cv.moveTo(110, 80);
	cv.lineTo(153, 32);
	cv.lineTo(50, 32);
	cv.closePath();
	cv.lineWidth = 1.0;
	cv.strokeStyle = "#CCCCCC";
	cv.stroke();
	
	cv.beginPath();
	cv.moveTo(110, 80);
	cv.lineTo(57, 103)
	cv.lineTo(145, 122)
	cv.closePath();
	cv.lineWidth = 1.0;
	cv.strokeStyle = "#CCCCCC";
	cv.stroke();
	
	cv.moveTo(52, 32);
	cv.lineTo(57, 103);
	cv.stroke();
	
	cv.moveTo(153, 32);
	cv.lineTo(143, 122);
	cv.stroke();
	
	
	// 产品特点-2
	
	var cptd1 = document.getElementById('cptd-2');
	var cv = cptd1.getContext("2d");
	
	// 绘制圆形，并填充颜色
	cv.beginPath();
	cv.arc(120, 75, 5, 0, 2 * Math.PI);
	// 改变线条的颜色
	// cv.strokeStyle='#9af300';
	cv.closePath()
	cv.fillStyle = '#f3e300';
	cv.strokeStyle = '#f3e300';
	cv.lineWidth = 1;
	cv.fill();
	cv.stroke();
	
	cv.font = "14px Arial";
	cv.textAlign = "left";
	cv.fillStyle = "#FFFFFF";
	cv.fillText("产品特点", 130, 80);
	
	// 数据化
	cv.drawImage(img1, 100, 20);
	cv.font = '12px Arial';
	cv.fillStyle = "#ccc";
	cv.fillText("数据化", 55, 28);
	
	// 平台化
	cv.drawImage(img1, 170, 140);
	cv.fillText("平台化", 125, 148);
	
	// 智能化
	cv.drawImage(img1, 55, 100);
	cv.fillText("智能化", 40, 130);
	
	
	cv.beginPath();
	cv.moveTo(118, 75);
	cv.lineTo(103, 20);
	cv.lineTo(58, 100);
	cv.closePath();
	cv.lineWidth = 1.0;
	cv.strokeStyle = "#CCCCCC";
	cv.stroke();
	
	cv.beginPath();
	cv.moveTo(118, 75);
	cv.lineTo(58, 100)
	cv.lineTo(175, 143)
	cv.closePath();
	cv.lineWidth = 1.0;
	cv.strokeStyle = "#CCCCCC";
	cv.stroke();
	
	
	
	// 优势
	var youshi = document.getElementById('youshi');
	var cx = youshi.getContext("2d");
	
	// 绘制圆形，并填充颜色
	cx.beginPath();
	cx.arc(95, 100, 5, 0, 2 * Math.PI);
	cx.closePath()
	cx.fillStyle = '#a300f3';
	cx.strokeStyle = '#a300f3';
	cx.lineWidth = 1;
	cx.fill();
	cx.stroke();
	
	cx.font = "14px Arial";
	cx.textAlign = "left";
	cx.fillStyle = "#FFFFFF";
	cx.fillText("我们的优势", 10, 105);
	
	
	
	
	// 智能大数据
	
	cx.drawImage(img1, 60, 140);
	cx.font = '12px Arial';
	cx.fillStyle = "#ccc";
	cx.fillText("智能大数据", 75, 148);
	
	
	// 多元化信息服务
	cx.drawImage(img1, 200, 80);
	cx.fillText("多元化信息服务", 210, 85);
	
	// 全方位业务生态圈
	cx.beginPath();
	cx.arc(92, 30, 5, 0, 2 * Math.PI);
	// 改变线条的颜色
	// cx.strokeStyle='#9af300';
	cx.closePath()
	cx.fillStyle = '#FFFFFF';
	cx.strokeStyle = '#FFFFFF';
	cx.lineWidth = 0.5;
	cx.fill();
	cx.stroke();
	// cx.drawImage(img1, 90, 30);
	cx.fillText("全方位业务生态圈", 105, 35);
	
	cx.beginPath();
	cx.moveTo(95, 100);
	cx.lineTo(62, 143);
	cx.lineTo(205, 82);
	cx.closePath();
	cx.lineWidth = 1.0;
	cx.strokeStyle = "#CCCCCC";
	cx.stroke();
	
	cx.beginPath();
	cx.moveTo(95, 100);
	cx.lineTo(92, 31);
	cx.lineTo(205, 82);
	cx.closePath();
	cx.lineWidth = 1.0;
	cx.strokeStyle = "#CCCCCC";
	cx.stroke();
	
	
	// 案例 
	var anli = document.getElementById('anli');
	var ctex = anli.getContext("2d");
	
	// 绘制圆形，并填充颜色
	ctex.beginPath();
	ctex.arc(95, 130, 5, 0, 2 * Math.PI);
	// 改变线条的颜色
	// ctex.strokeStyle='#9af300';
	ctex.closePath()
	ctex.fillStyle = '#cc8cb1';
	ctex.strokeStyle = '#cc8cb1';
	ctex.lineWidth = 1;
	ctex.fill();
	ctex.stroke();
	
	ctex.font = "14px Arial";
	ctex.textAlign = "left";
	ctex.fillStyle = "#FFFFFF";
	ctex.fillText("企业案例", 25, 135);
	
	ctex.drawImage(img1, 135, 80);
	ctex.beginPath();
	ctex.arc(135, 80, 5, 0, 2 * Math.PI);
	// 改变线条的颜色
	ctex.strokeStyle = '#9af300';
	ctex.font = "12px Arial";
	ctex.textAlign = "left";
	ctex.fillStyle = "#CCCCCC";
	ctex.fillText("晨阳进出口公司官网制作", 150, 85);
	
	// 秒成集团APP制作
	ctex.drawImage(img1, 85, 40);
	ctex.fillText("秒成集团APP制作", 40, 25);
	
	ctex.beginPath();
	ctex.moveTo(95, 130);
	ctex.lineTo(140, 83);
	ctex.lineTo(88, 40);
	ctex.closePath();
	ctex.lineWidth = 1.0;
	ctex.strokeStyle = "#CCCCCC";
	ctex.stroke();
	
	
	
	
	
}