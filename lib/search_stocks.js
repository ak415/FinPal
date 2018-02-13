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
        res.append({data});
      }
    });
  }


}

window.SearchStocks = SearchStocks;

export default SearchStocks;
