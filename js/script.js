$(document).ready(function(){

    $('.left_nav li').click(function(){
        
        if( !$(this).hasClass('li-active')){
            $('.left_nav li').removeClass('li-active')
            $(this).addClass('li-active')
        }else{
            $(this).removeClass('li-active')
        }
        
    })


    $('.burger_btn').click(function(){
        if(! $('.burger_btn').hasClass('burger-active') ){
            $('.burger_btn').addClass('burger-active')
            $('.burger_menu').slideDown()
        }else{
            $('.burger_btn').removeClass('burger-active')
            $('.burger_menu').slideUp()
        }
    })


    $('.burger_menu li').click(function(){
        
        $('.burger_menu li').removeClass('burg_menu-active')
        $('.burger_menu li').find('.open_list').slideUp()
        $(this).addClass('burg_menu-active')
        $(this).find('.open_list').slideDown()
        
    })














})