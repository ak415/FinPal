## FinPal - How much is a company worth?

### Background and Overview

FinPal is a valuation tool that allows using different valuation techniques to figure out how much a company is worth.


Users create an initial state by providing financial data about the business they are trying to value. Once they provide the information, they choose what valuation method to use. 

Additionally, users are able to define:
* An upside/downside of the company's stock if it's public
* A weighting of different valuation methods to come up with a final value

The value is determined using the following finncial modelling techniques: 
* Discounted cash flow analysis 
* Revenue Multiple Method
* Asset Approach

### Functionality & MVP  

In FinPal, users will be able to:

- [ ] Create custom valuations
- [ ] Change valuation inputs and view how that affects the final value
- [ ] See upside/downside potential if the company being valued is public

In addition, this project will include:

- [ ] Descriptions of the different inputs requested from the user. 
- [ ] An valuation overview once the user has provided all the info. 

### Wireframes

This app will consist of a single screen with the valuation method selectors and nav links to the Github, my LinkedIn 

Valuation selector will include a dropdown to choose the methodologies to be used. Users will be able to choose more than one method and apply weighting. 

Valuation completion status bar on top of the page. 

On the left, there will be a menu showing the user what the steps leading to the valuation completion are. 

![wireframes](tbd)

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript for overall structure and valuation logic,
- finance.js for formulae and calculations,
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be three scripts involved in this project:

`display.js`: this script will handle the logic for creating and updating the necessary DOM elements.

`valuations.js`: this script will house the calculation logic for the valuations.  

### Implementation Timeline

**Over the weekend**:
- [x] Figured out project idea
- [x] Did research about different valuation methods to figure out which ones can be resonably implemented within 5 days.

**Day 1**: Setup all necessary Node modules, including getting webpack up and running.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of the 2 scripts outlined above. Goals for the day:

- [x] Get `webpack` serving files and 
- [x] Frame out index.html

**Day 2**: Dedicate this day to figuring out the logic for all the valuations. Then, use `display.js` to create and render `valuations`. Goals for the day:

- [x] Complete the `valuations.js` module: 1) DCF, 2) the Multiples Approach, 3) Asset Approach.


**Day 3**: Complete the models. Goals for the day:

- [x] Build out a functional DCF model. 
- [x] Build out a functional Revenue Multiples model. 
- [x] Build out a functional Asset model. 

**Day 4**: Add Stock upside/downside analysis. Style the frontend, making it polished and professional. Goals for the day:

- [x] Add stock analysis feature.
- [x] Make everything look nice and clean.

### Bonus features

There are many directions in which this project could evolve.

- [ ] Use API to pull financial data automatically if a user has selected a public company

