$(function(){
      var $li=$('#skin li');
	  $li.click(function(){
	               switchColor(this.id);
		       
					 });
	    var cc=$.cookie('backColor');
		   if(cc)
		    {
				switchColor(cc);
			   }

});

function   switchColor(skinName)
  {
  $('#'+skinName).addClass('selected')
					       .siblings().removeClass('selected');
					$('#cssfile').attr('href','styles/skin/'+skinName+'.css');
					$.cookie('backColor',skinName,{path:'/',expires:10});
  
  }