## Dependencies: 
    - SASS npm i sass
    - Tailwind: npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
    - Craco: npm install @craco/craco
    - Material UI: npm install @material-ui/core @material-ui/icons


##  Tailwindcss setup
    - Craco script setup:
      {
    // ...
    "scripts": {
        change 
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test",
        replace with
     "start": "craco start",
     "build": "craco build",
     "test": "craco test",
      "eject": "react-scripts eject"
              },
    }
    - craco.config.js: Create file in root of project
    // craco.config.js
    module.exports = {
    style: {
        postcss: {
        plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
                ],
                },
            },
        };

    - generate tailwind.config.js:
    replace:
    purge: []

    with:
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    
    include tailwind in index.css:
    /* ./src/index.css */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;


