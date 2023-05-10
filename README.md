# [FreeCommerce Website](https://freecommerce.shop)

## A fully functional ecommerce store written in React and TypeScript

This project is a summary of knowledge that I've gained in the past few months. The app was built with ReactJS and TypeScript, and for the backend part, I used Strapi headlessCMS with PostgresDB. As a beginner frontend developer, I'm really proud of it because I've managed to build my first complex frontend app, which has real-life usage. During the whole process of building this application, I've learned:

* How to manage state of the application using Redux/Toolkit.
* How to fetch, cache and normalize data with RTKQuery.
* How to manage user authentication with JWT Token send in HTTPS only cookies.
* How to integrate email sending services like Sendgrid with frontend application.
* How to integrate payment processing services like Stripe.
* How to apply routing using React Router DOM.


## Let's dive deeper into application features

In the first place, like every ecommerce store, the application gives the user the ability to add products to the cart, which is constantly saving in localStorage. To do that, I've used middleware listeners from Redux/Toolkit, which allows easily overwriting localStorage items every time a certain reducer is dispatched. Same thing with product filters, which are pretty simple and based on Strapi API endpoint filtering.

When it comes to the payment process, I've integrated Stripe API with redirects user to Stripe payment page. After the user finishes the payment process (also by canceling it), they are redirected to a success or cancel page where they can see a summary of their order with all the data retrieved from Stripe API (if the user is logged in to their account, the order summary is being saved on the server, which allows them to look it up later on).

Moving forward to the user account feature, the user can register their account only after email confirmation, which is being sent by Sendgrid provider. After successful registration, the user gets access to features like saving items on their wishlist (items are saved on the backend site, which allows the user to see their wishlist on different devices), viewing previously made orders, and the ability to add phone number user data, to, for example, retrieve SMS notifications. The application also allows the user to change their password using their email after they forget it.

### [Strapi application](https://github.com/QuickerMaths/freecommerceStrapi)

## To start this App first you have to clone and start strapi application linked above and get your own strapi Api key

``` 
#clone repo linked above 
git clone https://github.com/QuickerMaths/freecommerceStrapi
```

Now you have to create your own strapi app, to do that:

```
# create a directory of your strapi App and enter it
cd /your/strapi/app/direcotory/pah

# install strapi 
npx create-strapi-app@latest .
```

Configure your app like this

<img width="540" alt="Zrzut ekranu 2023-05-10 o 16 54 42" src="https://github.com/QuickerMaths/freeCommerce/assets/116837090/9b759432-5c31-429c-99ad-2d0bcab18212">

You can also choose another database, but you have to install it first. Choosing SQLite is the easiest choice.
After installation process is success replace all the files with those from previusly cloned repo and run

```
npm install
````

To enable all app features add aditional env variables

```
# Jwt Cookie extension
COOKIE_PAYLOAD_LIFESPAN_MINUTES=500
APP_NAME=Freecommerce
FRONTEND_DOMAIN=localhost
#Stripe
STRIPE_KEY=<your stripe api key>
STRIPE_FRONTEND=https://localhost:1337/
#Sendgrid
SENDGRID_API_KEY=<your sendgrid api key>
```

Now you are ready to go, you can add your own products, collection types etc.

```
# Strat your strapi app 
npm run develop
```

### How to get ApiKey 

In your strapi app after creating your admin user: 
1. Go to settings.
2. Go to Api Tokens.
3. Generate your token and name it however you want
4. Set token duration to unlimited 
5. Set token type to custom and enable all Permissions
6. Copy generated Api key and paste in as your VITE_API_TOKEN variable in your frontend app

## How to start frontend App

```
# clone this rep 
git clone https://github.com/QuickerMaths/freeCommerce

# go to directory
cd /path/to/your/directory

# install dependencies
npm install

#start local server
npm run dev
```
Create .env file in package.json direcoroty and type env variables

```
VITE_API_TOKEN = <type your strapi Api key>
VITE_API_URL = http://localhost:1337/api
VITE_UPLOAD_URL = http://localhost:1337

#In order for stripe to work u have to provide additional variables
VITE_STRIPE_PB_KEY = <your stripe publishible>
VITE_STRIPE_KEY = <your stripe secret key>
```

## Full Techstack

* [TypeScript](https://www.typescriptlang.org/)
* [React](https://react.dev/) - frontend framework
* [Sass](https://sass-lang.com/) - PostCSS framework
* [React Router Dom](https://reactrouter.com/en/main) - routing
* [Redux/Toolkit](https://redux-toolkit.js.org/) - state management
* [RTKQuery](https://redux-toolkit.js.org/rtk-query/overview) - data fetching
* [Tositfy](https://www.npmjs.com/package/react-toastify) - notifications
* [ReactIcons](https://github.com/react-icons/react-icons) - icons
* [@bwyx/strapi-jwt-cookies](https://github.com/bwyx/strapi-jwt-cookies) - JWTToken sending
* [Postgres](https://www.postgresql.org/) - Database
* [Strapi](https://strapi.io/) - backend schemas, endpoints, etc.
* [Stripe](https://stripe.com/en-pl) - payment processing
* [SendGrid](https://sendgrid.com/) - email provider
* [Hostinger](https://www.hostinger.pl/) - hosting provider

## Todo 

- [ ] Add ability to login using google, facebook
- [ ] Work on website performence score


