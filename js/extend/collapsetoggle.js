//=====================================================================
//    Collapse Button
//=====================================================================

//  Collapse Button Click Event
/$(document).on('click','.btn.btn-toggle, .btn.btn-untoggle', function(e){
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