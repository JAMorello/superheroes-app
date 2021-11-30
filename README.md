# SuperHeroes App

![TODO List](/readme-assets/Banner.jpg)

**[Last relevant update: 31/10/21]**:exclamation:

# Table of Contents

- [About the app](#about-the-app)
- [How can I run the app locally?](#how-can-i-run-the-app-locally)
- [What will I see in the app?](#what-will-i-see-in-the-app)
- [Unresolved Issues](#unresolved-issues)

## About the app

This project was built for the React challenge of Alkemy Labs.
The app is responsive and his login data, as well the team assembled, persists in the local storage.

The following libraries are used:

- [React](https://es.reactjs.org/) to create the web application user interface
- [Redux Toolkit](https://redux-toolkit.js.org/) to manage the global state of the application
- [React Router](https://reactrouter.com/web/guides/quick-start) to facilitate navigation
- [Formik](https://formik.org/) to build forms
- [Axios](https://axios-http.com/) to make HTTP petitions
- [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/) for the front-end of the app
- [React Icons](https://react-icons.github.io/react-icons/) to display some icons.

The following API is used:

- [SuperHero API](https://superheroapi.com/)

## How can I run the app locally?

1. Clone or download the source code from Github
2. Run `npm install` in the terminal to install the required dependencies
3. Run `npm start` to open a local host in the browser and run the React app
4. In the Login page, the only credentials for a correct log in are: for email `challenge@alkemy.org` and for the password `react`.

## What will I see in the app?

#### Login

As long as the user tries to enter any route without being authenticated (logged in), would be redirected to the Login page where he can enter his credentials. If the wrong inputs are entered, a warning message will popup.

![Login](/readme-assets/Login.jpg)

#### Home

When the user has successfully logged in, the app will redirect him to the Home page. Here at the top will see the specialty of the team of heroes selected, it average of weight and height, as well the sum of all their powerstats.

![TeamStats](/readme-assets/TeamStats.jpg)

Below that chart, the user will see the info cards of the heros selected. Clicking on the "Detail" button will bring to the screen more info.

![TeamMember](/readme-assets/TeamMember.jpg)

#### Search

At the Seach page, apart of a search bar, when there are results of search (request to the SuperHero API), the hero cards will be displayed. The button may or may not be disabled and it will inform the user about the status: "Add" if the hero is available; "On Team" if the user already selected that hero; "Axis Filled" if there is already three heroes of the same allegiance in the team; and "Teamm Complete" if the team is composed of 6 heroes and have 3 heros of each posible allegiance.

![SearchResults](/readme-assets/SearchResults.jpg)

#### Page 404

If the user tries to go to any page that doesn't exist in the app, it will be redirected to a "Error 404: Page Not Foud" alert from where can go to the Home page or Search page.

![Page404](/readme-assets/Page404.jpg)

## Unresolved Issues

- In the Home page, when having more than one team member, its easy to see that not all hero cards have the same height. It varies depending of image size and name lenght.
