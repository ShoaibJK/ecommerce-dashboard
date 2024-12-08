/*Setup of the project*/
1. npm install
2. npm run server
3. npm run dev
4. The application should run on http://localhost:5173/, if not please check the terminal for the port


/*About the backend*/
1. The backend for the ecommerce dashboard is running on json server, the database for which is stored on json file on the root of the project in the file db.json .
2. Two APIs are used in the application one is for product listing and another for product details that is why the db.json file have two list of objects.
3. npm run server, will start the backend of the application. 

/*About the frontend*/
1. Vite is used for faster build process
2. All the components used are inside component folder
3. For utility, utils folder is created that have constant,types and alert toast files.
4. For loading image with better UX  loader on the Image is added, if the image load fails the fallback is placeholder image.
5. For infinite scroll debouncing of 0.5 secs is used so that even if user scroll multiple times the API call could be optimize.
6. Toaster is added for API error to handle error messages.

/*Further Enhancement*/
1. Currently all the css is written in the index.css file, that could have been broken into component level css files.
2. preprocessor like scss can be used.
3. Filters and sorting could be persist on page reload.
4. The application could not be hosted on github pages because json server does not provide a server to run the APIs
