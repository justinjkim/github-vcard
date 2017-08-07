

fetch("https://api.github.com/users/justinjkim").then(
	function(response) {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' +
        response.status);
      return;
    } else {
    	response.json().then(function(data) {
      	console.log(data.login);
    	});
    }
    
  } // end of response functions
); // end of overall "fetch" funtion



