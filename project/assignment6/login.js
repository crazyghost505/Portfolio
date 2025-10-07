window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	const queryString = window.location.search;
	const urlParam = new URLSearchParams(queryString);
	var username = urlParam.get('username');
	var password = urlParam.get('password');

	var form = document.forms["myLogin"];
    var usernameInp = form["username"].value;
    var passwordInp = form["password"].value;

	if (usernameInp != username)
	{
		alert("invalid Username");
		return false;
	}
	else if (passwordInp != password)
	{
		alert("invalid Password");
		return false;
	}
	else
	{
		alert("Login successfully");
		return false;
	}
}

			