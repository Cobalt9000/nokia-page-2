<template>
  <div class="map-container">
    <div id="map"></div>
    <div class="sidebar">
      <div class="search-bar">
        <input type="text" placeholder="Search on the map" id="searchInput" />
      </div>
      <div class="sites-list">
        <h3>Sites</h3>
        <ul id="sitesList">
          <li v-for="site in siteData" :key="site.name">{{ site.name }}</li>
        </ul>
      </div>
      <div class="sites-by-type">
        <h3>Sites by Type</h3>
        <select id="siteTypeFilter">
          <option value="">All types</option>
        </select>
        <ul id="siteTypeList"></ul>
      </div>
    </div>
  </div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import siteData from './assets/data.js';
import './assets/styles.css';

export default {
  name: 'App',
  data() {
    return {
      siteData,
    };
  },
  mounted() {
    this.initializeMap();
  },
  methods: {
    initializeMap() {
//       let siteData = fetch("https://nokia-dst.plutoze.me/api/v1/stations/country/USA")
// siteData.then((Response) => {
//   console.log(Response.status)
//   console.log(Response.ok)
//   return Response.json()
// }).then((value2) => {
//   console.log(value2)
// })

const siteTypeIcons = {

'Self Support': L.icon({
  className: 'custom-marker',
  html: '<img src="https://logodix.com/logo/746371.png" width="30" height="30" style="border-radius: 50%;">',
  iconUrl: 'https://apacinfrastructure.com.au/sites/default/files/towers_and_masts_steel_1.png',
  iconSize: [40, 40], // Set the size of the icon [width, height]
  iconAnchor: [20, 20], // Set the anchor point of the icon [x, y]
  popupAnchor: [0, -32] // Set the popup anchor point [x, y]
}),
'Monopole': L.icon({
  className: 'custom-marker',
  iconUrl: 'https://www.pngmart.com/files/3/Antenna-PNG-Transparent.png',
  iconSize: [40, 40], // Set the size of the icon [width, height]
  iconAnchor: [20, 20], // Set the anchor point of the icon [x, y]
  popupAnchor: [0, -32] // Set the popup anchor point [x, y]
}),
'Rooftop': L.icon({
  className: 'custom-marker',
  iconUrl: 'https://schofieldroofingltd.com/wp-content/uploads/2019/07/house-roof-512-400x400.png',
  iconSize: [40, 40], // Set the size of the icon [width, height]
  iconAnchor: [20, 20], // Set the anchor point of the icon [x, y]
  popupAnchor: [0, -32] // Set the popup anchor point [x, y]
}),
'Guided Tower': L.icon({
  className: 'custom-marker',
  iconUrl: 'https://cdn3.iconfinder.com/data/icons/energy-source-and-power-industry/512/788_Electrical_energy_transmission_transmission_tower-1024.png',
  iconSize: [40, 40], // Set the size of the icon [width, height]
  iconAnchor: [20, 20], // Set the anchor point of the icon [x, y]
  popupAnchor: [0, -32] // Set the popup anchor point [x, y]
}),
'Watertower': L.icon({
  className: 'custom-marker',
  iconUrl: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/water-tower-6596057-5511214.png',
  iconSize: [40, 40], // Set the size of the icon [width, height]
  iconAnchor: [20, 20], // Set the anchor point of the icon [x, y]
  popupAnchor: [0, -32] // Set the popup anchor point [x, y]
})
};


// Initialize the map
const map = L.map('map').setView([45, -4], 5);

// Add the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Custom icon for markers
// var customIcon = L.divIcon({
//     className: 'custom-marker',
//     html: '<img src="https://logodix.com/logo/746371.png" width="30" height="30" style="border-radius: 50%;">',
//     iconSize: [40, 40],
//     iconAnchor: [20, 20],
// });

const customIconprops = {
className: 'custom-marker',
html: '<img src="https://logodix.com/logo/746371.png" width="30" height="30" style="border-radius: 50%;">',
iconUrl: 'https://logodix.com/logo/746371.png', // Replace with the path to your custom icon image
iconSize: [40, 40], // Set the size of the icon [width, height]
iconAnchor: [20, 20], // Set the anchor point of the icon [x, y]
popupAnchor: [0, -32] // Set the popup anchor point [x, y]
};

const customIcon = L.divIcon(customIconprops);

// const siteMarkers = [];
// siteData.forEach(site => {
//   const marker = L.marker(site.coordinates, { icon: customIcon }).addTo(map);
//   marker.bindPopup(site.name);
//   siteMarkers.push(marker);
// });


// Add markers for sites
const siteMarkers = [];
siteData.forEach(site => {
const marker = L.marker((site.coordinates), { icon: siteTypeIcons[site.type] }).addTo(map);
marker.bindPopup(site.name);
siteMarkers.push(marker);

// Create popup content
var popupContent = '<div><strong>' + site.name + '</strong></div>' +
'<button><a href="' + `https://nokia-page-3.vercel.app/` + '" target="_blank">Visit Website</a></button>';

// if url is mentioned in siteData
// '<button><a href="' + site.url + '" target="_blank">Visit Website</a></button>';


// Add popup to marker
marker.bindPopup(popupContent);

// Add site to the list
const listItem = document.createElement('li');
listItem.textContent = site.name;
document.getElementById('sitesList').appendChild(listItem);
});




// Add site types to the filter dropdown
const siteTypes = new Set(siteData.map(site => site.type));
siteTypes.forEach(type => {
const option = document.createElement('option');
option.value = type;
option.textContent = type;
document.getElementById('siteTypeFilter').appendChild(option);

// Add site type to the list
const listItem = document.createElement('li');
listItem.textContent = `${type} (${siteData.filter(site => site.type === type).length})`;
document.getElementById('siteTypeList').appendChild(listItem);
});

// Filter markers based on site type
const siteTypeFilter = document.getElementById('siteTypeFilter');
siteTypeFilter.addEventListener('change', () => {
const selectedType = siteTypeFilter.value;
siteMarkers.forEach(marker => {
  const site = siteData.find(site => site.coordinates[0] === marker.getLatLng().lat && site.coordinates[1] === marker.getLatLng().lng);
  if (selectedType === '' || site.type === selectedType) {
    marker.addTo(map);
  } else {
    map.removeLayer(marker);
  }
});
});

// Search functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
const searchValue = searchInput.value.toLowerCase();
siteMarkers.forEach(marker => {
  const site = siteData.find(site => site.coordinates[0] === marker.getLatLng().lat && site.coordinates[1] === marker.getLatLng().lng);
  if (site.name.toLowerCase().includes(searchValue)) {
    marker.addTo(map);
  } else {
    map.removeLayer(marker);
  }
});
});

// Initialize an empty LatLngBounds object
const bounds = L.latLngBounds([]);

// Iterate through each marker and extend the bounds
siteMarkers.forEach(marker => {
bounds.extend(marker.getLatLng());
});

// Set padding factor (in pixels)
const padding = [1.25, 1.25]; // Adjust as needed

// Set the map view to fit the bounds with padding
map.fitBounds(bounds, { padding });


    },
  },
};
</script>