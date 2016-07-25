//=====================================================================
//	Lightbox
//=====================================================================

//  Lightbox Toggle Click Event
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
  // Dispose of the modal when it is hidden
  $('#'+$(e.target).attr('id')+'-modal').on('hidden.bs.modal', function (e) {
      $(this).remove();
  });
  // Window resize event resizes modal and contents
  $( window ).resize(function() {
    var width = ($(e.target).prop('naturalWidth')>$(window).width())?$(window).width():$(e.target).prop('naturalWidth');
    $('#'+$(e.target).attr('id')+'-modal-image').css('width',width - 230);
    $('#'+$(e.target).attr('id')+'-modal > .modal-dialog').css('width',width - 200);
  });
});