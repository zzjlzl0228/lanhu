// 技术体系

let t;

// 封装动画
function donghua(c) {

	let $c2 = $(c).prev();

	let $c1 = $c2.prev();
	let r = parseInt($c2.attr("r"));
	let opacity = parseFloat($c2.attr("opacity"));

	if (opacity <= 0.9) {
		r++;
		$c2.attr("r", r);
		$c1.attr("r", r * 1.5)

		opacity -= 0.05;

		$c2.attr('opacity', opacity);
		$c1.attr('opacity', opacity);
	}
	// 当opacity<=0时要重新将opacity,半径设为初始状态,否则不会执行
	if (opacity <= 0) {
		$c2.attr('opacity', 0.9);
		$c1.attr('opacity', 0.9);
		$c2.attr("r", 5);
		$c1.attr("r", 5);
	}
}

// 传入得参数为元素，终点坐标
function line(c, x12, y12) {
	// 获取得是起点坐标
	let x2 = parseFloat($(c).attr('x2'));
	let y2 = parseFloat($(c).attr('y2'));
	if (x2 <= x12 && y2 <= y12) {
		x2 += (Math.abs(x12 - x2)) / 5;
		y2 += (Math.abs(y12 - y2)) / 5;
		$(c).attr('x2', x2 + '%');
		$(c).attr('y2', y2 + '%');
	} else if (x2 >= x12 && y2 <= y12) {
		x2 -= (Math.abs(x12 - x2)) / 5;
		y2 += (Math.abs(y12 - y2)) / 5;
		$(c).attr('x2', x2 + '%');
		$(c).attr('y2', y2 + '%');
	} else if (x2 <= x12 && y2 >= y12) {
		x2 += (Math.abs(x12 - x2)) / 5;
		y2 -= (Math.abs(y12 - y2)) / 5;
		$(c).attr('x2', x2 + '%');
		$(c).attr('y2', y2 + '%');
	} else {
		x2 -= (Math.abs(x12 - x2)) / 5;
		y2 -= (Math.abs(y12 - y2)) / 5;
		$(c).attr('x2', x2 + '%');
		$(c).attr('y2', y2 + '%');
	}
}
// 封装让圆显示的函数
function cshow(c) {
	$(c).prev().css('display', 'block');
	$(c).prev().prev().css('display', 'block');
}


$('#c03,#area').mouseover(function(event) {

	cshow($('#c03'))
	t = setInterval(function() {

		donghua($('#c03'))

		line('#line01',75.5,42);
		line('#line02',55,38);
		line('#line03',35,53.5);
		line('#line04',51.5,85);
		line('#line05',35,53.5)
		line('#line06',55,38);
		line('#line07',75.5,42)


	}, 100);
})


// 封装所有元素的初始值
function initial1() {

	$('#line01,#line02,#line03,#line04').attr('x2', '70%');
	$('#line01,#line02,#line03,#line04').attr('y2', '75%');
	$('#line05').attr('x2', '51.5%');
	$('#line05').attr('y2', '85%');
	$('#line06').attr('x2', '35%');
	$('#line06').attr('y2', '53.5%');
	$('#line07').attr('x2', '55%');
	$('#line07').attr('y2', '38%');
}

// 区域
// $('#area').mouseover(function(){
// 	
// })


// 技术体系
$('#c03,#area').mouseout(function() {
	clearInterval(t)
	$('#c02,#c01').attr('opacity', 0.9);
	$('#c02,#c01').attr("r", 4);
	initial1()
})


// 系统
$('#c13').mouseover(function(event) {
	cshow($('#c13'));
	t = setInterval(function() {
		donghua($('#c13'));

		line1()

	}, 100);
})

$('#c13').mouseout(function() {
	clearInterval(t)
	$('#c12,#c11').attr('opacity', 0.9);
	$('#c12,#c11').attr("r", 4);
	initial1()
})

// 安全
$('#c23').mouseover(function(event) {
	cshow($('#c23'))
	t = setInterval(function() {
		donghua($('#c23'))

		line1()

	}, 100);
})

