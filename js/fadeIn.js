$(function() {
        $("#header").load("header.html");
        $("#footer").load("footer.html");
        
        $('.hideme').each( function(i){
                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    if( bottom_of_window > bottom_of_object/2 ){
                        $(this).animate({'opacity':'1'},500);
                    }
                
                //각 hideme 엘리먼트 위치 파악
                //모습이 50%이상 보이면 불투명도를 1로 서서히 변경  
        }); 
    });
    
    $(window).scroll( function(){
                //스크롤이벤트 발생 시  
        $('.fadeinbottom').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_element/2 ){
                $(this).animate({'opacity':'1','margin-top':'0px'},1000);
            }
            //위와 원리 마찬가지 + 마진을 0으로 원상복구
        }); 
                
    });