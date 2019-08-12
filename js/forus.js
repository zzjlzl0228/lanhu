// 鼠标进入图片显示相应提示

// $('.cywl').hover(function(){
// 	$('.wordscrption').css('display', 'block')
// },function(){
// 	$('.wordscrption').css('display', 'none')
// })

$('.xianshi').hover(function(){
	$('.beizhu').show()
},function(){
	$('.beizhu').hide()
})

$('#conference').hover(function(){
	$('.conference').show()
},function(){
	$('.conference').hide()
})
// 合作伙伴
$('.baidu').hover(function() {
	$(this).attr("src", "../img/about_logo1_1_img.png")
})


// 品牌文化
$('.culture').find('div').bind({
	'mouseenter': function() {
		$(this).stop().animate({
			top: '-20px'
		}, 100)
	},
	'mouseleave': function() {
		$(this).stop().animate({
			top: '0px'
		}, 100)
	}
})

// 获取元素,点击切换
$('.aft').click(function(){
	$('.bef img').css('opacity','1')
	if($('.num1').is(":visible")){
		$('.pic-1 img').attr('src','../img/advantage-1.png');
		$('.pic-2 img').attr('src','../img/about_advantage3_img.png');
		$('.pic-3 img').attr('src','../img/advantage-2.png');
		$('.pic-2 img').css('opacity','1')
		$('.text-one h4').css('color','black')
		$('.text-one p').css('color','#CCCCCC')
		$('.text-two h4').css('color','#ff852b')
		$('.text-two p').css('color','#ff852b')
		$('.num1').css('display','none')
		$('.num2').css('display','block')
	} else if ($('.num2').is(':visible')){
		console.log("2")
		$('.pic-1 img').attr('src','../img/advantage-2.png')
		$('.pic-2 img').attr('src','../img/advantage-1.png')
		$('.pic-3 img').attr('src','../img/about_advantage3_img.png');
		
		$('.text-two h4').css('color','black')
		$('.text-two p').css('color','#CCCCCC')
		$('.text-three h4').css('color','#ff852b')
		$('.text-three p').css('color','#ff852b')
		$('.num2').css('display','none')
		$('.num3').css('display','block')
		$('.aft img').css('opacity','0.4')
	}else {
		$(".aft").prop("disabled", true);
	}
})

$('.bef').click(function(){
	$('.aft img').css('opacity','1')
	if ($('.num3').is(':visible')){
		$('.pic-1 img').attr('src','../img/advantage-1.png');
		$('.pic-2 img').attr('src','../img/about_advantage3_img.png');
		$('.pic-3 img').attr('src','../img/advantage-2.png');
		$('.text-three h4').css('color','black')
		$('.text-three p').css('color','#CCCCCC')
		$('.text-two h4').css('color','#ff852b')
		$('.text-two p').css('color','#ff852b')
		$('.num3').css('display','none')
		$('.num2').css('display','block')
	} else if ($('.num2').is(':visible')){
		$('.pic-1 img').attr('src','../img/about_advantage3_img.png');
		$('.pic-2 img').attr('src','../img/advantage-2.png');
		$('.pic-3 img').attr('src','../img/advantage-1.png');
		$('.text-two h4').css('color','black')
		$('.text-two p').css('color','#CCCCCC')
		$('.text-one h4').css('color','#ff852b')
		$('.text-one p').css('color','#ff852b')
		$('.num2').css('display','none')
		$('.num1').css('display','block')
		$('.bef img').css('opacity','0.4')
	} else {
		$(".bef").prop("disabled", true);
	}
})


// 橙芽网络
$('.afters').click(function(){
	$('.previous img').css('opacity','1')
	if($('#num1').is(':visible')){
		$('.mypic-1 img').attr('src','../img/Conference-Room.png')
		$('.mypic-2 img').attr('src','../img/about_environment1_img.png')
		$('#num1').css('display','none')
		$('#num2').css('display','block')
		$('.afters img').css('opacity','0.4')
		
	}else {
		$(".afters").prop("disabled", true);
	}
})

$('.previous').click(function(){
	$('.afters img').css('opacity','1')
	if($('#num2').is(':visible')){
		$('.mypic-1 img').attr('src','../img/about_environment1_img.png')
		$('.mypic-2 img').attr('src','../img/Conference-Room.png')
		$('#num2').css('display','none')
		$('#num1').css('display','block')
		$('.previous img').css('opacity','0.4')
	}else {
		$('.previous').prop('disabled',true)
	}
})