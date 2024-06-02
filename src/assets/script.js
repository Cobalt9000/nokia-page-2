// Sample data for sites
// const siteData = [
//   { name: 'Alpha', coordinates: [24.68773, 46.72185], type: 'Self Support', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer:  'Tawall', url:'https://nokia3.vercel.app/'},
//   { name: 'Beta', coordinates: [40.71427, 74.00597], type: 'Self Support', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer:  'AT&T', url:'https://nokia3.vercel.app/'},
//   { name: 'Gamma', coordinates: [59.91273, 10.74609], type: 'Self Support', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer:  'ICE Norway', url:'https://nokia3.vercel.app/'},
//   { name: 'Delta', coordinates: [48.85341, 2.3488], type: 'Self Support', project: 'SFR 2023_2', Country: 'France', GeoRegion: 'EUR', Customer:  'SFR', url:'https://nokia3.vercel.app/'},
//   { name: 'Epsilon', coordinates: [21.49012, 39.18624], type: 'Self Support', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer:  'Tawall', url:'https://nokia3.vercel.app/'},
//   { name: 'Zeta', coordinates: [34.05223, 118.24368], type: 'Monopole', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer:  'AT&T', url:'https://nokia3.vercel.app/'},
//   { name: 'Eta', coordinates: [60.39299, 5.32415], type: 'Monopole', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer:  'ICE Norway', url:'https://nokia3.vercel.app/'},
//   { name: 'Theta', coordinates: [43.29695, 5.38107], type: 'Monopole', project: 'SFR 2023_2', Country: 'France', GeoRegion: 'EUR', Customer:  'SFR', url:'https://nokia3.vercel.app/'},
//   { name: 'lota', coordinates: [21.42664, 39.82563], type: 'Monopole', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer:  'Tawall', url:'https://nokia3.vercel.app/'},
//   { name: 'Kappa', coordinates: [41.85003, 87.65005], type: 'Monopole', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer:  'AT&T', url:'https://nokia3.vercel.app/'},
//   { name: 'Lambda', coordinates: [63.43049, 10.39506], type: 'Monopole', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer:  'ICE Norway', url:'https://nokia3.vercel.app/'},
//   { name: 'Mu', coordinates: [45.74846, 4.84671], type: 'Monopole', project: 'SFR 2023_2', Country: 'France', GeoRegion: 'EUR', Customer:  'SFR', url:'https://nokia3.vercel.app/'},
//   { name: 'Nu', coordinates: [24.46861, 39.61417], type: 'Rooftop', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer:  'Tawall', url:'https://nokia3.vercel.app/'},
//   { name: 'Xi', coordinates: [29.76328, 95.36327], type: 'Rooftop', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer:  'AT&T', url:'https://nokia3.vercel.app/'},
//   { name: 'Omicron', coordinates: [59.74389, 10.20449], type: 'Rooftop', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer:  'ICE Norway', url:'https://nokia3.vercel.app/'},
//   { name: 'Pi', coordinates: [43.60426, 1.44367], type: 'Rooftop', project: 'SFR 2023_2', Country: 'France', GeoRegion: 'EUR', Customer:  'SFR', url:'https://nokia3.vercel.app/'},
//   { name: 'Rho', coordinates: [26.43442, 50.10326], type: 'Rooftop', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer:  'Tawall', url:'https://nokia3.vercel.app/'},
//   { name: 'Sigma', coordinates: [39.95233, 75.16379], type: 'Rooftop', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer:  'AT&T', url:'https://nokia3.vercel.app/'},
//   { name: 'Tau', coordinates: [58.97005, 5.73332], type: 'Rooftop', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer:  'ICE Norway', url:'https://nokia3.vercel.app/'},
//   { name: 'Upsilon', coordinates: [43.70313, 7.26608], type: 'Rooftop', project: 'SFR 2024', Country: 'France', GeoRegion: 'EUR', Customer:  'SFR', url:'https://nokia3.vercel.app/'},
//   { name: 'Babby John', coordinates: [25.36467, 49.58764], type: 'Rooftop', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer:  'Tawall', url:'https://nokia3.vercel.app/'},
//   { name: 'Gain Toe', coordinates: [33.44838, 112.07404], type: 'Rooftop', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer:  'AT&T', url:'https://nokia3.vercel.app/'},
//   { name: 'Honny', coordinates: [58.14671, 7.9956], type: 'Rooftop', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer:  'ICE Norway', url:'https://nokia3.vercel.app/'},
//   { name: 'Jackly', coordinates: [47.21725, -1.55336], type: 'Rooftop', project: 'SFR 2024', Country: 'France', GeoRegion: 'EUR', Customer:  'SFR', url:'https://nokia3.vercel.app/'},
//   { name: 'Tinny', coordinates: [28.43279, 45.97077], type: 'Rooftop', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer:  'Tawall', url:'https://nokia3.vercel.app/'},
//   { name: 'Xi Prime', coordinates: [29.42412, 98.49363], type: 'Rooftop', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer:  'AT&T', url:'https://nokia3.vercel.app/'},
//   { name: 'Omicron Prime', coordinates: [69.6489, 18.95508], type: 'Rooftop', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer:  'ICE Norway', url:'https://nokia3.vercel.app/'},
//   { name: 'Pi Prime', coordinates: [48.58392, 7.74553], type: 'Guided Tower', project: 'SFR 2024', Country: 'France', GeoRegion: 'EUR', Customer:  'SFR', url:'https://nokia3.vercel.app/'},
//   { name: 'Eta Prime', coordinates: [27.52188, 41.69073], type: 'Guided Tower', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer:  'Tawall', url:'https://nokia3.vercel.app/'},
//   { name: 'Zeta Prime', coordinates: [32.71571, 117.16472], type: 'Guided Tower', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer:  'AT&T', url:'https://nokia3.vercel.app/'},
//   { name: 'Babby John', coordinates: [67.28, 14.40501], type: 'Guided Tower', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer:  'ICE Norway', url:'https://nokia3.vercel.app/'},
//   { name: 'Gain Toe', coordinates: [43.61093, 3.87635], type: 'Guided Tower', project: 'SFR 2024', Country: 'France', GeoRegion: 'EUR', Customer:  'SFR', url:'https://nokia3.vercel.app/'},
//   { name: 'Honny', coordinates: [24.49258, 39.58572], type: 'Watertower', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer:  'Tawall', url:'https://nokia3.vercel.app/'},
//   { name: 'Jackly', coordinates: [32.78306, 96.80667], type: 'Watertower', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer:  'AT&T', url:'https://nokia3.vercel.app/'},
//   { name: 'Tinny', coordinates: [68.43838, 17.4272], type: 'Watertower', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer:  'ICE Norway', url:'https://nokia3.vercel.app/'},
//   { name: 'Xi Prime', coordinates: [44.84044, -0.5805], type: 'Watertower', project: 'SFR 2024', Country: 'France', GeoRegion: 'EUR', Customer:  'SFR', url:'https://nokia3.vercel.app/'},
//   { name: 'Omicron Prime', coordinates: [28.3998, 36.57151], type: 'Guided Tower', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer:  'Tawall', url:'https://nokia3.vercel.app/'},
//   { name: 'Pi Prime', coordinates: [40.6501, 73.94958], type: 'Guided Tower', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer:  'AT&T', url:'https://nokia3.vercel.app/'},
//   { name: 'Eta Prime', coordinates: [59.37762, 10.75034], type: 'Guided Tower', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer:  'ICE Norway', url:'https://nokia3.vercel.app/'},
//   { name: 'Zeta Prime', coordinates: [50.63297, 3.05858], type: 'Guided Tower', project: 'SFR 2024', Country: 'France', GeoRegion: 'EUR', Customer:  'SFR', url:'https://nokia3.vercel.app/'},

//   // Add more site data as needed
// ];

// const siteData = async () => {
//   try {
//     const response = await fetch('https://nokia-dst.plutoze.me/api/v1/stations/country/USA', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching site data:', error);
//   }
// };



// siteData().then(data => {
//   // Add markers for sites
//   const siteMarkers = [];
//   data.forEach(site => {
//     // ...
//   });

//   // ...
// }).catch(error => {
//   console.error('Error fetching site data:', error);
// });


let siteData = fetch("https://nokia-dst.plutoze.me/api/v1/stations/country/USA")
siteData.then((Response) => {
  console.log(Response.status)
  console.log(Response.ok)
  return Response.json()
}).then((value2) => {
  console.log(value2)
})

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
'<button><a href="' + `https://nokia3.vercel.app/` + '" target="_blank">Visit Website</a></button>';

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

export default script;