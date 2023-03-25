let x = document.getElementById('map') ;
let btn = document.getElementById('btn') ;
let removeBtn = document.getElementById('remove-btn') ;
let frame = document.getElementById('frame') ;


// let iframe = document.createElement('iframe');
// var html = '<body>Foo</body>';
// iframe.src = 'https://maps.google.com/maps?q=${position.coords.longitude},${position.coords.latitude}&z=15&output=embed';
// document.body.appendChild(iframe);


//iframedoc = frame.contentWindow;

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
  
  function changeIframe() {
     //iframedoc.src = "https://maps.google.com/maps?q=72.8856,19.0748&z=15&output=embed";
     console.log(iframedoc) ;
   }
changeIframe() ;
