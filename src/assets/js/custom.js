$('.sales').each(function(){
    if($(this).text() == 'true'){
      $(this).parent().css({'background-color' : '#89e289'})
    }
    else{
       $(this).parent().css({'background-color' : '#f08080'})
    }
});