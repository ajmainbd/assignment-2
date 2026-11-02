$(document).ready(function(){

 $('.btn').on('click', function(){
   $('.btn').css('color', 'red').css('background-color', 'blue')  
    .hide(1000)

    $('.popup').css('display', 'flex')
 });
    $('.close').on('click', function(){
        $('.popup').css('display', 'none')
    });


        $('.btn1').hover(function(){
            $(this).css('background-color', '#d4a373')}, function(){
    $(this).css("background-color", "pink");
       }); 

     $('.btn1').on('click', function(){
        $(this).text('Clicked').css('color', 'red');
     })
     
     $('.btn1').on('click', function(){
        $('.Box2').css('background-color', '#03045e');
     })
  
    
});