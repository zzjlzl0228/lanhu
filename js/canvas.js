window.onload = function() {
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
	ctx.isPointInPath(50, 50);
	ctx.isPointInPath(5, 5);
	ctx.stroke();

	ctx.font = "14px Arial";
	// 设置对齐方式
	ctx.textAlign = "left";
	// 设置填充颜色
	ctx.fillStyle = "#FFFFFF";
	// 设置字体内容，以及在画布上的位置
	ctx.fillText("技术体系", 190, 115);


	ctx.drawImage(img1, 192, 46)
	ctx.font = "12px Arial";
	ctx.textAlign = "left";
	ctx.fillStyle = "#ccc";
	ctx.fillText("系统", 205, 55);


	ctx.drawImage(img1, 100, 48)
	ctx.font = "12px Arial";
	ctx.textAlign = "right";
	ctx.fillStyle = "#ccc";
	ctx.fillText("安全", 95, 55);


	ctx.drawImage(img1, 60, 100)
	ctx.font = "12px Arial";
	ctx.textAlign = "right";
	ctx.fillStyle = "#ccc";
	ctx.fillText("工程效率", 55, 105);

	ctx.drawImage(img1, 122, 138)
	ctx.font = "12px Arial";
	ctx.textAlign = "right";
	ctx.fillStyle = "#ccc";
	ctx.fillText("企业智能平台", 160, 165);


	// 添加鼠标进入事件
	// jstx.addEventListener('click', function(e) {
	// 	
	// 	p = getEventPosition(e);
	// 	if (ctx.isPointInPath(p.x, p.y)) {
	// 		//点击了矩形  
	// 		
	// 	}
	// }, false);



	function drawDynamicLine(x1, y1, x2, y2) {
		if (x1 == x2) {
			drawVerticalLine(x1, y1, x2, y2); /*斜率不存在的情况*/
		} else {
			drawCommonLine(x1, y1, x2, y2); /*斜率为正或者负或者0*/
		}

		/*k存在的情况*/
		function drawCommonLine(x1, y1, x2, y2) {

			//y=kx+b
			var k = (y2 - y1) / (x2 - x1) //斜率k     正 负 0
			var b = y1 - k * x1 //常数b
			var i = 0;
			var flag = compare(x1, x2);

			function draw() {
				var xi = x1 + i;
				var yi = k * xi + b;
				var xj = x1 + i + 5 //控制步长决定绘制的是虚线还是实线
				var yj = k * xj + b;
				drawLine(xi, yi, xj, yj);
				i += 5 * flag;
				if (Math.abs(i) <= Math.abs(x1 - x2)) {
					window.setTimeout(function() {
						draw();
					}, 50);
				}
			}
			draw();
		}

		/*k不存在，也就是垂直的情况*/
		function drawVerticalLine(x1, y1, x2, y2) {
			var i = 0;
			var flag = compare(y1, y2);

			function draw() {
				var yi = y1 + i;
				var yj = y1 + i + 5 * flag;
				drawLine(x1, yi, x2, yj);
				i += 5 * flag;
				if (Math.abs(i) <= Math.abs(y1 - y2)) {
					window.setTimeout(function() {
						draw();
					}, 50);
				}
			}
			draw();
		}

		/*比较函数*/
		function compare(a, b) {
			if (a < b) {
				return 1;
			} else {
				return -1;
			}
		}


		/*线条片段*/
		function drawLine(x1, y1, x2, y2) {
			ctx.beginPath();
			ctx.moveTo(x1, y1);
			ctx.lineTo(x2, y2);
			ctx.lineWidth = 1;
			ctx.strokeStyle = "#CCCCCC";
			ctx.stroke();
			ctx.closePath();
		}

		/*清除画布*/
		function clear() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		}
	}
	drawDynamicLine(176, 108, 195, 48);
	drawDynamicLine(176, 108, 103, 52);
	drawDynamicLine(176, 108, 61, 102);
	drawDynamicLine(176, 108, 122, 142);


	drawDynamicLine(103, 50, 193, 50);
	drawDynamicLine(61, 102, 103, 52);
	drawDynamicLine(122, 140, 61, 102);




















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
	cv.drawImage(img1, 59, 100);
	cv.fillText("智能化", 40, 130);

	// 自动化
	cv.drawImage(img1, 142, 128);
	cv.fillText("自动化", 155, 135);

	function drawDynamicLine1(x1, y1, x2, y2) {
		if (x1 == x2) {
			drawVerticalLine(x1, y1, x2, y2); /*斜率不存在的情况*/
		} else {
			drawCommonLine(x1, y1, x2, y2); /*斜率为正或者负或者0*/
		}

		/*k存在的情况*/
		function drawCommonLine(x1, y1, x2, y2) {

			//y=kx+b
			var k = (y2 - y1) / (x2 - x1) //斜率k     正 负 0
			var b = y1 - k * x1 //常数b
			var i = 0;
			var flag = compare(x1, x2);

			function draw() {
				var xi = x1 + i;
				var yi = k * xi + b;
				var xj = x1 + i + 5 //控制步长决定绘制的是虚线还是实线
				var yj = k * xj + b;
				drawLine(xi, yi, xj, yj);
				i += 5 * flag;
				if (Math.abs(i) <= Math.abs(x1 - x2)) {
					window.setTimeout(function() {
						draw();
					}, 50);
				}
			}
			draw();
		}

		/*k不存在，也就是垂直的情况*/
		function drawVerticalLine(x1, y1, x2, y2) {
			var i = 0;
			var flag = compare(y1, y2);

			function draw() {
				var yi = y1 + i;
				var yj = y1 + i + 5 * flag;
				drawLine(x1, yi, x2, yj);
				i += 5 * flag;
				if (Math.abs(i) <= Math.abs(y1 - y2)) {
					window.setTimeout(function() {
						draw();
					}, 50);
				}
			}
			draw();
		}

		/*比较函数*/
		function compare(a, b) {
			if (a < b) {
				return 1;
			} else {
				return -1;
			}
		}


		/*线条片段*/
		function drawLine(x1, y1, x2, y2) {
			cv.beginPath();
			cv.moveTo(x1, y1);
			cv.lineTo(x2, y2);
			cv.lineWidth = 1;
			cv.strokeStyle = "#CCCCCC";
			cv.stroke();
			cv.closePath();
		}

		/*清除画布*/
		function clear() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		}
	}
	drawDynamicLine1(110, 80, 153, 32)
	drawDynamicLine1(110, 80, 50, 32);
	drawDynamicLine1(110, 80, 57, 103);
	drawDynamicLine1(110, 80, 143, 125);

	drawDynamicLine1(153, 32, 50, 32);
	drawDynamicLine1(150, 83, 145, 133);
	drawDynamicLine1(59, 103, 140, 127);
	drawDynamicLine1(57, 70, 52, 35);


	// 	cv.beginPath();
	// 	cv.moveTo(110, 80);
	// 	cv.lineTo(153, 32);
	// 	cv.lineTo(50, 32);
	// 	cv.closePath();
	// 	cv.lineWidth = 1.0;
	// 	cv.strokeStyle = "#CCCCCC";
	// 	cv.stroke();
	// 
	// 	cv.beginPath();
	// 	cv.moveTo(110, 80);
	// 	cv.lineTo(57, 103)
	// 	cv.lineTo(145, 122)
	// 	cv.closePath();
	// 	cv.lineWidth = 1.0;
	// 	cv.strokeStyle = "#CCCCCC";
	// 	cv.stroke();
	// 
	// 	cv.moveTo(52, 32);
	// 	cv.lineTo(57, 103);
	// 	cv.stroke();
	// 
	// 	cv.moveTo(153, 32);
	// 	cv.lineTo(143, 122);
	// 	cv.stroke();


	// 产品特点-2

	var cptd1 = document.getElementById('cptd-2');
	var cv1 = cptd1.getContext("2d");

	// 绘制圆形，并填充颜色
	cv1.beginPath();
	cv1.arc(120, 75, 5, 0, 2 * Math.PI);
	// 改变线条的颜色
	// cv1.strokeStyle='#9af300';
	cv1.closePath()
	cv1.fillStyle = '#f3e300';
	cv1.strokeStyle = '#f3e300';
	cv1.lineWidth = 1;
	cv1.fill();
	cv1.stroke();

	cv1.font = "14px Arial";
	cv1.textAlign = "left";
	cv1.fillStyle = "#FFFFFF";
	cv1.fillText("产品特点", 130, 80);

	// 数据化
	cv1.drawImage(img1, 100, 20);
	cv1.font = '12px Arial';
	cv1.fillStyle = "#ccc";
	cv1.fillText("数据化", 55, 28);

	// 平台化
	cv1.drawImage(img1, 170, 140);
	cv1.fillText("平台化", 125, 148);

	// 智能化
	cv1.drawImage(img1, 55, 100);
	cv1.fillText("智能化", 40, 130);

	function drawDynamicLine2(x1, y1, x2, y2) {
		if (x1 == x2) {
			drawVerticalLine(x1, y1, x2, y2); /*斜率不存在的情况*/
		} else {
			drawCommonLine(x1, y1, x2, y2); /*斜率为正或者负或者0*/
		}

		/*k存在的情况*/
		function drawCommonLine(x1, y1, x2, y2) {

			//y=kx+b
			var k = (y2 - y1) / (x2 - x1) //斜率k     正 负 0
			var b = y1 - k * x1 //常数b
			var i = 0;
			var flag = compare(x1, x2);

			function draw() {
				var xi = x1 + i;
				var yi = k * xi + b;
				var xj = x1 + i + 5 //控制步长决定绘制的是虚线还是实线
				var yj = k * xj + b;
				drawLine(xi, yi, xj, yj);
				i += 5 * flag;
				if (Math.abs(i) <= Math.abs(x1 - x2)) {
					window.setTimeout(function() {
						draw();
					}, 50);
				}
			}
			draw();
		}

		/*k不存在，也就是垂直的情况*/
		function drawVerticalLine(x1, y1, x2, y2) {
			var i = 0;
			var flag = compare(y1, y2);

			function draw() {
				var yi = y1 + i;
				var yj = y1 + i + 5 * flag;
				drawLine(x1, yi, x2, yj);
				i += 5 * flag;
				if (Math.abs(i) <= Math.abs(y1 - y2)) {
					window.setTimeout(function() {
						draw();
					}, 50);
				}
			}
			draw();
		}

		/*比较函数*/
		function compare(a, b) {
			if (a < b) {
				return 1;
			} else {
				return -1;
			}
		}


		/*线条片段*/
		function drawLine(x1, y1, x2, y2) {
			cv1.beginPath();
			cv1.moveTo(x1, y1);
			cv1.lineTo(x2, y2);
			cv1.lineWidth = 1;
			cv1.strokeStyle = "#CCCCCC";
			cv1.stroke();
			cv1.closePath();
		}

		/*清除画布*/
		function clear() {
			cv1.clearRect(0, 0, canvas.width, canvas.height);
		}
	}
	drawDynamicLine2(118, 65, 103, 20);
	drawDynamicLine2(118, 75, 58, 100);
	drawDynamicLine2(118, 75, 175, 143);


	drawDynamicLine2(100, 30, 58, 100);
	drawDynamicLine2(173, 144, 58, 100)
	// 	cv1.beginPath();
	// 	cv1.moveTo(118, 75);
	// 	cv1.lineTo(103, 20);
	// 	cv1.lineTo(58, 100);
	// 	cv1.closePath();
	// 	cv1.lineWidth = 1.0;
	// 	cv1.strokeStyle = "#CCCCCC";
	// 	cv1.stroke();
	// 
	// 	cv1.beginPath();
	// 	cv1.moveTo(118, 75);
	// 	cv1.lineTo(58, 100)
	// 	cv1.lineTo(175, 143)
	// 	cv1.closePath();
	// 	cv1.lineWidth = 1.0;
	// 	cv1.strokeStyle = "#CCCCCC";
	// 	cv1.stroke();



	// 优势
	var youshi = document.getElementById('youshi');
	var cx = youshi.getContext("2d");

	// 绘制圆形，并填充颜色
	cx.beginPath();
	cx.arc(100, 100, 5, 0, 2 * Math.PI);
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
	cx.drawImage(img1, 199, 79);
	cx.fillText("多元化信息服务", 210, 85);

	// 全方位业务生态圈
	cx.beginPath();
	cx.arc(90, 30, 5, 0, 2 * Math.PI);
	// 改变线条的颜色
	// cx.strokeStyle='#9af300';
	cx.closePath()
	cx.fillStyle = '#FFFFFF';
	cx.strokeStyle = '#FFFFFF';
	cx.lineWidth = 0.5;
	cx.fill();
	cx.stroke();
	// cx.scale(1.2,1.2)
	// 中圆
	cx.beginPath();
	cx.arc(90, 30, 5, 0, 2 * Math.PI);
	cx.closePath()
	cx.fillStyle = '#CCCCCC';
	cx.strokeStyle = 'rgba(148, 155, 179, 0.7)';
	cx.lineWidth = 16;
	cx.fill();
	cx.stroke();
	// 大圆
	cx.beginPath();
	cx.arc(90, 30, 5, 0, 2 * Math.PI);
	cx.closePath()
	cx.fillStyle = '#CCCCCC';
	cx.strokeStyle = 'rgba(102, 112, 147, 0.7)';
	cx.lineWidth = 36;
	cx.fill();
	cx.stroke();
	// cx.drawImage(img1, 90, 30);
	cx.fillText("全方位业务生态圈", 105, 35);


	function drawDynamicLine3(x1, y1, x2, y2) {
		if (x1 == x2) {
			drawVerticalLine3(x1, y1, x2, y2); /*斜率不存在的情况*/
		} else {
			drawCommonLine3(x1, y1, x2, y2); /*斜率为正或者负或者0*/
		}

		/*k存在的情况*/
		function drawCommonLine3(x1, y1, x2, y2) {

			//y=kx+b
			var k = (y2 - y1) / (x2 - x1) //斜率k     正 负 0
			var b = y1 - k * x1 //常数b
			var i = 0;
			var flag = compare(x1, x2);

			function draw() {
				var xi = x1 + i;
				var yi = k * xi + b;
				var xj = x1 + i + 5 //控制步长决定绘制的是虚线还是实线
				var yj = k * xj + b;
				drawLine(xi, yi, xj, yj);
				i += 5 * flag;
				if (Math.abs(i) <= Math.abs(x1 - x2)) {
					window.setTimeout(function() {
						draw();
					}, 50);
				}
			}
			draw();
		}

		/*k不存在，也就是垂直的情况*/
		function drawVerticalLine3(x1, y1, x2, y2) {
			var i = 0;
			var flag = compare(y1, y2);

			function draw() {
				var yi = y1 + i;
				var yj = y1 + i + 5 * flag;
				drawLine(x1, yi, x2, yj);
				i += 5 * flag;
				if (Math.abs(i) <= Math.abs(y1 - y2)) {
					window.setTimeout(function() {
						draw();
					}, 50);
				}
			}
			draw();
		}

		/*比较函数*/
		function compare(a, b) {
			if (a < b) {
				return 1;
			} else {
				return -1;
			}
		}


		/*线条片段*/
		function drawLine(x1, y1, x2, y2) {
			cx.beginPath();
			cx.moveTo(x1, y1);
			cx.lineTo(x2, y2);
			cx.lineWidth = 1;
			cx.strokeStyle = "#CCCCCC";
			cx.stroke();
			cx.closePath();
		}

		/*清除画布*/
		function clear() {
			cx.clearRect(0, 0, canvas.width, canvas.height);
		}
	}
	drawDynamicLine3(100, 100, 62, 145);
	drawDynamicLine3(100, 100, 200, 82)
	drawDynamicLine3(95, 65, 90, 30)

	drawDynamicLine3(62, 145, 90, 32);
	drawDynamicLine3(90, 32, 200, 82);
	drawDynamicLine3(200, 82, 62, 145);
	// 	cx.beginPath();
	// 	cx.moveTo(95, 100);
	// 	cx.lineTo(62, 143);
	// 	cx.lineTo(205, 82);
	// 	cx.lineTo(92, 31);
	// 	cx.closePath();
	// 	cx.lineWidth = 1;
	// 	cx.strokeStyle = "#CCCCCC";
	// 	cx.stroke();
	// 
	// 	cx.moveTo(95, 100);
	// 	cx.lineTo(205, 82);
	// 	cx.lineWidth = 1;
	// 	cx.stroke();

	// 案例 
	var anli = document.getElementById('anli');
	var ctex = anli.getContext("2d");

	// 绘制圆形，并填充颜色
	ctex.beginPath();
	ctex.arc(98, 130, 5, 0, 2 * Math.PI);
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

	ctex.drawImage(img1, 137, 80);
	ctex.beginPath();
	ctex.arc(135, 80, 5, 0, 2 * Math.PI);
	// 改变线条的颜色
	ctex.strokeStyle = '#9af300';
	ctex.font = "12px Arial";
	ctex.textAlign = "left";
	ctex.fillStyle = "#CCCCCC";
	ctex.fillText("晨阳进出口公司官网制作", 150, 85);

	// 秒成集团APP制作
	ctex.drawImage(img1, 87, 40);
	ctex.fillText("秒成集团APP制作", 40, 25);

	// ctex.beginPath();
	// ctex.moveTo(95, 130);
	// ctex.lineTo(140, 83);
	// ctex.lineTo(88, 40);
	// ctex.closePath();
	// ctex.lineWidth = 1.0;
	// ctex.strokeStyle = "#CCCCCC";
	// ctex.stroke();

	function drawDynamicLine4(x1, y1, x2, y2) {
		if (x1 == x2) {
			drawVerticalLine(x1, y1, x2, y2); /*斜率不存在的情况*/
		} else {
			drawCommonLine(x1, y1, x2, y2); /*斜率为正或者负或者0*/
		}

		/*k存在的情况*/
		function drawCommonLine(x1, y1, x2, y2) {

			//y=kx+b
			var k = (y2 - y1) / (x2 - x1) //斜率k     正 负 0
			var b = y1 - k * x1 //常数b
			var i = 0;
			var flag = compare(x1, x2);

			function draw() {
				var xi = x1 + i;
				var yi = k * xi + b;
				var xj = x1 + i + 5 //控制步长决定绘制的是虚线还是实线
				var yj = k * xj + b;
				drawLine(xi, yi, xj, yj);
				i += 5 * flag;
				if (Math.abs(i) <= Math.abs(x1 - x2)) {
					window.setTimeout(function() {
						draw();
					}, 50);
				}
			}
			draw();
		}

		/*k不存在，也就是垂直的情况*/
		function drawVerticalLine(x1, y1, x2, y2) {
			var i = 0;
			var flag = compare(y1, y2);

			function draw() {
				var yi = y1 + i;
				var yj = y1 + i + 5 * flag;
				drawLine(x1, yi, x2, yj);
				i += 5 * flag;
				if (Math.abs(i) <= Math.abs(y1 - y2)) {
					window.setTimeout(function() {
						draw();
					}, 50);
				}
			}
			draw();
		}

		/*比较函数*/
		function compare(a, b) {
			if (a < b) {
				return 1;
			} else {
				return -1;
			}
		}


		/*线条片段*/
		function drawLine(x1, y1, x2, y2) {
			ctex.beginPath();
			ctex.moveTo(x1, y1);
			ctex.lineTo(x2, y2);
			ctex.lineWidth = 1;
			ctex.strokeStyle = "#CCCCCC";
			ctex.stroke();
			ctex.closePath();
		}

		/*清除画布*/
		function clear() {
			ctex.clearRect(0, 0, canvas.width, canvas.height);
		}
	}
	drawDynamicLine4(95,130,140,83);

	drawDynamicLine4(95,90,88,28);
	drawDynamicLine4(88,40,140,83);
}
