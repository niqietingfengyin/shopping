$(function(){
        var i=1;
		//共三个版面；
        $('.goRight').click(function(){
		           
		                    if(i==3)
							 {
							 $('.prolist_content').animate({left:'0px'},500);
                                i=1;							 
							 }
							else {
							    
		                         $('.prolist_content').animate({left:'-=580px'},500);
     							i=i+1;
								}
                                       });
			
			$('.goLeft').click(function(){
		                  if(i==1)
							 {
							 $('.prolist_content').animate({left:'-'+2*580+'px'},500);
                                i=3;							 
							 }
							else {
							  $('.prolist_content').animate({left:'+=580px'},500); 
								 i=i-1;
								}
                                       });
                            
            })