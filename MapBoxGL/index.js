let longitude = -117.84356
let latitude = 33.67128

mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/outdoors-v12", 
    center: [longitude, latitude], 
    zoom: 2
})

var img1 = document.querySelector("#new_york")

var marker1 = new mapboxgl.Marker({
    element: img1
})
.setLngLat([-73.935242, 40.730610])
.addTo(map);

mapboxgl.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
)