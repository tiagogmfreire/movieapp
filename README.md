# Upcoming movies PWA APP

I decided to make a Progressive Web App for the frontend and a PHP/Lumen for the the backend app and made both of them indepently and in two different git repositories.

I made the frontend app as a PWA using the Quasar framework https://quasar.dev/ (which is built on top of Vue JS) using the default pwa build toolling.

for development:
>quasar dev --mode pwa

and for deploying to production
> quasar build --mode pwa

The frontend has been deployed to netlify and is avaible online at:
https://pedantic-visvesvaraya-a344b8.netlify.com

The default page shows the list of upcoming movies. There is a search feature. Every movie has a "see more..." link that shows the details of the selected movie.

The requests are made using the Axios library.

The information returned by the API is stored using Vuex.

The information is retrieved from the backend API. It's source code is avaible at:
https://github.com/tiagogmfreire/moviesapi

The API been deployed to Amazon AWS with a custom domain at:
https://movies.tiagofreire.dev

The backend API uses the https://www.themoviedb.org API version 3 to obtain information and stores that information in it's own database.

At the moment the API contains the data of 100 upcoming movies.

Only these movies are shown in the upcoming list, search and movie details sections of the frontend app.

For more information about the architecture please check the read-me file of the backend project.
