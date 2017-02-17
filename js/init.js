$(function(){
	$('.flexslider').flexslider({
		  animation: "fade"
	
	  });
	$(".thumbnails a").attr('rel', 'gallery').fancybox();

	$("#nav-list li, .scroll_up").click(function(e) {
		e.preventDefault();
		 $('html, body').animate({
				scrollTop: $($(this).children("a").attr("href")).offset().top
		 },900);
	 });
	 $(".fancybox").fancybox({
	       				 prevEffect : 'fade',
	       				 nextEffect : 'fade',
	       				 loop       : false,
	       				 closeBtn  : false,
	       				 arrows : false,
	       				 helpers : {
	       				 	overlay : {
	       				   		 css : {
	       				   		 'background-color' : '#999'
	       				    		}
	       				   		 },
	       				 		buttons	: {}
	       				 	},
	       				afterShow: function(){
	       				var curSec = $('.fancybox-inner  div');
	           			var curID = $(curSec).attr('id');
	       				var curID1 = curID.replace('inline','')
	       				var curNav = $.find('a[id='+curID1+']');
	       	  			$('a').removeClass('ActiveClass');
	           			$(curNav).addClass('ActiveClass');
	       						},
	       				afterClose: function(){
	       				setTimeout( function()
	             {
	                $("a").removeClass('ActiveClass');
	             }, 3000);
	       				}
	       			});
	       			
 });