$('#c23').mouseout(function() {
	clearInterval(t)
	$('#c22,#c21').attr('opacity', 0.9);
	$('#c22,#c21').attr("r", 4);
	initial1()
})

// 工作效率
$('#c33').mouseover(function(event) {
	cshow($('#c33'))
	t = setInterval(function() {
		donghua($('#c33'))

		line1()

	}, 100);
})

$('#c33').mouseout(function() {
	clearInterval(t)
	$('#c32,#c31').attr('opacity', 0.9);
	$('#c32,#c31').attr("r", 4);
	initial1()
})

// 企业智能平台
$('#c43').mouseover(function(event) {
	cshow($('#c43'))
	t = setInterval(function() {
		donghua($('#c43'))

		line1()

	}, 100);
})

$('#c43').mouseout(function() {
	clearInterval(t)
	$('#c42,#c41').attr('opacity', 0.9);
	$('#c42,#c41').attr("r", 4);
	initial1()
})



// 产品特点1


function initial2() {

	$('#line11,#line12,#line13,#line14').attr('x2', '60%');
	$('#line11,#line12,#line13,#line14').attr('y2', '50%');
	$('#line15,#line16').attr('x2', '70%');
	$('#line15,#line16').attr('y2', '20%');

	$('#line17,#line18').attr('x2', '50%');
	$('#line17,#line18').attr('y2', '70%');
}

// 产品特点
$('#c203,#area1').mouseover(function() {
	cshow($('#c203'))
	t = setInterval(function() {
		donghua($('#c203'))

		line('#line11', 70, 20);
		line('#line12', 45, 30);
		line('#line13', 50, 70);
		line('#line14', 80, 80);
		line('#line15', 45, 30);
		line('#line16', 80, 80);
		line('#line17', 45, 30);
		line('#line18', 80, 80);

	}, 100);
})

$('#c203,#area1').mouseout(function() {
	clearInterval(t)
	$('#c202,#c201').attr('opacity', 0.9);
	$('#c202,#c201').attr("r", 4);
	initial2()
})

// 数据化
$('#c213').mouseover(function() {
	cshow($('#c213'))
	t = setInterval(function() {
		donghua($('#c213'))

		line('#line11', 70, 20);
		line('#line12', 45, 30);
		line('#line13', 50, 70);
		line('#line14', 80, 80);
		line('#line15', 45, 30);
		line('#line16', 80, 80);
		line('#line17', 45, 30);
		line('#line18', 80, 80);

	}, 100);
})

$('#c213').mouseout(function() {
	clearInterval(t)
	$('#c212,#c211').attr('opacity', 0.9);
	$('#c212,#c211').attr("r", 4);
	initial2()
})

// 平台化
$('#c223').mouseover(function() {
	cshow($('#c223'))
	t = setInterval(function() {
		donghua($('#c223'))

		line('#line11', 70, 20);
		line('#line12', 45, 30);
		line('#line13', 50, 70);
		line('#line14', 80, 80);
		line('#line15', 45, 30);
		line('#line16', 80, 80);
		line('#line17', 45, 30);
		line('#line18', 80, 80);

	}, 100);
})

$('#c223').mouseout(function() {
	clearInterval(t)
	$('#c222,#c221').attr('opacity', 0.9);
	$('#c222,#c221').attr("r", 4);
	initial2()
})

// 智能化
$('#c233').mouseover(function() {
	cshow($('#c233'))
	t = setInterval(function() {
		donghua($('#c233'))

		line('#line11', 70, 20);
		line('#line12', 45, 30);
		line('#line13', 50, 70);
		line('#line14', 80, 80);
		line('#line15', 45, 30);
		line('#line16', 80, 80);
		line('#line17', 45, 30);
		line('#line18', 80, 80);
	}, 100);
})

$('#c233').mouseout(function() {
	clearInterval(t)
	$('#c232,#c231').attr('opacity', 0.9);
	$('#c232,#c231').attr("r", 4);
	initial2()
})

