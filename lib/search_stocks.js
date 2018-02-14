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
    this.state = {
      tickerToName: {
       'V':'VISA',
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
    },
    nameToTicker: {
      'VISA': 'V',
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
    let result = this.fetchStockDaily(this.state.nameToTicker[e.target[0].value.toUpperCase()]);
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
      url: `https://newsapi.org/v2/top-headlines?q=${this.state.tickerToName[ticker]}&language=en&apiKey=9cb62e8ff29c46899f9bd97ca675b9a5`,
      success:
      function (data){
        self.populateNews(data,ticker);
      }
    });
  }

  populateNews(data,ticker) {
    let titleBeta = document.getElementById("title");
    titleBeta.innerHTML="";
    let dateBeta = document.getElementById("date");
    dateBeta.innerHTML="";
    let urlBeta = document.getElementById("url");
    urlBeta.innerHTML="";
    let sourceBeta = document.getElementById("source");
    sourceBeta.innerHTML="";
    let tickerBeta = document.getElementById("company-ticker");
    tickerBeta.innerHTML="";
    tickerBeta.append(ticker);

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

export default SearchStocks;
