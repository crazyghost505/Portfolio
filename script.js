window.onload = btnClick;

function btnClick()
{
    document.getElementById("fbbtn").onclick = facebookLink;
    document.getElementById("ytbtn").onclick = ytLink;
}
function facebookLink()
{
    window.location.href = "https://www.facebook.com/Thanyakorn.Choke";
}
function ytLink()
{
    window.location.href = "https://www.youtube.com/@crazyghost505";
}
