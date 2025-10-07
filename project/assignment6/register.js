window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myRegister");
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var form = document.forms["myRegister"];

    var firstname = form["firstname"].value;
    var lastname = form["lastname"].value;
    var gender = form["gender"].value;
    var bday = form["bday"].value;
    var email = form["email"].value;
    var username = form["username"].value;

    var password1 = form["password"][0].value;
    var password2 = form["password"][1].value;
    if (!firstname || !lastname || !gender || !bday || !email || !username)
    {
        alert("Please fill all infomation");
        return false;
    }
    if (password1 != password2)
    {
        document.getElementById("errormsg").innerText = "Password doesn't match";
        return false;
    }
    else 
    {
        return true;
    }
}