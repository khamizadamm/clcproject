let username, password;
username = prompt("Enter Username", '');

if (username == "Admin") {
	password = prompt("Enter password", '');
	if (password == "TheMaster"){
		alert("Welcome!");
	}else if (password == '' || password == null){
		alert("Cancel");
	}else{
		alert("Wrong Password");
	}
}else if (username == '' || username == null){
	alert("Cancel");
}else{
	alert("I dont know you");
}