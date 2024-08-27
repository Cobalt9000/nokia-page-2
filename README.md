# Interactive Site Map

This Vue.js project creates an interactive map application that displays various sites with custom markers and filtering capabilities.

## About

This application uses Vue.js and Leaflet to create a dynamic, interactive map interface. It allows users to:

- View sites on a map with custom icons based on site type
- Filter sites by type
- Search for specific sites
- View site details in popups
- Navigate to external links for more information about each site

The project is designed to be easily customizable and extensible for different datasets and use cases.

## Features

- Interactive map with custom markers
- Sidebar with search functionality
- Site filtering by type
- Responsive design
- Custom popup content for each site
- External link integration

## How to Use This Repository

1. Clone the repository:

```
git clone https://github.com/Cobalt9000/nokia-page-2.git
```

2. Navigate to the project directory:

```
cd nokia-page-2
```

3. Install dependencies:

```
npm install
```
or you can also use ```npm i``` for installing dependencies.

4. Run the development server:

```
npm run dev
```

5. Open your browser and visit `http://localhost:5173` (or the port specified in your console).

## Customization

To customize the map for your own use:

1. Replace the site data in `assets/data.js` with your own dataset.
2. Modify the site type icons in the `siteTypeIcons` object within `App.vue`.
3. Adjust the map's initial view and zoom level in the `initializeMap` method.
4. Customize the popup content and styling as needed.

## Dependencies

- Vue.js
- Leaflet
- Other dependencies are listed in `package.json`

## Contributing

Contributions to this project are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Create a new Pull Request

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or feedback, please open an issue in this repository.