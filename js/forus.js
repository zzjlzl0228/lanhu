// 鼠标进入图片显示相应提示
var tips = document.querySelector('.wordscrption');
var mypic1 = document.querySelector('.mypic-1')
mypic1.onmouseenter = function(e) {
	e.stopPropagation();
	
	tips.style.display = 'block';
}
mypic1.onmouseleave = function(e) {
	e.stopPropagation();
	tips.style.display = 'none';
}