// 自动化
$('#c243').mouseover(function() {
	cshow($('#c243'))
	t = setInterval(function() {
		donghua($('#c243'))

		line('#line11', 70, 20);
		line('#line12', 45, 30);
		line('#line13', 50, 70);
		line('#line14', 80, 80);
		line('#line15', 45, 30);
		line('#line16', 80, 80);
		line('#line17', 45, 30);
		line('#line18', 80, 80);

	}, 100);
})

$('#c243').mouseout(function() {
	clearInterval(t)
	$('#c242,#c241').attr('opacity', 0.9);
	$('#c242,#c241').attr("r", 4);
	initial2()
})

// 产品特点2 

function initial3() {

	$('#line21,#line22,#line23').attr('x2', '70%');
	$('#line21,#line22,#line23').attr('y2', '55%');
	$('#line24').attr('x2', '55%');
	$('#line24').attr('y2', '22%');

	$('#line25').attr('x2', '77%');
	$('#line25').attr('y2', '78%');
}

$('#c303,#area2').mouseover(function() {
	cshow($('#c303'))
	t = setInterval(function() {
		donghua($('#c303'))

		line('#line21', 55, 22);
		line('#line22', 40, 60);
		line('#line23', 77, 78);
		line('#line24', 40, 60);
		line('#line25', 40, 60);


	}, 100);
})

$('#c303,#area2').mouseout(function() {
	clearInterval(t)
	$('#c302,#c301').attr('opacity', 0.9);
	$('#c302,#c301').attr("r", 4);
	initial3()
})

// 数据化
$('#c313').mouseover(function() {
	cshow($('#c313'))
	t = setInterval(function() {
		donghua($('#c313'))

		line('#line21', 55, 22);
		line('#line22', 40, 60);
		line('#line23', 77, 78);
		line('#line24', 40, 60);
		line('#line25', 40, 60);


	}, 100);
})

$('#c313').mouseout(function() {
	clearInterval(t)
	$('#c312,#c311').attr('opacity', 0.9);
	$('#c312,#c311').attr("r", 4);
	initial3()
})

// 智能化
$('#c323').mouseover(function() {
	cshow($('#c323'))
	t = setInterval(function() {
		donghua($('#c323'))

		line('#line21', 55, 22);
		line('#line22', 40, 60);
		line('#line23', 77, 78);
		line('#line24', 40, 60);
		line('#line25', 40, 60);


	}, 100);
})

$('#c323').mouseout(function() {
	clearInterval(t)
	$('#c322,#c321').attr('opacity', 0.9);
	$('#c322,#c321').attr("r", 4);
	initial3()
})

// 平台化
$('#c333').mouseover(function() {
	cshow($('#c333'))
	t = setInterval(function() {
		donghua($('#c333'))

		line('#line21', 55, 22);
		line('#line22', 40, 60);
		line('#line23', 77, 78);
		line('#line24', 40, 60);
		line('#line25', 40, 60);


	}, 100);
})

$('#c333').mouseout(function() {
	clearInterval(t)
	$('#c332,#c331').attr('opacity', 0.9);
	$('#c332,#c331').attr("r", 4);
	initial3()
})

// 我们的优势

function initial4() {

	$('#line31,#line32,#line33').attr('x2', '45%');
	$('#line31,#line32,#line33').attr('y2', '63%');
	$('#line34').attr('x2', '40%');
	$('#line34').attr('y2', '85%');
	$('#line35').attr('x2', '40%');
	$('#line35').attr('y2', '25%');
	$('#line36').attr('x2', '70%');
	$('#line36').attr('y2', '55%');
}

$('#c403,#area3').mouseover(function() {
	cshow($('#c403'))
	t = setInterval(function() {
		donghua($('#c403'))

		line('#line31', 40, 85);
		line('#line32', 70, 55);
		line('#line33', 40, 25);
		line('#line34', 40, 25);
		line('#line35', 70, 55);
		line('#line36', 40, 85);

	}, 100);
})

