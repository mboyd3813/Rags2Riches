function checkAge()
{

var min_age = 18;

var year = parseInt(document.forms["age_form"]["year"].value);
var month = parseInt(document.forms["age_form"]["month"].value) - 1;
var day = parseInt(document.forms["age_form"]["day"].value);

var theirDate = new Date((year + min_age), month, day);
var today = new Date;

if ( (today.getTime() - theirDate.getTime()) > 0) 
{
window.location = "game.html";
}

if ( (today.getTime() - theirDate.getTime()) < 0) 
{
window.location = "http://www.google.com";
}

if ( (today.getTime() - theirDate.getTime()) < 0) {
alert("You are too young to enter this site!"); 
return false;
}
else {
    
return true;
}
}