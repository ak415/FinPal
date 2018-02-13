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

export default SearchStocks;
