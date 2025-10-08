window.onload = btnClick;
window.onload = projectbtnClick;

function btnClick()
{
    document.getElementById("fbbtn").onclick = facebookLink;
    document.getElementById("ytbtn").onclick = ytLink;
    // document.getElementById("Tsobtn").onclick = facebookLink;
    // document.getElementById("Pizbtn").onclick = ytLink;
    // document.getElementById("Posbtn").onclick = facebookLink;
    // document.getElementById("Logbtn").onclick = ytLink;
    // document.getElementById("Boxbtn").onclick = facebookLink;
    // document.getElementById("Ajabtn").onclick = ytLink;
}
function projectbtnClick()
{
    // document.getElementById("fbbtn").onclick = facebookLink;
    // document.getElementById("ytbtn").onclick = ytLink;
    document.getElementById("Tsobtn").onclick = TsoLink;
    document.getElementById("Pizbtn").onclick = PizLink;
    document.getElementById("Posbtn").onclick = PosLink;
    document.getElementById("Logbtn").onclick = LogLink;
    document.getElementById("Boxbtn").onclick = BoxLink;
    document.getElementById("Ajabtn").onclick = AjaLink;
}
function facebookLink()
{
    window.location.href = "https://www.facebook.com/Thanyakorn.Choke";
}
function ytLink()
{
    window.location.href = "https://www.youtube.com/@crazyghost505";
}
function TsoLink()
{
    window.location.href = "project/assignment3/food_webpage.html";
}
function PizLink()
{
    window.location.href = "project/assignment4/recipe.html";
}
function PosLink()
{
    window.location.href = "project/assignment5/index.html";
}
function LogLink()
{
    window.location.href = "project/assignment6/login.html";
}
function BoxLink()
{
    window.location.href = "project/assignment7/index.html";
}
function AjaLink()
{
    window.location.href = "project/assignment8/index.html";
}

