(function($){
	$('.skills li').each(function(num, item){
		var rating = $(item).data('rating'), i, bars=[];
		for(i=1; i<=rating; i++){
			bars.push(i);
		}

		var barSpark = $('<span>').addClass('spark').attr('title', 'Skill level : ' + rating + ' (out of 5)');
		$(item).append(barSpark);
		barSpark.sparkline(bars, {type:'tristate', colorMap:['#afa','#9f9','#7f7','#2f2','green']});
	});
})(jQuery);