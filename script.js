
function getData() {
 $.ajax({
   url: "server.php",
   method: "GET",
   success: function(data) {
       printChartJs(data);
       console.log("data", data);
   },
   error: function(error) {
     console.log("error", error);
   }
 });
}

function printChartJs(data) {
 var ctx = document.getElementById("myChart").getContext("2d");
 var myChart = new Chart(ctx, {
  type:"line",
  data:{
   labels:moment.months(),
   datasets:[{
    label:"vendite",
    data:data
   }]
  }
 });
}

function init() {
  getData();
}
$(document).ready(init);
