(function($) {
        
    $.fn.textStream = function() {
        this.each(function() {
            var $element = $(this);
			var str = $element.text();
			var progress = 0;
			
            $element.text('');
			
            var timer = setInterval(function() {
                $element.text(str.substring(0, progress++) + (progress & 1 ? '_' : ''));
                if (progress >= str.length) clearInterval(timer);
            }, 100);
        });
        return this;
    };
    
})(jQuery);