//let x = document.getElementById('map') ;
let btn = document.getElementById('btn') ;
let removeBtn = document.getElementById('remove-btn') ;
let frame = document.getElementById('map') ;


btn.addEventListener('click', getLocation) ;
removeBtn.addEventListener('click', clear) ;

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      frame.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position){
localStorage.setItem("Lat:", position.coords.latitude) 
localStorage.setItem("Long:", position.coords.longitude) 
console.log(position.coords.latitude, position.coords.longitude);
  frame.innerHTML = `
   
   <iframe
  src="https://maps.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}&z=15&output=embed"
  width="360"
  height="270"
  frameborder="0"
  style="border:0"
></iframe>`
  }

  function clear(){
    frame.innerHTML= "" ;
  }