$('#c403,#area3').mouseout(function() {
	clearInterval(t)
	$('#c402,#c401').attr('opacity', 0.9);
	$('#c402,#c401').attr("r", 4);
	initial4()
})

// 智能大数据
$('#c413').mouseover(function() {
	cshow($('#c413'))
	t = setInterval(function() {
		donghua($('#c413'))

		line('#line31', 40, 85);
		line('#line32', 70, 55);
		line('#line33', 40, 25);
		line('#line34', 40, 25);
		line('#line35', 70, 55);
		line('#line36', 40, 85)

	}, 100);
})

$('#c413').mouseout(function() {
	clearInterval(t)
	$('#c412,#c411').attr('opacity', 0.9);
	$('#c412,#c411').attr("r", 4);
	initial4()
})


// 多元化信息服务
$('#c423').mouseover(function() {
	cshow($('#c423'))
	t = setInterval(function() {
		donghua($('#c423'))

		line('#line31', 40, 85);
		line('#line32', 70, 55);
		line('#line33', 40, 25);
		line('#line34', 40, 25);
		line('#line35', 70, 55);
		line('#line36', 40, 85)

	}, 100);
})

$('#c423').mouseout(function() {
	clearInterval(t)
	$('#c422,#c421').attr('opacity', 0.9);
	$('#c422,#c421').attr("r", 4);
	initial4()
})


// 全方位业务生态圈
$('#c433').mouseover(function() {
	cshow($('#c433'))
	t = setInterval(function() {
		donghua($('#c433'))

		line('#line31', 40, 85);
		line('#line32', 70, 55);
		line('#line33', 40, 25);
		line('#line34', 40, 25);
		line('#line35', 70, 55);
		line('#line36', 40, 85)

	}, 100);
})

$('#c433').mouseout(function() {
	clearInterval(t)
	$('#c432,#c431').attr('opacity', 0.9);
	$('#c432,#c431').attr("r", 4);
	initial4()
})

// 企业案例
function initial5() {

	$('#line41,#line42').attr('x2', '35%');
	$('#line41,#line42').attr('y2', '60%');
	$('#line43').attr('x2', '20%');
	$('#line43').attr('y2', '20%');

}

$('#c503,#area4').mouseover(function() {
	cshow($('#c503'))
	t = setInterval(function() {
		donghua($('#c503'))

		line('#line41', 52, 35);
		line('#line42', 20, 20);
		line('#line43', 52, 35);


	}, 100);
})

$('#c503,#area4').mouseout(function() {
	clearInterval(t)
	$('#c502,#c501').attr('opacity', 0.9);
	$('#c502,#c501').attr("r", 4);
	initial5()
})

// 晨阳进出口公司官网制作
$('#c513').mouseover(function() {
	cshow($('#c513'))
	t = setInterval(function() {
		donghua($('#c513'))

		line('#line41', 52, 35);
		line('#line42', 20, 20);
		line('#line43', 52, 35);


	}, 100);
})

$('#c513').mouseout(function() {
	clearInterval(t)
	$('#c512,#c511').attr('opacity', 0.9);
	$('#c512,#c511').attr("r", 4);
	initial5()
})

// 秒成集团APP制作

$('#c523').mouseover(function() {
	cshow($('#c523'))
	t = setInterval(function() {
		donghua($('#c523'))

		line('#line41', 52, 35);
		line('#line42', 20, 20);
		line('#line43', 52, 35);


	}, 100);
})

$('#c523').mouseout(function() {
	clearInterval(t)
	$('#c522,#c521').attr('opacity', 0.9);
	$('#c522,#c521').attr("r", 4);
	initial5()
})




// if (document.body.clientWidth < 600) {
// 	
// 	var width = document.body.clientWidth,
// 		height = document.body.clientHeight;
// 	// 当视口宽度小于600时给svg添加viewBox属性
// 	setTimeout(function() {
// 		var svg = document.getElementById('svg1');
// 		
// 		svg.setAttribute("viewBox", "0,0," + width * 0.8 + "," + height * + "");
// 		
// 		svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
// 	}, 10);
// }