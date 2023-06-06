
$(document).ready(function() {
	$('#nav_list a').on('click', function(event) {
		event.preventDefault();

		var speaker = $(this).attr('title');
		var jsonFile = 'json_files/' + speaker + '.json';

		$.getJSON(jsonFile, function(data) {
			var html = '';

			var speakerData = data.speakers[0]; // speakers listesinin ilk öğesini alıyorum

			html += '<h1>' + speakerData.title + '</h1>';
			html += '<img src="' + speakerData.image + '">';
			html += '<h2>' + speakerData.month + '<br>' + speakerData.speaker + '</h2>';
			html += '<p>' + speakerData.text + '</p>';

			$('main').html(html);
		});
	});
});
// end ready