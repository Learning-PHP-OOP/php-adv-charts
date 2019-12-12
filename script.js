
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
   success:function(data) {
            //console.log("SecondData :", data.fatturato_by_agent);
             SecondPrintChartJs(data);

   },
   error: function(error) {
     console.log("error", error);
   }
 });
}

function SecondPrintChartJs(data) {
 var general = data.fatturato_by_agent;
 console.log(general.type);
 var chiave = Object.keys(general["data"]); // restituisce un array contenente le proprietà enumerabili di un dato oggetto, nel medesimo ordine fornito da un ciclo for...in
 var valore = Object.values(general["data"]); //restituisce un array di valori di proprietà enumerabili propri di un determinato oggetto, nello stesso ordine di quello fornito da un ciclo for ... in
 console.log(valore);

 var ctx = document.getElementById("myChart2").getContext("2d");
 var myChart = new Chart(ctx, {
  type:general["type"],
  data:{
   labels:chiave,
   datasets:[{
    data:valore,
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
  SecondGetData();
}
$(document).ready(init);
