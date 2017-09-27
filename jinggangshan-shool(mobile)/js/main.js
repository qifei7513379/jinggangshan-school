
$(document).ready(function(){
   $(".sli").click(function(e){ 
   		$(".sidebar").css("right","0rem");  
    	$(".sidebar-z").css("left","0rem"); 
      e.preventDefault(); 
 	}); 	   
});

$(document).ready(function(){
   $(".sidebar-z").click(function(){ 
    $(".sidebar").css("right","-40%");  
    $(".sidebar-z").css("left","-60%");  
 	}); 	
   $(".sp1").mouseenter(function(){
   		$("#sp2").css("display","none");
   		$("#sp1").css("display","block");
   		$(".sp2").removeClass("spon");
   		$(this).addClass("spon");
   })
   $(".sp2").mouseenter(function(){
   		$("#sp1").css("display","none");
   		$("#sp2").css("display","block");
   		$(".sp1").removeClass("spon");
   		$(this).addClass("spon");
   })

});

//swiper1
$(document).ready(function () {
	

	var swiper = new Swiper('#swiper01', {
        pagination: '.swiper-pagination',    //指示点
        paginationClickable: true,    //TRUE指示点可点
        spaceBetween:0,    //间隙
        centeredSlides: true,   //TRUE居中
        autoplay: 2000,   //自动轮播时间                                               
        autoplayDisableOnInteraction: false,  //TRUE操作停止自动轮播        
        slidesPerView: 1, //单片
     /*	effect: 'fade',  *///渐变有需要可以添加
        loop: true,   //TRUE循环
        autoHeight: true, //高度随内容变化
		  });

  
})

//swiper2
$(document).ready(function () {
	

	    var swiper = new Swiper('#swiper02', {
	        centeredSlides: true,   //TRUE居中
	        autoplay: 2000,   //自动轮播时间                                               
	        autoplayDisableOnInteraction: false,  //TRUE操作停止自动轮播        
	        loop: true,   //TRUE循环
	        autoHeight: true, //高度随内容变化
        	effect : 'coverflow',
			slidesPerView: 3,
        
            // 如果需要前进后退按钮
		    nextButton: '.swiper-button-next',
		    prevButton: '.swiper-button-prev',
        


			coverflow: {
			            rotate: 30,
//			            stretch: 10,
//			            depth: 60,
//			            modifier: 2,
//			            slideShadows : true
			        }
        
		  });
 
})



//点击到顶部


/**超出多少显示**/
 $(window).scroll(function(){
     var sc=$(window).scrollTop();
     var rwidth=$(window).width()
         if(sc>0){
    $("#goTopBtn").css("display","block");
    $("#goTopBtn").css("right",0.375+"rem")
    }else{
   $("#goTopBtn").css("display","none");
    }
    })
/****/
   $("#goTopBtn").click(function(){
    var sc=$(window).scrollTop();
   $('body,html').animate({scrollTop:0},500);
    })  
    