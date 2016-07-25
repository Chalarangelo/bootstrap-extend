//=====================================================================
//    Numeric Spinner
//=====================================================================

//  Numeric Spinner '+' Click Event
$(document).on('click','.spinner .btn:first-of-type', function(e){
	var inputField = $(e.target).parent().siblings('input');
	inputField.val( parseInt(inputField.val(),10) + 1);
});

//  Numeric Spinner '-' Click Event
$(document).on('click','.spinner .btn:last-of-type', function(e){
	var inputField = $(e.target).parent().siblings('input');
	inputField.val( parseInt(inputField.val(),10) - 1);
});