function FetchWeather(APIurl){
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    try
    {
      if (this.readyState == 4 && this.status == 200)
      {
        var raw = xhttp.responseText;
        var JSONResponse = JSON.parse(xhttp.responseText);

        document.getElementById("response").innerHTML =
        "Temperature: " + round(JSONResponse.main.temp * (9/5) - 459.67, 0) + ' DEG F ' +
        "| Low Temperature: " + round(JSONResponse.main.temp_min * (9/5) - 459.67, 0) + ' DEG F ' +
        "| High Temperature: " + round(JSONResponse.main.temp_max * (9/5) - 459.67, 0) + ' DEG F ' +
        "| Humidity: " + JSONResponse.main.humidity + '%';

      }
    }
    catch(e)
    {
      document.getElementById("response").innerHTML = e.message;
    }
};
xhttp.open("GET", APIurl, true);
xhttp.send();
}

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function WeatherLocation() {

      if (navigator.geolocation)
      {
          navigator.geolocation.getCurrentPosition(showPosition);
      }
      else
      {
          alert("Geolocation is not supported by this browser.");
      }

  function showPosition(position) {
    var lon = position.coords.longitude;
    var lat = position.coords.latitude;
    var APIurl = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat="+ lat + "&lon=" + lon + "&APPID=c04d29b1b4f9b69dfcf0a68aabfa5cea";

    var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function() {
          try
          {
            if (this.readyState == 4 && this.status == 200)
            {
              var raw = xhttp.responseText;
              var JSONResponse = JSON.parse(xhttp.responseText);

              document.getElementById("response").innerHTML =
              "Temperature: " + round(JSONResponse.main.temp * (9/5) - 459.67, 0) + ' DEG F ' +
              "| Low Temperature: " + round(JSONResponse.main.temp_min * (9/5) - 459.67, 0) + ' DEG F ' +
              "| High Temperature: " + round(JSONResponse.main.temp_max * (9/5) - 459.67, 0) + ' DEG F ' +
              "| Humidity: " + JSONResponse.main.humidity + '%';
            }
          }
          catch(e)
          {
            document.getElementById("response").innerHTML = e.message;
          }
        }
          xhttp.open("GET", APIurl, true);
          xhttp.send();
  }


    }
