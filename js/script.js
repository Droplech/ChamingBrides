$(document).ready(function(){

    $('.left_nav li').click(function(){
        
        if( !$(this).hasClass('li-active')){
            $('.left_nav li').removeClass('li-active')
            $(this).addClass('li-active')
        }else{
            $(this).removeClass('li-active')
        }
        
    })















})