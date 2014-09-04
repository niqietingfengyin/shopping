$(function(){
        var hh=$('.scrollNews ul li:first').height();
		
      function scroll() {  
	              $('.scrollNews ul').animate({top:'-'+hh+'px'},200,function(){
		                                                   $('.scrollNews ul').css('top',0).find('li:first').appendTo($(this));
		                                                                      });
                          }
		var scrollTimer=setInterval(scroll,2000);
		$('.scrollNews ul').hover(function(){
		                               clearInterval(scrollTimer);  
		                                     }
								 ,function() {
								       
								        scrollTimer=setInterval(scroll,2000);
								               }
								  );
           });