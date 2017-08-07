fetch("https://randomuser.me/api/?results=1").then(
	function(response) {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' +
        response.status);
      return;
    } else {
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
  			let basics =  `
  				<h1>The Basics</h1>
  				<ul>
  					<li>Name: ${name}</li>
  					<li>Github URL: <a href="${githubURL}">${login}</a></li>
  					<li>Email: ${email}</li>
  					<li>Company: ${company}</li>
  					<li>Website: <a href="${blog}">${blog}</a></li>
  				</ul>
  			`

  			let story = `
  				<h1>The Story</h1>
  				<p>${bio}</p>
  			`

  			let picture = `
  				<img src="${avatar}" alt="picture" />
  			`

  			let sectionBasics = document.getElementById("basics");
  			let sectionStory = document.getElementById("story");
  			let sectionPicture = document.getElementById("picture");
      	sectionBasics.innerHTML = basics;
      	sectionStory.innerHTML = story;
      	sectionPicture.innerHTML = picture;







    	}); // end of 200 response function
    }
    
  } // end of overall response functions
); // end of overall "fetch" funtion



