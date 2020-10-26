$(document).ready(function(){
	var pageTop = $(document).scrollTop()
	var pageBottom = pageTop + $(window).height()
	var tags = $(".js-animate")
	var texts = $(".js-animate--text");


	for (var i = 0; i < texts.length; i ++) {	
		// 把文字單獨打散為陣列
		var text = $(texts[i]).text().split("");
		
		// 加span包住
		for(var j = 0; j < text.length; j++) {	
			var dur = (1000 / text.length) * j + 'ms';

			if (text[j] === ' ') {
				// 補回空白
				text[j] = "<span class='js-animate__item' style='transition-delay:"+ dur +"'>&nbsp;</span>";
			} else {
				text[j] = "<span class='js-animate__item' style='transition-delay:"+ dur +"'>" + text[j] + "</span>";
			}
		}
		
		// 丟回html
		$(texts[i]).html(text);
	}

	for (var i = 0; i < tags.length; i++) {
		var tag = tags[i]

		if ($(tag).offset().top < pageBottom) {
			$(tag).addClass("js-animate--active")
		} 
	}
});

$(document).on("scroll", function () {
	var pageTop = $(document).scrollTop()
	var pageBottom = pageTop + ($(window).height() * 0.95) // 超過一點
	var tags = $(".js-animate")

	for (var i = 0; i < tags.length; i++) {
		var tag = tags[i]

		if ($(tag).offset().top < pageBottom) {
			$(tag).addClass("js-animate--active")
		} else {
			$(tag).removeClass("js-animate--active")
		}
	}
})

