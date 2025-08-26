$(function(){
    $('.gotop').click(function (e) {
        e.preventDefault()
        $('html,body').stop().animate({
            scrollTop: 0
        }, 1000)
    })


    $(".hamburger").click(function(){
        $(".main").toggleClass("on")
        if($('.main').hasClass('on')){
            $(".main").fadeOut()
        }else{
            $(".main").fadeIn()

        }
    })

    $(".main>li").click(function(){
        $('.main li').addClass('on')
        $(this).removeClass('on')
        $('.main>li ul').removeClass('on')
        $(this).find("ul").addClass('on')
    })

    

})    

