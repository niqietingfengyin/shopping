$(function(){
         $('#cart').click(function(){
								
								var siz=$('.pro_size strong').text();
								var color=$('.color_change strong').text();
								var num=$('#num_sort').val();
								
								var pri=num*200;
								alert('Thank you for your shopping.\n'
								        +'your products:\n'
										+'size:'+siz+'\n'
										+'color:'+color+'\n'
										+'num:'+num+'\n'
										+'price:'+pri);
								alert('您已经成功下单！');
		 
		                              });      
            })