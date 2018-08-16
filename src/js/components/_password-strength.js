$(document).ready(function() {
  $('#pass').keyup(function() {

    var pass = $(this).val();
    	$('#results').text(checkPass(pass));
  });

  function checkPass(pass) {
  	
  	var protect = 0;

  	if(pass.length < 8) {
  		$('#bg_res').removeClass();
  		$('#bg_res').addClass('red');
  	return 'Слабый';	
  	}

  	var small = '([a-z]+)';
  	if(pass.match(small)) {
  		protect ++;
  	}

  	var big = '([A-Z]+)';
  	if(pass.match(big)) {
  		protect ++;
  	}

  	var numb = '([0-9]+)';
  	if(pass.match(numb)) {
  		protect ++;
  	}

  	//!@#$
  	var vv = /\W/;
  	if (pass.match(vv)) {
  		protect ++;
  	}
  	if (protect === 2) {
  		$('#bg_res').removeClass();
  		$('#bg_res').addClass('yellow');
  		return 'Средний';
  	}

  	if (protect === 3) {
  		$('#bg_res').removeClass();
  		$('#bg_res').addClass('green');
  		return 'Хороший';
  	}

  	if (protect === 4) {
  		$('#bg_res').removeClass();
  		$('#bg_res').addClass('green_v');
  		return 'Надежный';
  	}
  };
});
