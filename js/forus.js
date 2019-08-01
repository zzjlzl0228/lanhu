// 鼠标进入图片显示相应提示

// $('.cywl').bind({
// 	'mouseenter': function() {
// 		$('.wordscrption').css('display', 'block')
// 	},
// 	'mouseleave': function() {
// 		$('.wordscrption').css('display', 'none')
// 	}
// })
$('.cywl').hover(function(){
	$('.wordscrption').css('display', 'block')
},function(){
	$('.wordscrption').css('display', 'none')
})
$('.mypic-1').bind({
	'mouseenter': function() {
		$('.beizhu').css('display', 'block')
	},
	'mouseleave': function() {
		$('.beizhu').css('display', 'none')
	}
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
$('.qh-right,.li-two').click(function() {
	$('.cywl,.mypic-1,.mypic-2').css('display', 'none');

	$('.page-two').css('display', 'block');
	$('.num1').hide()
	$('.num2').show()
})
$('.qh-left,.li-one').click(function() {

	$('.page-two').css('display', 'none');
	$('.cywl,.mypic-1,.mypic-2').css('display', 'block');
	$('.num2').hide()
	$('.num1').show()
})

// 企业优势
$('.aft').click(function() {
	$('.list,.pic-1,.pic-2').css('display', 'none');
	$('.pic-3').css('display', 'block');
	$('.bef').css('color', 'black');
	$('.aft').css('color', '#ccc');
})
$('.bef').click(function() {

	$('.pic-3').css('display', 'none');
	$('.list,.pic-1,.pic-2').css('display', 'block');
	$('.bef').css('color', '#ccc');
	$('.aft').css('color', 'black');

})

// 点击切换图片
// $(function() {
// 			var images = [];
// 			var imgs = $("#imgs img");
// 			var index = 0;
// 			var displayLength = $(".mypic-1 img").length;
// 
// 			for (var i = 0; i < imgs.length; i++) {
// 
// 				images.push(imgs[i]);
// 			}
// 			$(".qh-left").click(function() {
// 				if (index == 0) {
// 					
// 					return;
// 				} else 
// 					for (var j = 0; j < displayLength; j++) {
// 						$("#img" + j).attr("src", img[index - 1 + j].src);
// 					}
// 					index--;
// 				}
// 			})
// 
// 			$(".qh-right").click(function() {
// 				if (index == (imgs.length - displayLength)) {
// 					return 0;
// 				} else {
// 					for (var j = 0; j < displayLength; j++) {
// 						$("#img" + j).attr("src", img[j + 1 + index].src);
// 					}
// 					index++;
// 				}
// 
// 			})
