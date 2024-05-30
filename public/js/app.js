const btn = document.querySelector('#btn');
const p = document.querySelector('p');
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

btn.addEventListener('click',()=>{
    if(navigator.geolocation){
      console.log(navigator.geolocation.getCurrentPosition(success));
    }else{
    p.textContent = 'Geolocation not supported';
    }
})
const success = (pos)=>{
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
console.log('Your current Location:')
console.log(`latitude: ${lat}`);
console.log(`longitude: ${lng}`);
var userLocation = [lat, lng];

map.setView(userLocation, 13);
L.marker(userLocation).addTo(map)
.bindPopup("You are here.")
.openPopup();
}
