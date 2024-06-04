const siteData = 
// Saudi Arabia
[
  { name: 'Alpha', coordinates: [20.54, 44.82], type: 'Self Support', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer: 'Tawall'},
  { name: 'Epsilon', coordinates: [27.63, 41.96], type: 'Self Support', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer: 'Tawall'},
  { name: 'lota', coordinates: [18.47, 42.59], type: 'Monopole', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer: 'Tawall'},
  { name: 'Nu', coordinates: [25.21, 49.15], type: 'Rooftop', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer: 'Tawall'},
  { name: 'Rho', coordinates: [23.88, 45.39], type: 'Rooftop', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer: 'Tawall'},
  { name: 'Babby John', coordinates: [28.96, 36.42], type: 'Rooftop', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer: 'Tawall'},
  { name: 'Tinny', coordinates: [22.19, 38.51], type: 'Rooftop', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer: 'Tawall'},
  { name: 'Eta Prime', coordinates: [19.84, 39.26], type: 'Guided Tower', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer: 'Tawall'},
  { name: 'Honny', coordinates: [21.34, 42.21], type: 'Watertower', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer: 'Tawall'},
  { name: 'Omicron Prime', coordinates: [26.17, 50.24], type: 'Guided Tower', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer: 'Tawall'},

// USA

  { name: 'Beta', coordinates: [48.86, -97.16], type: 'Self Support', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer: 'AT&T'},
  { name: 'Zeta', coordinates: [44.97, -123.09], type: 'Monopole', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer: 'AT&T'},
  { name: 'Kappa', coordinates: [35.61, -106.07], type: 'Monopole', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer: 'AT&T'},
  { name: 'Xi', coordinates: [41.51, -71.28], type: 'Rooftop', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer: 'AT&T'},
  { name: 'Sigma', coordinates: [30.27, -81.66], type: 'Rooftop', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer: 'AT&T'},
  { name: 'Gain Toe', coordinates: [38.58, -121.49], type: 'Rooftop', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer: 'AT&T'},
  { name: 'Xi Prime', coordinates: [47.04, -109.53], type: 'Rooftop', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer: 'AT&T'},
  { name: 'Zeta Prime', coordinates: [43.61, -116.2], type: 'Guided Tower', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer: 'AT&T'},
  { name: 'Jackly', coordinates: [37.77, -122.42], type: 'Watertower', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer: 'AT&T'},
  { name: 'Pi Prime', coordinates: [40.74, -73.99], type: 'Guided Tower', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer: 'AT&T'},

// Norway

  { name: 'Gamma', coordinates: [60.47, 8.47], type: 'Self Support', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer: 'ICE Norway'},
  { name: 'Eta', coordinates: [59.91, 10.75], type: 'Monopole', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer: 'ICE Norway'},
  { name: 'Lambda', coordinates: [62.16, 6.12], type: 'Monopole', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer: 'ICE Norway'},
  { name: 'Omicron', coordinates: [63.44, 10.4], type: 'Rooftop', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer: 'ICE Norway'},
  { name: 'Tau', coordinates: [61.05, 4.71], type: 'Rooftop', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer: 'ICE Norway'},
  { name: 'Honny', coordinates: [58.88, 5.74], type: 'Rooftop', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer: 'ICE Norway'},
  { name: 'Tinny', coordinates: [67.3, 14.52], type: 'Rooftop', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer: 'ICE Norway'},
  { name: 'Babby John', coordinates: [65.06, 13.35], type: 'Guided Tower', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer: 'ICE Norway'},
  { name: 'Eta Prime', coordinates: [59.92, 10.68], type: 'Guided Tower', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer: 'ICE Norway'},
  { name: 'Omicron Prime', coordinates: [68.8, 15.64], type: 'Watertower', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer: 'ICE Norway'},


// France

  { name: 'Delta', coordinates: [46.23, 2.21], type: 'Self Support', project: 'SFR 2023_2', Country: 'France', GeoRegion: 'EUR', Customer: 'SFR'},
  { name: 'Theta', coordinates: [43.6, 1.44], type: 'Monopole', project: 'SFR 2023_2', Country: 'France', GeoRegion: 'EUR', Customer: 'SFR'},
  { name: 'Mu', coordinates: [48.86, 2.35], type: 'Monopole', project: 'SFR 2023_2', Country: 'France', GeoRegion: 'EUR', Customer: 'SFR'},
  { name: 'Pi', coordinates: [45.19, 5.73], type: 'Rooftop', project: 'SFR 2023_2', Country: 'France', GeoRegion: 'EUR', Customer: 'SFR'},
  { name: 'Upsilon', coordinates: [43.3, 5.37], type: 'Rooftop', project: 'SFR 2024', Country: 'France', GeoRegion: 'EUR', Customer: 'SFR'},
  { name: 'Jackly', coordinates: [49.19, 2.38], type: 'Rooftop', project: 'SFR 2024', Country: 'France', GeoRegion: 'EUR', Customer: 'SFR'},
  { name: 'Pi Prime', coordinates: [48.87, 2.34], type: 'Guided Tower', project: 'SFR 2024', Country: 'France', GeoRegion: 'EUR', Customer: 'SFR'},
  { name: 'Gain Toe', coordinates: [43.7, 7.27], type: 'Guided Tower', project: 'SFR 2024', Country: 'France', GeoRegion: 'EUR', Customer: 'SFR'},
  { name: 'Xi Prime', coordinates: [46.15, 3.43], type: 'Watertower', project: 'SFR 2024', Country: 'France', GeoRegion: 'EUR', Customer: 'SFR'},
  { name: 'Zeta Prime', coordinates: [48.58, 7.75], type: 'Guided Tower', project: 'SFR 2024', Country: 'France', GeoRegion: 'EUR', Customer: 'SFR'}
];



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

// const fetchSiteData = async () => {
//   try {
//     const response = await fetch('https://nokia-dst.plutoze.me/api/v1/stations/customers/AT%26T');
//     const data = await response.json();

//     // Transforming the fetched data
//     const siteData = data.map(site => ({
//       name: site.name,
//       type: site.type,
//       Customer: site.customer,
//       project: site.project,
//       coordinates: site.coordinates,
//       Country: site.country,
//       GeoRegion: site.geo_region
//     }));

//     return siteData;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return [];
//   }
// };

// export default fetchSiteData;


export default siteData;