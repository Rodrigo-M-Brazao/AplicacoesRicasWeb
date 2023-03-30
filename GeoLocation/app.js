let lat;
let lon;
function getLocation(){
    if(!navigator.geolocation){
        return null
    }
    navigator.geolocation.getCurrentPosition(pos => {
        lat = document.getElementById('lat').innerText = pos.coords.latitude
        lon = document.getElementById('lon').innerText = pos.coords.longitude

        initMap();
    })
}
function initMap() {
    // The location of Uluru
    const uluru = { lat: lat, lng: lon };
    
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
}
getLocation();


