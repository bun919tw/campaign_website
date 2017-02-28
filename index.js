$(document).ready(function() {
	$('#left_door').click(function() {
		if ($('#left_door').hasClass('unit2')) {
			open_door();
		}

		// change door image
		$('#left_door_image').attr('src', 'sky_eye.png');
		$('#right_door_image').attr('src', 'mystery_grayscale.png');

		// change door text color
		$('#left_door_title').css('color', '#ffffff');
		$('#right_door_title').css('color', '#d8d8d8');

		// change content
		$('#sky_eye_content_left').addClass('show');
		$('#sky_eye_content_right').addClass('show');
		$('#mystery_content_left').removeClass('show');
		$('#mystery_content_right').removeClass('show');
	});

	$('#right_door').click(function() {
		if ($('#right_door').hasClass('unit3')) {
			open_door();
		}

		// change door image
		$('#left_door_image').attr('src', 'sky_eye_grayscale.png');
		$('#right_door_image').attr('src', 'mystery.png');

		// change door text color
		$('#left_door_title').css('color', '#d8d8d8');
		$('#right_door_title').css('color', '#ffffff');

		// change content
		$('#sky_eye_content_left').removeClass('show');
		$('#sky_eye_content_right').removeClass('show');
		$('#mystery_content_left').addClass('show');
		$('#mystery_content_right').addClass('show');
	});

	function open_door() {
		// open the door
		$('#left_door').addClass('unit1');
		$('#left_door').removeClass('unit2');
		$('#right_door').removeClass('unit3');
		$('#right_door').addClass('unit4');

		// change shadow
		$('#left_door').addClass('right-shadow');
		$('#left_door').removeClass('left-shadow');
		$('#right_door').addClass('left-shadow');
		$('#right_door').removeClass('right-shadow');
	}
});
