$(function(){
              $('.color_change ul li img').click(function(){
			                                             var color=this.alt;
														 var sc=this.src;
														 var ss=sc.split('.');
														 //ss是一个数组，ss[0]是yellow,ss[1]是jpg;
									
														 //修改颜色的文本
									                     $('.color_change strong').text(color);
														//修改左上方的大图
														$('.fs').attr('src',ss[0]+'_one_small.jpg');
														$('#bigImg').attr('jqimg',ss[0]+'_one_big.jpg');
														//修改‘观看清晰照片’的遮罩层链接图片
														$('#thickImg').attr('href',ss[0]+'_one_big.jpg');
				                                        //修改左下方的下图
                                                       $('ul.imgList li:eq(0) img').attr('src',ss[0]+'_one.jpg');
													   $('ul.imgList li:eq(1) img').attr('src',ss[0]+'_two.jpg');
													   $('ul.imgList li:eq(2) img').attr('src',ss[0]+'_three.jpg');
													  });


            })