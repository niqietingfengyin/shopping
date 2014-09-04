$(function(){
            $('ul.imgList li img').click(function(){
			                                    var  sr=this.src;
												var index=sr.indexOf('.');
												var  ssmall=sr.substring(0,index)+'_small.jpg';
												var  sbig=sr.substring(0,index)+'_big.jpg';
												//修改上方显示图片
			                                    $('.fs').attr('src',ssmall);
												//修改放大镜链接的图片
												$('#bigImg').attr('jqimg',sbig);
												//修改‘观看清晰图片’链接的图片
												$('#thickImg').attr('href',sbig);
			                                     });  

             })