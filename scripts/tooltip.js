$(function(){
        var x=10;
		var y=20;
         $('a.tooltip').mouseover(function(e){
		                         this.tt=$(this).text();
								this.title='';
								 var showTip='<div class="tip">'+this.tt+'</div>';
								  $('body').append(showTip);
								$('.tip').css({ 'left':(e.pageX+x)+'px',
								                 'top':(e.pageY+y)+'px'})
										 .show('fast');
										// alert($('.tip').css('top'));
				
		                                   })
					   .mouseout(function(){
					                this.title=this.tt;
									$('.tip').remove();
									
					                       })
                        .mousemove(function(e){
						            $('.tip').css({left:(e.pageX+x)+'px',
								                 top:(e.pageY+y)+'px'}); 
						                    })
           });