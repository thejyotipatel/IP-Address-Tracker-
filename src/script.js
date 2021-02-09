const loc = document.querySelector("#location");
const time = document.querySelector("#timeZone");
const ipAddres = document.querySelector("#ipAddres");
const ispName = document.querySelector("#ispname");
const searchButton = document.getElementById("search-icon");
const title = document.querySelector("#ispnum");

let la;
let lon;
let key = "**********your key***********"; 
 
searchButton.addEventListener("click", function(){ 
 
    const searchValue = document.getElementById("search-bar").value;

    const url = `https://geo.ipify.org/api/v1?apiKey=${key}&ipAddress=${searchValue}`;
 
 
    fetch(url).then((Response) =>{
        return Response.json();
        })
        .then((data) =>{

            la = data.location.lat,
            lon = data.location.lng,
            ipAddres.textContent = data.ip,
            loc.textContent = data.location.region + ", " + data.location.country + " " + data.location.postalCode,
            time.textContent = "UTC" +  data.location.timezone,
            ispName.textContent = data.isp;  
                        
            // map script
            let mymap = L.map('mapid').setView([la, lon], 13);

            L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=******your key token key*****', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18, 
                tileSize: 512,
                zoomOffset: -1
             }).addTo(mymap); 

        });


         
});
