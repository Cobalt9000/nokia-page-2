const siteData = [
  { name: 'Alpha', coordinates: [24.68773, 46.72185], type: 'Self Support', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer:  'Tawall', url:'https://nokia3.vercel.app/'},
  { name: 'Beta', coordinates: [40.71427, 74.00597], type: 'Self Support', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer:  'AT&T', url:'https://nokia3.vercel.app/'},
  { name: 'Gamma', coordinates: [59.91273, 10.74609], type: 'Self Support', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer:  'ICE Norway', url:'https://nokia3.vercel.app/'},
  { name: 'Delta', coordinates: [48.85341, 2.3488], type: 'Self Support', project: 'SFR 2023_2', Country: 'France', GeoRegion: 'EUR', Customer:  'SFR', url:'https://nokia3.vercel.app/'},
  { name: 'Epsilon', coordinates: [21.49012, 39.18624], type: 'Self Support', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer:  'Tawall', url:'https://nokia3.vercel.app/'},
  { name: 'Zeta', coordinates: [34.05223, 118.24368], type: 'Monopole', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer:  'AT&T', url:'https://nokia3.vercel.app/'},
  { name: 'Eta', coordinates: [60.39299, 5.32415], type: 'Monopole', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer:  'ICE Norway', url:'https://nokia3.vercel.app/'},
  { name: 'Theta', coordinates: [43.29695, 5.38107], type: 'Monopole', project: 'SFR 2023_2', Country: 'France', GeoRegion: 'EUR', Customer:  'SFR', url:'https://nokia3.vercel.app/'},
  { name: 'lota', coordinates: [21.42664, 39.82563], type: 'Monopole', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer:  'Tawall', url:'https://nokia3.vercel.app/'},
  { name: 'Kappa', coordinates: [41.85003, 87.65005], type: 'Monopole', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer:  'AT&T', url:'https://nokia3.vercel.app/'},
  { name: 'Lambda', coordinates: [63.43049, 10.39506], type: 'Monopole', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer:  'ICE Norway', url:'https://nokia3.vercel.app/'},
  { name: 'Mu', coordinates: [45.74846, 4.84671], type: 'Monopole', project: 'SFR 2023_2', Country: 'France', GeoRegion: 'EUR', Customer:  'SFR', url:'https://nokia3.vercel.app/'},
  { name: 'Nu', coordinates: [24.46861, 39.61417], type: 'Rooftop', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer:  'Tawall', url:'https://nokia3.vercel.app/'},
  { name: 'Xi', coordinates: [29.76328, 95.36327], type: 'Rooftop', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer:  'AT&T', url:'https://nokia3.vercel.app/'},
  { name: 'Omicron', coordinates: [59.74389, 10.20449], type: 'Rooftop', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer:  'ICE Norway', url:'https://nokia3.vercel.app/'},
  { name: 'Pi', coordinates: [43.60426, 1.44367], type: 'Rooftop', project: 'SFR 2023_2', Country: 'France', GeoRegion: 'EUR', Customer:  'SFR', url:'https://nokia3.vercel.app/'},
  { name: 'Rho', coordinates: [26.43442, 50.10326], type: 'Rooftop', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer:  'Tawall', url:'https://nokia3.vercel.app/'},
  { name: 'Sigma', coordinates: [39.95233, 75.16379], type: 'Rooftop', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer:  'AT&T', url:'https://nokia3.vercel.app/'},
  { name: 'Tau', coordinates: [58.97005, 5.73332], type: 'Rooftop', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer:  'ICE Norway', url:'https://nokia3.vercel.app/'},
  { name: 'Upsilon', coordinates: [43.70313, 7.26608], type: 'Rooftop', project: 'SFR 2024', Country: 'France', GeoRegion: 'EUR', Customer:  'SFR', url:'https://nokia3.vercel.app/'},
  { name: 'Babby John', coordinates: [25.36467, 49.58764], type: 'Rooftop', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer:  'Tawall', url:'https://nokia3.vercel.app/'},
  { name: 'Gain Toe', coordinates: [33.44838, 112.07404], type: 'Rooftop', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer:  'AT&T', url:'https://nokia3.vercel.app/'},
  { name: 'Honny', coordinates: [58.14671, 7.9956], type: 'Rooftop', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer:  'ICE Norway', url:'https://nokia3.vercel.app/'},
  { name: 'Jackly', coordinates: [47.21725, -1.55336], type: 'Rooftop', project: 'SFR 2024', Country: 'France', GeoRegion: 'EUR', Customer:  'SFR', url:'https://nokia3.vercel.app/'},
  { name: 'Tinny', coordinates: [28.43279, 45.97077], type: 'Rooftop', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer:  'Tawall', url:'https://nokia3.vercel.app/'},
  { name: 'Xi Prime', coordinates: [29.42412, 98.49363], type: 'Rooftop', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer:  'AT&T', url:'https://nokia3.vercel.app/'},
  { name: 'Omicron Prime', coordinates: [69.6489, 18.95508], type: 'Rooftop', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer:  'ICE Norway', url:'https://nokia3.vercel.app/'},
  { name: 'Pi Prime', coordinates: [48.58392, 7.74553], type: 'Guided Tower', project: 'SFR 2024', Country: 'France', GeoRegion: 'EUR', Customer:  'SFR', url:'https://nokia3.vercel.app/'},
  { name: 'Eta Prime', coordinates: [27.52188, 41.69073], type: 'Guided Tower', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer:  'Tawall', url:'https://nokia3.vercel.app/'},
  { name: 'Zeta Prime', coordinates: [32.71571, 117.16472], type: 'Guided Tower', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer:  'AT&T', url:'https://nokia3.vercel.app/'},
  { name: 'Babby John', coordinates: [67.28, 14.40501], type: 'Guided Tower', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer:  'ICE Norway', url:'https://nokia3.vercel.app/'},
  { name: 'Gain Toe', coordinates: [43.61093, 3.87635], type: 'Guided Tower', project: 'SFR 2024', Country: 'France', GeoRegion: 'EUR', Customer:  'SFR', url:'https://nokia3.vercel.app/'},
  { name: 'Honny', coordinates: [24.49258, 39.58572], type: 'Watertower', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer:  'Tawall', url:'https://nokia3.vercel.app/'},
  { name: 'Jackly', coordinates: [32.78306, 96.80667], type: 'Watertower', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer:  'AT&T', url:'https://nokia3.vercel.app/'},
  { name: 'Tinny', coordinates: [68.43838, 17.4272], type: 'Watertower', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer:  'ICE Norway', url:'https://nokia3.vercel.app/'},
  { name: 'Xi Prime', coordinates: [44.84044, -0.5805], type: 'Watertower', project: 'SFR 2024', Country: 'France', GeoRegion: 'EUR', Customer:  'SFR', url:'https://nokia3.vercel.app/'},
  { name: 'Omicron Prime', coordinates: [28.3998, 36.57151], type: 'Guided Tower', project: 'Tawall 2024', Country: 'Saudi Arabia', GeoRegion: 'MEA', Customer:  'Tawall', url:'https://nokia3.vercel.app/'},
  { name: 'Pi Prime', coordinates: [40.6501, 73.94958], type: 'Guided Tower', project: 'NAM_AT_1', Country: 'USA', GeoRegion: 'NAM', Customer:  'AT&T', url:'https://nokia3.vercel.app/'},
  { name: 'Eta Prime', coordinates: [59.37762, 10.75034], type: 'Guided Tower', project: 'ICE 2024', Country: 'Norway', GeoRegion: 'EUR', Customer:  'ICE Norway', url:'https://nokia3.vercel.app/'},
  { name: 'Zeta Prime', coordinates: [50.63297, 3.05858], type: 'Guided Tower', project: 'SFR 2024', Country: 'France', GeoRegion: 'EUR', Customer:  'SFR', url:'https://nokia3.vercel.app/'},

  // Add more site data as needed
];

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