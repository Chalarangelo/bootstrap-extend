//=====================================================================
//    Password Toggle (pwdtoggle.js)
//=====================================================================
$(document).on('click','.pwd-toggle, .pwd-untoggle', function(e){
  e && e.preventDefault();
  if($(e.target).hasClass('disabled') || $(e.target).attr('disabled') == true) 
    return;
  var $field = $(e.target).siblings('.pwd');
  if ($field.attr('type') == 'password') {
      $(e.target).removeClass('pwd-toggle').addClass('pwd-untoggle');
      $field.attr('type','text');
    } else {
      $(e.target).removeClass('pwd-untoggle').addClass('pwd-toggle');
      $field.attr('type','password');
    }
});
$(document).on('click','[type="submit"]', function(e){
  e && e.preventDefault();
  $('.pwd').attr("type","password");
});

//=====================================================================
//  Collapse Button (collapsetoggle.js)
//=====================================================================
$(document).on('click','.btn.btn-toggle, .btn.btn-untoggle', function(e){
  e && e.preventDefault();
  if($(e.target).attr('aria-expanded') == 'true')
    $(e.target).removeClass('btn-toggle').addClass('btn-untoggle');
  else
    $(e.target).removeClass('btn-untoggle').addClass('btn-toggle');
});
$(document).on('click','.btn.btn-toggle+label, .btn.btn-untoggle+label', function(e){
  e && e.preventDefault();
  $(e.target).prev().click();
});

//=====================================================================
//  Lightbox (lightbox.js)
//=====================================================================
$(document).on('click','.lightbox-toggle', function(e){
  e && e.preventDefault();
  var width = ($(e.target).prop('naturalWidth')>$(window).width())?$(window).width():$(e.target).prop('naturalWidth');
  var html;
  var title = ($(e.target).is('[alt]'))?$(e.target).attr('alt'):$(e.target).attr('src');
  html =  '<div id="'+$(e.target).attr('id')+'-modal'+'" class="modal fade modal-lightbox" tabindex="-1" role="dialog" aria-labelledby="'+$(e.target).attr('id')+'-modal-lbl" aria-hidden="true">';
  html += '<div class="modal-dialog">';
  html += '<div class="modal-content">';
  html += '<div class="modal-header">';
  html += '<a class="close" data-dismiss="modal">×</a>';
  html += '<h4 id="'+$(e.target).attr('id')+'-modal-lbl" class="modal-title">Image: '+title+'</h4>';
  html += '</div>';
  html += '<div class="modal-body">';
  html += '<p>';
  html += '<img id="'+$(e.target).attr('id')+'-modal-image'+'" src="'+$(e.target).attr('src')+'">';
  html += '</div>';
  html += '</div>'; 
  html += '</div>';
  html += '</div>';
  $('body').append(html);
  $('#'+$(e.target).attr('id')+'-modal-image').css('width',width - 230);
  $('#'+$(e.target).attr('id')+'-modal > .modal-dialog').css('width',width - 200);
  $('#'+$(e.target).attr('id')+'-modal').modal();
  $('#'+$(e.target).attr('id')+'-modal').modal('show');
  $('#'+$(e.target).attr('id')+'-modal').on('hidden.bs.modal', function (e) {
      $(this).remove();
  });
  $( window ).resize(function() {
    var width = ($(e.target).prop('naturalWidth')>$(window).width())?$(window).width():$(e.target).prop('naturalWidth');
    $('#'+$(e.target).attr('id')+'-modal-image').css('width',width - 230);
    $('#'+$(e.target).attr('id')+'-modal > .modal-dialog').css('width',width - 200);
  });
});

//=====================================================================
//  Numeric Spinner (spinner.js)
//=====================================================================
$(document).on('click','.spinner .btn:first-of-type', function(e){
  var inputField = $(e.target).parent().siblings('input');
  inputField.val( parseInt(inputField.val(),10) + 1);
});
$(document).on('click','.spinner .btn:last-of-type', function(e){
  var inputField = $(e.target).parent().siblings('input');
  inputField.val( parseInt(inputField.val(),10) - 1);
});