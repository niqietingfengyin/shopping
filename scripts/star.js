$(function(){
             $('.rating li').click(function(){
			                                var score=$(this).text();
                                            alert('您给此商品的评分是：'+score+'分');
                                           	var ss=$(this).attr('class');
											$(this).parent().removeClass().addClass('rating '+ss+'star');; 
                                            											
			                                 });
              })