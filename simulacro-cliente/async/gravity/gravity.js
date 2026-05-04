// Utilizando el API de localización de la estación espacial internacional crea una página web que
// muestre su posición sobre el mapa cada diez segundos:
// http://open-notify.org/Open-Notify-API/ISS-Location-Now/
// Para los mapas puedes utilizar leafletjs. En la página inicial tienes un ejemplo de cómo mostrar un
// mapa utilizando los datos de OpenstreetMap: https://leafletjs.com/examples/quick-start/
// Extra: Añade un botón para centrar el mapa en la posición actual de la ISS.


async function whereIsIt() {
    const res = await fetch('http://api.open-notify.org/iss-now.json')
    const json = await res.json()
    const { longitude: long, latitude: lat } = json.iss_position

    console.log([ Number(long), Number(lat) ]);
    

    return [ Number(lat), Number(long) ]
    
}

// setInterval( () => whereIsIt(), 2000)
whereIsIt()

var map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([0,0]).addTo(map) 


setInterval( () => {
    whereIsIt()
        .then(coords => { 
            marker.setLatLng(coords)
        
        })
    
}, 1500)

const centerBtn = document.querySelector('#center-btn')

centerBtn.addEventListener('click' , () => {
    whereIsIt()
        .then(coords => {
            map.setView( coords, 5)
        
        })

})
