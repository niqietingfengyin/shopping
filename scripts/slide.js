$(function(){
  $('.module_up_down').toggle(function(){
                           $updown=$(this); //为了修改隐藏后 module的图标
                           $(this).prev().slideToggle('normal',function(){   //其中的$(this)指代$('.module_up_down').prev()
                                 //alert($(this).text());
                                $('img',$updown).attr('src','images/up.gif');
   
                                                      });
                                       },
								function(){
								    $updown=$(this); //为了修改隐藏后 module的图标
                                    $(this).prev().slideToggle('slow',function(){   
                                    //alert($(this).text());
                                     $('img',$updown).attr('src','images/down.gif');
   
                                                      });
								          });
			 });

/*$(function(){
  $('.module_up_down').toggle(function(){
                                   $(this).prev().hide();
								   $('img',this).attr('src','images/up.gif');
                                         },
                              function(){
							        $(this).prev().show();
									alert($(this).text());
								   $('img',this).attr('src','images/down.gif');
							          })
                           
			 });*/