$(function(){
    $('.num > li').hover(function(){ 
	                            $(this).addClass('on');
								var k=$(this).text();
								$('.slider').animate({top:'-'+(k-1)*150+'px'},300);
								
                                 },
	                       function(){ 
						         $(this).removeClass('on');
								     });
	
	var i=0;
	function show(){
	            if(i<5)
				{   
				$('.num >li:eq('+i+')').addClass('on').siblings().removeClass('on');
	            $('.slider').animate({top:'-'+i*150+'px'},500);
			      i++;
				}
				else 
				  {
				     $('.slider').animate({top:'0px'},500);
					 i=0;
				  }
                 }
               setInterval(show,3000);	   
             });