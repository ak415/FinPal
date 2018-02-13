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



export default ChartGenerate;
