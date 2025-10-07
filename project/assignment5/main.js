// window.onload = postFunction;
let uploadTimes = 0;
function postFunction()
{
    const message = document.getElementById("message").value;
    uploadTimes++;
    if (uploadTimes == 1)
    {
        var upload = document.getElementById("topic");
        upload.innerText = message;
    }
    if (uploadTimes == 2)
    {
        var upload = document.getElementById("reply1");
        upload.innerText = message;
    }
    if (uploadTimes == 3)
    {
        var upload = document.getElementById("reply2");
        upload.innerText = message;
    }
    if (uploadTimes > 3)
    {
        var upload = document.getElementById("alert");
        upload.innerText = "You're can't post more than 3 times!! PLEASE CLEAR";
    }
    document.getElementById("message").value = "";
}
function clearFunction()
{
    uploadTimes = 0;
    document.getElementById("topic").innerText = "Your 1st post here";
    document.getElementById("reply1").innerText = "Your 2nd post here";
    document.getElementById("reply2").innerText = "Your 3rd post here";
    document.getElementById("alert").innerText = "";
}