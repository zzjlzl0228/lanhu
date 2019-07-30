// 鼠标进入图片显示相应提示

$('.cywl').bind({
	'mouseenter':function(){
		$('.wordscrption').css('display','block')
	},
	'mouseleave':function() {
		$('.wordscrption').css('display','none')
	}
})
$('.mypic-1').bind({
	'mouseenter':function(){
		$('.beizhu').css('display','block')
	},
	'mouseleave':function() {
		$('.beizhu').css('display','none')
	}
})

// 合作伙伴
$('.baidu').hover(function(){
	$(this).attr("src","../img/about_logo1_1_img.png")
})

// 品牌文化
$('.culture').find('div').