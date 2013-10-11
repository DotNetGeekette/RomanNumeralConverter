$('#convertToRoman').on('click',function(){
	var result = convertToRoman($('#arabic').val());
	$('#romanResult').html(result);
});

$('#convertToArabic').on('click', function() {
	var result = convertToArabic($('#roman').val());
	$('#arabicResult').html(result);
});

$('#clearRoman').on('click',function(){
	$('#arabic').val('');
	$('#romanResult').html('');
});

$('#clearArabic').on('click', function() {
	$('#roman').val('');
	$('#arabicResult').html('');
});

function convertToRoman(arabicValue) {
	// Note: Not done as part of a kata.  I recognize that this could be refactored better :)
	if(!$.isNumeric(arabicValue) || arabicValue.indexOf('.') > -1) return 'Integers only, please';
	if(arabicValue > 3999) return 'Value too large';
	if(arabicValue < 0) return 'Positive values only, please';

	var roman = '';
	
	while (arabicValue >= 1000) {
		roman += 'M';
		arabicValue -= 1000;
	}

	if (arabicValue >= 900) {
		roman += 'CM';
		arabicValue -= 900;
	}

	if (arabicValue >= 500) {
		roman += 'D';
		arabicValue -= 500;
	}

	if (arabicValue >= 400) {
		roman += 'CD';
		arabicValue -= 400;
	}

	while (arabicValue >= 100) {
		roman += 'C';
		arabicValue -= 100;
	}

	if (arabicValue >= 90) {
		roman += 'XC';
		arabicValue -= 90;
	}

	if (arabicValue >= 50) {
		roman += 'L';
		arabicValue -= 50;
	}

	if (arabicValue >= 40) {
		roman += 'XL';
		arabicValue -= 40;
	}

	while (arabicValue >= 10) {
		roman += 'X';
		arabicValue -= 10;
	}

	if (arabicValue >= 9) {
		roman += 'IX';
		arabicValue -= 9;
	}

	if (arabicValue >= 5) {
		roman += 'V';
		arabicValue -= 5;
	}

	if (arabicValue >= 4) {
		roman += 'IV';
		arabicValue -= 4;
	}

	while (arabicValue >= 1) {
		roman += 'I';
		arabicValue -= 1;
	}

	return roman;
}


function convertToArabic(romanValue) {
	var arabic = 0;
	var limitRepeating = 3;
	var repeater = 0;

	romanValue = romanValue.toUpperCase();

	while(romanValue.indexOf('M') == 0 && repeater < limitRepeating) {
		arabic += 1000;
		romanValue = romanValue.substring(1);
		repeater++;
	}

	if(romanValue.indexOf('CM') == 0) {
		arabic += 900;
		romanValue = romanValue.substring(2);
	}

	else if(romanValue.indexOf('CD') == 0) {
		arabic += 400;
		romanValue = romanValue.substring(2);
	}

	else {
		if(romanValue.indexOf('D') == 0) {
			arabic += 500;
			romanValue = romanValue.substring(1);
		}
		repeater = 0;
		while(romanValue.indexOf('C') == 0 && repeater < limitRepeating) {
			arabic += 100;
			romanValue = romanValue.substring(1);
			repeater++;
		}
	}
	
	if(romanValue.indexOf('XC') == 0) {
		arabic += 90;
		romanValue = romanValue.substring(2);
	}

	else if(romanValue.indexOf('XL') == 0) {
		arabic += 40;
		romanValue = romanValue.substring(2);
	}

	else {
		if(romanValue.indexOf('L') == 0) {
			arabic += 50;
			romanValue = romanValue.substring(1);
		}

		repeater = 0;
		while(romanValue.indexOf('X') == 0 && repeater < limitRepeating) {
			arabic += 10;
			romanValue = romanValue.substring(1);
			repeater++;
		}
	}

	if(romanValue.indexOf('IX') == 0) {
		arabic += 9;
		romanValue = romanValue.substring(2);
	}

	else if(romanValue.indexOf('IV') == 0) {
		arabic += 4;
		romanValue = romanValue.substring(2);
	}

	else {

		if(romanValue.indexOf('V') == 0) {
			arabic += 5;
			romanValue = romanValue.substring(1);
		}
		repeater = 0;
		while(romanValue.indexOf('I') == 0 && repeater < limitRepeating) {
			arabic += 1;
			romanValue = romanValue.substring(1);
			repeater++;
		}
	}

	if(romanValue.length > 0)
		return 'Please provide a real roman numeral';

	return arabic;
}