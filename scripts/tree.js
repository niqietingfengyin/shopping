$(function(){
     $tree=$('.m-treeview > li >span');
	$tree.toggle(function(){ 
					                   
					                    $(this).next().slideToggle('fast',function(){   //下面用url是定位到http://localhost/tao/
				                                            $(this).parent().css('background','url("images/treeview-collapsed.gif") no-repeat 0 0'); 
				                                             });
												}
									,function(){
									  $(this).next().slideToggle('fast',function(){
				                                             $(this).parent().css('background','url("images/treeview-expanded.gif") no-repeat 0 0') ;
				                                             });
									});
               
					                           
                         
})