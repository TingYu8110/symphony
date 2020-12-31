$(function(){
	menuActive();
})
.on("click", ".menu__trigger", function(event){
	event.preventDefault();
	var menu  = $(".menu");
	menu.toggleClass("menu--active")
});

function menuActive() {
	var menu = $(".menu")
	if ($(window).width() > 1023) {
		menu.addClass("menu--active");
	}
}