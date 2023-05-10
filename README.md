# [FreeCommerce Website](freecommerce.com)

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

## How to start this App

```
# clone this rep 
git clone https://github.com/QuickerMaths/freeCommerce-project/

# go to directory
cd /path/to/your/directionry

# install dependencies
npm install

#start loacl server
npm run dev
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


