$(document).ready(function(){

$(".header-list > li a").each(function(){
    $this = $(this).parents('.header-list > li');
    if(this.href==window.location.href){
        $this.addClass("hoverli");
    }
});
});
