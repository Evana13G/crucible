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

});