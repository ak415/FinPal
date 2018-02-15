import SearchStocks from './search_stocks';
import ChartGenerate from '../stock-chart';


document.addEventListener("DOMContentLoaded", () => {
window.line;

// let $fetchnews = $('#fetched-news').children();
// let $chart = $(".chart");
//
// if ($fetchnews.length <= 0){
//   $chart.removeClass('chart');
// }

let searchStocks = new SearchStocks();
ChartGenerate();
});
