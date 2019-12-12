
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

function SecondGetData() {
 $.ajax({
   url: "secondoServer.php",
   method: "GET",
   success: function(data) {
       SecondPrintChartJs(data); //so che l'errore è qui ma non riesco neanche a vedere il console.log
       console.log("SecondData :", data);
   },
   error: function(error) {
     console.log("error", error);
   }
 });
}

function SecondPrintChartJs(data, type, labels) {
 var ctx = document.getElementById("myChart2").getContext("2d");
 var myChart = new Chart(ctx, {
  type:type,
  data:{
   labels:labels,
   datasets:[{
    label:"Fatturato Agenti",
    data:data,
    backgroundColor: [
       'rgba(54, 162, 235, 0.2)',
       'rgba(255, 206, 86, 0.2)',
       'rgba(75, 192, 192, 0.2)',
       'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
                    'rgba(153, 102, 255, 1)',
                ]
   }]
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
    label:"Vendite",
    data:data,
    backgroundColor: [
              'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
                    'rgba(153, 102, 255, 1)',
                ]
   }]
  }
 });
}

function init() {
  getData();
}
$(document).ready(init);
