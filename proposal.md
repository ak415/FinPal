## FinPal - Let's build a better understanding of stocks.

### Background and Overview

FinPal is a tool that allows getting information about stocks and news related to the company selected.



Users can search specific stocks and find out their performance over a period of time they get to select.


### Functionality & MVP  

In FinPal, users will be able to:

- [ ] Search for specifc stocks.
- [ ] Gain a better understanding of financial terms.
- [ ] Get information about the stock's performance over a specifc period of time.


### Wireframes

This app will consist of a single screen with the search bar, the stock display information and nav links to the Github and my Linkedin.

The metrics provided for every single stock a user looks up will be highlighted and clicking on them will trigger displaying a message (or a modal) explaining the relevance of that specifc information.  

A sidebar with real time information about the stock imported from twitter or other APIs will be displayed.

![wireframes](https://github.com/aazaiez/FinPal/blob/master/Docs/Homepage.png?raw=true)

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript for overall structure and valuation logic,
- finance.js for formulae and calculations,
- Alphavantage/Intrinio API to get information about stocks.
- Intrinio API to get news about the specifc stock being displayed
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be three scripts involved in this project:

`display.js`: this script will handle the logic for creating and updating the necessary DOM elements.

`valuations.js`: this script will house the calculation logic for the metrics displayed.  

### Implementation Timeline

**Over the weekend**:
- [x] Figured out project idea
- [x] Did research about different valuation methods to figure out which ones can be resonably implemented within 5 days.

**Day 1**: Setup all necessary Node modules, including getting webpack up and running.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of the 2 scripts outlined above. Goals for the day:

- [x] Get `webpack` serving files and
- [x] Frame out index.html

**Day 2**: Dedicate this day to making sure all the information is coming through the APIx. Then, use `display.js` to create and render `Stocks`. Goals for the day:

- [x] Complete the `valuations.js` module


**Day 3**: Chart. Goals for the day:

- [x] Build out chart.

- [x] Make sure the user has a smooth experience and can easily go back to the stock's page.


**Day 4**: Style the frontend, making it polished and professional. Goals for the day:

- [x] Add stock analysis feature.
- [x] Make everything look nice and clean.

### Bonus features

There are many directions in which this project could evolve.

- [X] Add a feature that would allow the user to create an account and build a virtual portfolio.  
