const apiKey = 'GGBRHDRSWQ73S7MQ';

let fetchStockIntraday = (ticker) => {
  return $.ajax({
    method: 'GET',
    url: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=1min&apikey=GGBRHDRSWQ73S7MQ`
  });
};


let fetchStockDaily  = (ticker) => {
  return $.ajax({
    method: 'GET',
    url: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=GGBRHDRSWQ73S7MQ`
  });
};
