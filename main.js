fetch("https://api.github.com/users/justinjkim").then(
	function(response) {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' +
        response.status);
      return;
    } 
    else {
    	response.json().then(function(githubAPI) {

    		let name = githubAPI.name;
    		let login = githubAPI.login;
    		let githubURL = githubAPI.url;
    		let email = githubAPI.email;
    		let company = githubAPI.company;
    		let blog = githubAPI.blog;
    		let bio = githubAPI.bio;
    		let avatar = githubAPI.avatar_url;

  			// template literal
  			let headerH1 = `
  				<h1>${name}</h1>
  			`

  			let basics =  `
  				<h1>The Basics</h1>
  				<ul>
  					<li><span class="highlight">Name:</span> &nbsp; ${name}</li>
  					<li><span class="highlight">Github URL:</span> &nbsp; <a href="${githubURL}">${login}</a></li>
  					<li><span class="highlight">Email:</span> &nbsp; ${email}</li>
  					<li><span class="highlight">Company:</span> &nbsp; ${company}</li>
  					<li><span class="highlight">LinkedIn:</span> &nbsp; <a href="${blog}">${blog}</a></li>
  				</ul>
  			`

  			let story = `
  				<h1>The Story</h1>
  				<p>${bio}</p>
  				<img src="${avatar}" alt="picture" />
  			`

  			let header = document.querySelector("header");
  			let sectionBasics = document.getElementById("basics");
  			let sectionStory = document.getElementById("story");
  			header.innerHTML = headerH1;
      	sectionBasics.innerHTML = basics;
      	sectionStory.innerHTML = story;

    	}); // end of JSON parser function
    } // end of 200 response function
    
  } // end of overall response functions
); // end of overall "fetch" funtion



