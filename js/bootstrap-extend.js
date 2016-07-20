//=====================================================================
//    Password Toggle
//  Password Toggle Click Event
$(document).on('click','.pwd-toggle, .pwd-untoggle', function(e){
  e && e.preventDefault();
  var $field = $(e.target).siblings('.pwd');
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
//      Collapse Button
//  Collapse Button Click Event
$(document).on('click','.btn.btn-toggle, .btn.btn-untoggle', function(e){
  e && e.preventDefault();
  if($(e.target).attr('aria-expanded') == 'true')
    $(e.target).removeClass('btn-toggle').addClass('btn-untoggle');
  else
    $(e.target).removeClass('btn-untoggle').addClass('btn-toggle');
});
//  Collapse Button's label Click Event
$(document).on('click','.btn.btn-toggle+label, .btn.btn-untoggle+label', function(e){
  e && e.preventDefault();
  $(e.target).prev().click();
});
//    End of Collapse Button
//=====================================================================