$(function(){
        $('.tab_menu ul li').click(function(){
		                                    $(this).addClass('selected').siblings().removeClass('selected');
                                           // alert($(this).text());		                                   
										   var i=$('.tab_menu ul li').index(this);
											$('.tab_box div:eq('+i+')').removeClass('hide').siblings().addClass('hide');
											});

            })