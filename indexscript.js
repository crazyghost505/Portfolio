window.onload = btnClick;
function btnClick()
{
    document.getElementById("fbbtn").onclick = facebookLink;
    document.getElementById("ytbtn").onclick = ytLink;
    document.getElementById("ghbtn").onclick = ghLink;
}

function facebookLink()
{
    window.location.href = "https://www.facebook.com/Thanyakorn.Choke";
}
function ytLink()
{
    window.location.href = "https://www.youtube.com/@crazyghost505";
}
function ghLink()
{
    window.location.href = "https://github.com/crazyghost505";
}
