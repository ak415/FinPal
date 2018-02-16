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

// let $fetchnews = $('#fetched-news').children();
// let $chart = $(".chart");
//
// if ($fetchnews.length <= 0){
//   $chart.removeClass('chart');
// }

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
    this.formatDate = this.formatDate.bind(this);
    this.fetchCompanyInfo = this.fetchCompanyInfo.bind(this);
    this.populateInfo = this.populateInfo.bind(this);
    this.addCommasToNumber = this.addCommasToNumber.bind(this);
    // this.fetchCeoInfo = this.fetchCeoInfo.bind(this);

    this.state = {
      tickerToName: {
       'V':'VISA',
       'YELP':'YELP',
       'AMZN':'AMAZON',
       'MU':'MICRON',
       'ATVI':'BLIZZARD',
       'MSFT':'MICROSOFT',
       'AAPL':'APPLE',
       'PYPL':'PAYPALL',
       'FB':'FACEBOOK',
       'EA':'ELECTRONIC',
       'ADBE':'ADOBE',
       'GOOGL':'GOOGLE',
       'BABA':'ALIBABA',
       'DLTR':'DOLLARTREE',
       'MA':'MASTERCARD',
       'AFLT':'AEROFLOT',
       'SBER':'SBERBANK',
       'YY':'YY',
       'NVDA':'NVIDIA',
       'WB':'WEIBO',
       'FSLR':'FIRSTSOLAR',
       'HTHT':'CHINALODGING',
       'SOHU':'SOHU',
       'INTC': "INTEL",
       'ADSK':'AUTODESK',
       'TCS':'TINKOFF',
       'JOBS':'JOBS',
       'ABBV':'ABBVIE',
       'AA':'ALCOA',
       'AMAT':'APPLIED',
       'RHT':'REDHAT',
       'DHI':'HORTON',
       'FMC':'FMC',
       'ABT':'ABBOTT',
       'CTSH':'COGNIZANT',
       'TWTR':'TWITTER',
    },
    nameToTicker: {
      'VISA': 'V',
      'TWITTER': 'TWTR',
      'AMAZON':'AMZN',
      'MICRON':'MU',
      'BLIZZARD':'ATVI',
      'MICROSOFT':'MSFT',
      'APPLE':'AAPL',
      'PAYPALL':'PYPL',
      'FACEBOOK':'FB',
      'ELECTRONIC':'EA',
      'ADOBE':'ADBE',
      'ALIBABA':'BABA',
      'DOLLARTREE':'DLTR',
      'MASTERCARD':'MA',
      'AEROFLOT':'AFLT',
      'SBERBANK':'SBER',
      'YY':'YY',
      'YELP':'YELP',
      'NVIDIA':'NVDA',
      'GOOGLE':'GOOGL',
      'WEIBO':'WB',
      'FIRSTSOLAR':'FSLR',
      'CHINALODGING':'HTHT',
      'SOHU':'SOHU',
      'INTEL':'INTC',
      'AUTODESK':'ADSK',
      'TINKOFF':'TCS',
      'JOBS':'JOBS',
      'ABBVIE':'ABBV',
      'ALCOA':'AA',
      'APPLIED':'AMAT',
      'REDHAT':'RHT',
      'HORTON':'DHI',
      'FMC':'FMC',
      'ABBOTT':'ABT',
      'COGNIZANT':'CTSH',
    }
    };
  }



  submitSearch(e) {
    e.preventDefault();
    let searchErrors = document.getElementById("errors");
      searchErrors.innerHTML = "";
    window.ticker = this.state.nameToTicker[e.target[0].value.toUpperCase()];
    window.ticker = e.target[0].value.toUpperCase();

    if (!Object.values(this.state.tickerToName).includes(e.target[0].value.toUpperCase()))
     {
      $(".errors").css('display','block');
      searchErrors.innerHTML = "Company not found, please try another one.";
    } else {
    let result = this.fetchStockDaily(this.state.nameToTicker[e.target[0].value.toUpperCase()]);
  }
  }
  // INTRADAY-REAL TIME
  // submitSearch(e) {
  //   e.preventDefault();
  //   let result = this.fetchStockIntraday(e.target[0].value);

  // }

  formatPrice(string) {
    let float_result = parseFloat(string).toFixed(2);
    return this.addCommasToNumber((float_result.toLocaleString(navigator.language)));
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
      url: `https://newsapi.org/v2/top-headlines?q=${this.state.tickerToName[ticker]}&from=2018-02-10&to=2018-02-15&language=en&apiKey=9cb62e8ff29c46899f9bd97ca675b9a5`,
      success:
      function (data){
        self.populateNews(data,ticker);
      }
    });
  }

  populateNews(data,ticker) {
    let fetchnews = document.getElementById('fetched-news');

    if (fetchnews.childNodes.length > 0){
      fetchnews.innerHTML = "";
    }

    let $chart = $('.chart');
    let chart2 = document.getElementById('chart2');
    if (!$chart[0]){
      chart2.setAttribute('class','chart');
    }

    for (let i=0 ; i <  data.articles.length ; i++){

      let divtitledate = document.createElement('div');
      let divtitle = document.createElement('div');
      let divdate = document.createElement('div');
      let divsourceurl = document.createElement('div');
      let divsource = document.createElement('div');
      let link = document.createElement('a');

      divtitledate.setAttribute("class","title-date");

      divtitle.appendChild(document.createTextNode(JSON.parse(JSON.stringify(data.articles[i].title))));
      divtitle.setAttribute("class","title");
      divdate.appendChild(document.createTextNode(JSON.parse(JSON.stringify(this.formatDate(data.articles[i].publishedAt)))));
      divdate.setAttribute("class","date");

      divsourceurl.setAttribute("class","url-source");

      divsource.appendChild(document.createTextNode(JSON.parse(JSON.stringify(data.articles[i].source.name))));
      link.appendChild(document.createTextNode("Read More »"));
      link.setAttribute("href",data.articles[i].url);


      divtitledate.append(divtitle);
      divtitledate.append(divdate);

      divsourceurl.append(divsource);
      divsourceurl.append(link);

      fetchnews.append(divtitledate);
      fetchnews.append(divsourceurl);
    }


  }

  formatDate(date) {
    let months = {
      "01": "Jan.",
      "02": "Feb.",
      "03": "Mar.",
      "04": "Apr.",
      "05": "May",
      "06": "June",
      "07": "July",
      "08": "Aug.",
      "09": "Sept.",
      "10": "Oct.",
      "11": "Nov.",
      "12": "Dec.",
    };

    return months[date.slice(5,7)] + " " + date.slice(8,10);
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
      },
      error: function(jqXHR, exception) {
        console.log("Error");
       }
    });
  }

  handleData(data,ticker) {

    let tickerBeta = document.getElementById("company-ticker");
    tickerBeta.innerHTML="";
    tickerBeta.append(ticker);
    this.populatePrice(data);
    this.populateChart(data);
    this.fetchNews(ticker);
    this.fetchCompanyInfo(ticker);
    // this.fetchCeoInfo(ticker);
    $("#loader").css("display", "none");
    $(".news-wrap").css("display", "block");
    $(".price-flex").css("display", "flex");
    $(".ticker-flex").css("display", "flex");
    $(".wrapper-content").css("display", "flex");
    $(".company-info-flex").css("display", "flex");
    $(".stock-search-all").css("padding-top","50px");
    $(".stock-search-all ").css("background","url('http://res.cloudinary.com/aazaiez/image/upload/v1518732733/background_tqww6e_hxgffg.jpg')no-repeat");
    $(".stock-search-all ").css("background-size","cover");
    $(".errors").css('display','none');
    $(".homepage-title").css('display','none');




  }

  populateChart(data) {
    let dates = Object.keys(data["Time Series (Daily)"]).reverse();
    let prices = [];
    for (var i = 0; i < dates.length; i++) {
      prices.unshift(this.formatPriceChart((Object.values(data["Time Series (Daily)"]))[i]["4. close"]));
    }
    this.generategraph(dates,prices);
  }

  addCommasToNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
          backgroundColor: "rgb(255, 238, 204)",
          borderColor: "rgb(153, 102, 0)",
          data: prices
        }]
      },
      options:{

        legend: {
            display: false,
        },
        elements: {
            point: { radius: 2 }
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

  fetchCompanyInfo(ticker) {
    var self = this;
    return $.ajax ({
      type: "GET",
      url: `https://api.intrinio.com/companies?ticker=${ticker}`,
      dataType: 'json',
      async: false,
      headers: {
        "Authorization": "Basic " + btoa("9f4227edd1e1b93df16a98acf253c9b6" + ":" + "5246003dd3f65d684b567a443cb1417e")
      },
      success:
      function (data){
        self.populateInfo(data,ticker);
      }
    });
  }


  populateInfo(data,ticker) {
    let oldInfo = document.getElementById('fetched-description');
    let oldCEOInfo  = document.getElementById('fetched-ceo');
    let oldEmployees  = document.getElementById('fetched-employees');

    if (oldInfo.childNodes.length > 0){
      oldInfo.innerHTML = "";
    }

    if (oldCEOInfo.childNodes.length > 0){
      oldCEOInfo.innerHTML = "";
    }

    if (oldEmployees.childNodes.length > 0){
      oldEmployees.innerHTML = "";
    }

    let descriptionExcerpt = data.short_description;
    let companyDescription = document.getElementById("fetched-description");
    companyDescription.append(JSON.parse(JSON.stringify(descriptionExcerpt)));

    let ceoExcerpt = data.ceo;
    let ceoDescription = document.getElementById("fetched-ceo");
    ceoDescription.append(JSON.parse(JSON.stringify(ceoExcerpt)));

    let employeesNumber = this.addCommasToNumber(data.employees);
    let employees = document.getElementById("fetched-employees");
    employees.append(JSON.parse(JSON.stringify(employeesNumber)));
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