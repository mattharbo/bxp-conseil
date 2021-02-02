const mobMenu = document.getElementById("mobile_menu");


const doYourJob = (event) => {

  var x = document.getElementById("header-menu");

	if (x.className !== "header-menu") {
		x.className = "header-menu";
		x.style.display="block";
		console.log("open")
	} else {
		x.className = "";
		x.style.display="none";
		console.log("close")
	}

};


mobMenu.addEventListener("click", doYourJob);
