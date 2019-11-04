function ShowPosition()
{
if (navigator.geolocation)
	navigator.geolocation.getCurrentPosition(DisplayResult, DisplayError)
else
	alert("Browser does not support geolocation");
}
function DisplayResult(Position)
{
	/*var message = " Latitude: " + Position.coords.latitude;
	message += " Longitude: " + Position.coords.longitude;
	message += " Accuracy: " + Position.coords.accuracy + " meters ";
	alert(message);*/

	var context = document.getElementById('mapCanvas').getContext("2d");	

	var img = new Image();
	img.onload = function () {
    context.drawImage(img, 0, 0);
	}
	img.src = "kartta.jpg";
	
	var img = new Image();
	img.onload = function () {
		context.drawImage(img, 0, 0);
	}
	img.src = "kartta.jpg";

	var Ylatitude = Math.round(Position.coords.latitude);
	var Xlongitude = Math.round(Position.coords.longitude);
	var Ycor = 180;
	var Xcor = 360;
	if (Ylatitude < 0){
		Ycor = 180 + (Ylatitude * 2);
	}else{
		Ycor = 180 - (Ylatitude * 2);
	}
	if (Xlongitude < 0){
		Xcor = 360 + (Xlongitude * 2);
	}else{
		Xcor = 360 - (Xlongitude * 2);
	}
	var img2 = new Image();
	img2.onload = function () {
		context.drawImage(img2, Xcor - 5, Ycor - 30);
	}
	img2.src = "mapPin.png";
}
function DisplayError(Error) 
{
	var message;
	switch(Error.code) {
		case 0: message = "Error retrieving location information";
		break;
		case 1: message = "User prevented location access";
		break;
		case 2: message = "Browser could not retrieve data";
		break;
		case 3: message = "Browser timed out during data retrieval";
		break;
	}
	alert(Message);
}
function ValidateForm()
{
if (document.forms["myForm"]["name"].value==null || document.forms["myForm"]["name"].value=="")
{
alert("Name must be filled out");
return false;
}
if (document.forms["myForm"]["phone"].value==null || document.forms["myForm"]["phone"].value=="")
{
alert("Phone must be filled out");
return false;
}
if (document.forms["myForm"]["email"].value==null || document.forms["myForm"]["email"].value=="")
{
alert("Email must be filled out");
return false;
}
return true;
}
