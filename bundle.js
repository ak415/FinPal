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
window.line;
let searchStocks = new __WEBPACK_IMPORTED_MODULE_0__search_stocks__["a" /* default */]();
Object(__WEBPACK_IMPORTED_MODULE_1__stock_chart__["a" /* default */])();
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class SearchStocks {

  constructor(props) {
    this.stockSearchForm = document.getElementById("stock-search-form");
    this.stockSearchForm.addEventListener("submit", this.submitSearch.bind(this));
    this.formatPrice = this.formatPrice.bind(this);
    this.populatePrice = this.populatePrice.bind(this);
    this.handleData = this.handleData.bind(this);
    this.populateChart = this.populateChart.bind(this);
    this.formatPriceChart = this.formatPriceChart.bind(this);
    this.generategraph = this.generategraph.bind(this);
    this.fetchNews = this.fetchNews.bind(this);
    this.populateNews = this.populateNews.bind(this);
  }


  submitSearch(e) {
    e.preventDefault();
    let result = this.fetchStockDaily(e.target[0].value);
  }
  // INTRADAY-REAL TIME
  // submitSearch(e) {
  //   e.preventDefault();
  //   let result = this.fetchStockIntraday(e.target[0].value);
  //   console.log(result);
  // }

  formatPrice(string) {
    let float_result = parseFloat(string).toFixed(2);
    return ("$" + float_result.toLocaleString(navigator.language));
  }

  formatPriceChart(string) {
    return parseFloat(parseFloat(string).toFixed(2));
  }



  fetchStockIntraday(ticker) {
    return $.ajax({
      method: 'GET',
      url: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=1min&apikey=GGBRHDRSWQ73S7MQ`
    });
  }


  fetchStockMonthly(ticker) {
    return $.ajax({
      method: 'GET',
      url: `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${ticker}&interval=1min&apikey=GGBRHDRSWQ73S7MQ`
    });
  }

  populatePrice(data) {
    let price = document.getElementById("previous-close");
    price.innerHTML = "";
    let previous_close = Object.values(Object.values(data["Time Series (Daily)"])[0])[3];
    price.append(this.formatPrice(previous_close));
  }

  fetchNews(ticker) {
    var self = this;
    return $.ajax({
      method: 'GET',
      url: `https://newsapi.org/v2/top-headlines?q=${ticker}&language=en&apiKey=9cb62e8ff29c46899f9bd97ca675b9a5`,
      success:
      function (data){
        self.populateNews(data);
      }
    });
  }

  populateNews(data) {
    let news = document.getElementById("fetched-news");
    // news.innerHTML = "";
    // debugger;
    let articles = data.articles;
    let result = [];
    for (var i = 0; i < 8; i++) {
      if (i> articles.length ) {
        break;
      }
      // debugger;
      let title = document.getElementById("title");
      title.append(JSON.stringify(articles[i].title));
      let date = document.getElementById("date");
      date.append(JSON.stringify(articles[i].publishedAt));
      let url = document.getElementById("url");
      url.append(JSON.stringify(articles[i].url));
      let source = document.getElementById("source");
      source.append(JSON.stringify(articles[i].source.name));

    }

  }



  fetchStockDaily(ticker) {
    var self = this;
    $("#loader").css("display", "block");

    return $.ajax({
      method: 'GET',
      url: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=GGBRHDRSWQ73S7MQ`,
      success:
      function (data){
        self.handleData(data,ticker);


        // let price = document.getElementById("previous-close");
        // price.innerHTML = "";
        // let previous_close = Object.values(Object.values(data["Time Series (Daily)"])[0])[3];
        // price.append(self.formatPrice(previous_close));

        // REAL-TIME
        // let last_closing_day = Object.keys(data["Time Series"])[0];
        // res.append(JSON.stringify(data["Time Series"][last_closing_day]));

      }
    });
  }

  handleData(data,ticker) {
    console.log(data);
    let res = document.getElementById("result");


    let last_closing_day = Object.keys(data["Time Series (Daily)"])[0];
    res.append(JSON.stringify(data["Time Series (Daily)"][last_closing_day]));
    this.populatePrice(data);
    this.populateChart(data);
    this.fetchNews(ticker);
    $("#loader").css("display", "none");

  }

  populateChart(data) {
    let dates = Object.keys(data["Time Series (Daily)"]).reverse();
    let prices = [];
    for (var i = 0; i < dates.length; i++) {
      prices.unshift(this.formatPriceChart((Object.values(data["Time Series (Daily)"]))[i]["4. close"]));
    }
    this.generategraph(dates,prices);
  }


  generategraph(dates,prices){
    let myChart = document.getElementById('stock-chart').getContext('2d');
    if (window.line){
      window.line.destroy();
    }
    window.line= new Chart(myChart,{
      type: 'line',
      data:{
        labels: dates,
        datasets: [{
          label: "Historical Stock Prices",
          backgroundColor: "transparent",
          borderColor: "rgb(221,85,31)",
          data: prices
        }]
      },
      options:{

        legend: {
            display: false,
        },
        tooltips: {
            callbacks: {
                label: tooltipItem => `${tooltipItem.yLabel}: ${tooltipItem.xLabel}`,
                title: () => null,
            }
        },
        responsive: true
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
let ChartGenerate = function (dates, prices){
  // let myChart = document.getElementById('stock-chart').getContext('2d');
  // let line = new Chart(myChart,{
  //   type: 'line',
  //   data:{
  //     labels: ["Jan","Feb","March","April","May"],
  //     datasets: [{
  //       label: "My Data",
  //       backgroundColor: "rgb(221,85,31)",
  //       borderColor: "rgb(221,85,31)",
  //       data: [50,34,23,12,1]
  //     }]
  //   },
  //   options:{
  //     responsive: true
  //   }
  // });
};



/* harmony default export */ __webpack_exports__["a"] = (ChartGenerate);


/***/ })
/******/ ]);