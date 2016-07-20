//=====================================================================
//    Password Toggle
//  Password Toggle Click Event
$(document).on('click','.pwd-toggle, .pwd-untoggle', function(e){
  e && e.preventDefault();
  var $field = $(this).siblings('.pwd');
  if ($field.attr('type') == 'password') {
      $(e.target).removeClass('pwd-toggle').addClass('pwd-untoggle');
      $field.attr('type','text');
    } else {
      $(e.target).removeClass('pwd-untoggle').addClass('pwd-toggle');
      $field.attr('type','password');
    }
});
//  Password Toggle Submit Form Event
$(document).on('click','[type="submit"]', function(e){
  e && e.preventDefault();
  $('.pwd').attr("type","password");
});
//      End of Password Toggle
//=====================================================================