$('.aft').click(function() {
	$('.web-content').css('display', 'none');
	$('.images').css('display', 'block');
	$('.num1').hide()
	$('.num2').show()
	console.log(this)
	$('.aft img').css('opacity','0.4')
	$('.bef img').css('opacity','1')
})
$('.bef').click(function() {
	$('.images').css('display', 'none');
	$('.web-content').css('display', 'block');
	$('.num2').hide()
	$('.num1').show()
	$('.bef img').css('opacity','0.4')
	$('.aft img').css('opacity','1')
})

// 点击切换图片
$('.next').click(function() {
	$('.app1,.num1').hide();
	$('.images-1,.num2').show()
	$('.next').css('opacity','0.4')
	$('.prev').css('opacity','1')
	console.log(this)
})
$('.prev').click(function() {
	$('.images-1,.num2').hide()
	$('.app1,.num1').show()
	$('.prev').css('opacity','0.4')
	$('.next').css('opacity','1')
})

$('.next1').click(function() {
	$('.xcx,.num1').hide()
	$('.images-2,.num2').show()
	$('.next1').css('opacity','0.4')
	$('.prev1').css('opacity','1')
	console.log(this)
})
$('.prev1').click(function() {
	$('.images-2,.num2').hide()
	$('.xcx,.num1').show()
	$('.prev1').css('opacity','0.4')
	$('.next1').css('opacity','1')
})


