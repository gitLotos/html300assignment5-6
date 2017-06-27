function Seattle(){
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)
    {
      document.getElementById("demo").innerHTML = xhttp.responseText;
      //var response[] = xhttp.responseText;
    }
};
xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?lat=47.6762&lon=-122.3182&APPID=c04d29b1b4f9b69dfcf0a68aabfa5cea", true);
xhttp.send();
}


function London(){
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)
    {
      document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?lat=51.5074&lon=0.1278&APPID=c04d29b1b4f9b69dfcf0a68aabfa5cea", true);
xhttp.send();
}
