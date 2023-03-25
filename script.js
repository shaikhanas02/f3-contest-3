let x = document.getElementById('map') ;
let btn = document.getElementById('btn') ;

let iframe = document.createElement('iframe');
var html = '<body>Foo</body>';
iframe.src = 'https://maps.google.com/maps?q=${position.coords.longitude},${position.coords.latitude}&z=15&output=embed';
document.body.appendChild(iframe);


// iframedoc = document.getElementById("my_iframe").contentDocument;
// iframedoc.getElementById("element_in_iframe").do_something();

btn.addEventListener('click', getLocation) ;

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);

    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
localStorage.setItem("Lat:", position.coords.latitude) 
localStorage.setItem("Long:", position.coords.longitude) 
  }
