function FtoC()
{
var tempInFarhenheit = document.getElementById("tempInF").value;
var tempInCelsius = (tempInFarhenheit - 32) * 5/9;
var finalAnswerCelcius = Math.floor(tempInCelsius);
alert("temp in celsius is " + finalAnswerCelcius);


}

function CtoF()
{
var tempInCelsius = document.getElementById("tempInC").value;
var tempInFahrenheit = (tempInCelsius * 9/5) + 32;
var finalAnswerFahrenheit = Math.floor(tempInFahrenheit);
alert("temp in Fahrenheit is " + finalAnswerFahrenheit)
}








