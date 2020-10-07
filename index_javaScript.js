//Short welcome message sent to the console.
welcomeToConsole = () =>{console.log("Welcome To Gupppy's Home Page!")};
//Gets, formats and outputs the current date.
displayDate = () => {
	let todayDate = new Date();
	let month, day, year;
	let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
	year = todayDate.getFullYear();	
	month = months[todayDate.getMonth()];
	day = todayDate.getDate();
	console.log(month+" "+day+", "+year);
	document.getElementById("date").innerHTML = (month+" "+day+", "+year);	
}
changeColorOfElement = () =>{	
	document.getElementById("styleishNestedDiv2").style.backgroundColor = "green";
}
