(function ($) {

	$.fn.floatArea = function(options) {
		var defaults = {
			"duration" : 900,
			"top" : 100
		}
		var setting = $.extend(defaults, options);
		
		var name = this.selector;
		$(name).css("top", setting['top']);
		$(name).css("position", "absolute");
		
		var y = parseInt($(name).css("top").substring(0,$(name).css("top").indexOf("px")));

		$(window).scroll(function () {
			var offset = y + $(document).scrollTop() + "px";
			$(name).animate({
				top:offset
				}, {
				duration: setting['duration'],
				queue:false
			});
		});
	}
	
})(jQuery);
