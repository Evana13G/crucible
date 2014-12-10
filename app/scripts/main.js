'use strict';

$(document).ready(function(){

	$('#conformance-metadata').hide();
	$('#rest-metadata').hide();
	$('#document-metadata').hide();
	$('#messaging-metadata').hide();

	$('#metadata-selector').change(function(){
		$('#conformance-metadata').hide();
		$('#rest-metadata').hide();
		$('#document-metadata').hide();
		$('#messaging-metadata').hide();
		var value = $('#metadata-selector').val().toLowerCase();
		var targetString = '#' + value.split(' ')[0] + '-metadata';
		$(''+targetString).show();
	});

	// initialize table
	$('.report-table > tbody > tr').removeClass('active');
	$('.report-table > tbody > tr').first().addClass('active');
	var initialDialogue = $('.report-table > tbody > tr').children()[1].innerText;
	$('#test-dialogue').text(initialDialogue);

	$('.report-table > tbody > tr ').click(function(){
		$('.report-table > tbody > tr').removeClass('active');
		$(this).addClass('active');
		var text1 = $(this).children()[1].innerText;
	    $('#test-dialogue').text(text1);
	});

});