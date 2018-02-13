/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_stocks__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stock_chart__ = __webpack_require__(2);



document.addEventListener("DOMContentLoaded", () => {
let searchStocks = new __WEBPACK_IMPORTED_MODULE_0__search_stocks__["a" /* default */]();
Object(__WEBPACK_IMPORTED_MODULE_1__stock_chart__["a" /* default */])();
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class SearchStocks {

  constructor() {
    this.stockSearchForm = document.getElementById("stock-search-form");
    this.stockSearchForm.addEventListener("submit", this.submitSearch.bind(this));
  }


  submitSearch(e) {
    e.preventDefault();
    let result = this.fetchStockDaily(e.target[0].value);
    console.log(result);
  }
  // INTRADAY-REAL TIME
  // submitSearch(e) {
  //   e.preventDefault();
  //   let result = this.fetchStockIntraday(e.target[0].value);
  //   console.log(result);
  // }





  fetchStockIntraday(ticker) {
    return $.ajax({
      method: 'GET',
      url: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=1min&apikey=GGBRHDRSWQ73S7MQ`
    });
  }


  fetchStockDaily(ticker) {
    return $.ajax({
      method: 'GET',
      url: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=GGBRHDRSWQ73S7MQ`,
      success:function (data){
        let res = document.getElementById("result");

        let last_closing_day = Object.keys(data["Time Series (Daily)"])[0];
        res.append(JSON.stringify(data["Time Series (Daily)"][last_closing_day]));

        // REAL-TIME
        // let last_closing_day = Object.keys(data["Time Series"])[0];
        // res.append(JSON.stringify(data["Time Series"][last_closing_day]));
      }
    });
  }


}

window.SearchStocks = SearchStocks;

/* harmony default export */ __webpack_exports__["a"] = (SearchStocks);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let ChartGenerate = function (){
  let myChart = document.getElementById('stock-chart').getContext('2d');
  let line = new Chart(myChart,{
    type: 'line',
    data:{
      labels: ["Jan","Feb","March","April","May"],
      datasets: [{
        label: "My Data",
        backgroundColor: "rgb(221,85,31)",
        borderColor: "rgb(221,85,31)",
        data: [50,34,23,12,1]
      }]
    },
    options:{
      responsive: true
    }
  });
};



/* harmony default export */ __webpack_exports__["a"] = (ChartGenerate);


/***/ })
/******/ ]);