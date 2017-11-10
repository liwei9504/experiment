 $(function(){
     function resize() {

         var windowWidth = $(window).width();
         $('#main_ad > .carousel-inner > .item').each(function (i, item) {
             var $item = $(item);
             var imgSrc = windowWidth > 768 ?$item.data('img-lg') : $item.data('img-xs');
             $item.css('backgroundImage', 'url("' + imgSrc + '")');
             var isSmallScreen=windowWidth<768;
             if(isSmallScreen) {
                 $item.html('<img src="' + imgSrc + '"/>');
             }
                 else{
                     $item.empty();
                 }

         });
     }
     $(window).on('resize',resize).trigger('resize');
     var ulElement=$('.nav-tabs');
     var width=30;
     ulElement.children().each(function(index,element){
        width+=element.clientWidth;
     });
     if(width>$(window).width()) {
         ulElement.css('width', width).parent().css('overflow-x','scroll');
     }
     var $newTitle = $('.news-title');
     $('#news .nav-pills a').on('click', function() {
         // 获取当前点击元素
         var $this = $(this);
         // 获取对应的title值
         var title = $this.data('title');
         // 将title设置到相应的位置
         $newTitle.text(title);
     });


     var $carousel=$('.carousel');
     var offset=50;
     var startX,endX;
     $carousel.on('touchstart',function(e){
         startX= e.originalEvent.touches[0].clientX;
     });
     $carousel.on('touchmove',function(e){
         endX= e.originalEvent.touches[0].clientX;

     });
     $carousel.on('touchend',function(e){
         var distance=Math.abs(startX-endX);
         if(distance>offset){
             $(this).carousel(startX>endX?'next':'prev');
         }
     });
   });