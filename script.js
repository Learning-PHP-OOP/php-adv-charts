
function getData() {
 $.ajax({
   url: "server.php",
   method: "GET",
   success:function(data) {
            printChartJs(data);
             console.log("primaData :", data.fatturato);
            SecondPrintChartJs(data);
             console.log("SecondData :", data.fatturato_by_agent);
   },
   error: function(error) {
     console.log("error", error);
   }
 });
}

function printChartJs(data) {
 var general1 = data.fatturato;
  console.log("fatturato : ", general1.type);
 var valore1 = Object.values(general1["data"]);
  console.log("valore 1",valore1);
 var ctx = document.getElementById("myChart").getContext("2d");
 var myChart = new Chart(ctx, {
  type:"line",
  data:{
   labels:moment.months(),
   datasets:[{
    label:"Vendite",
    data:valore1,
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

function SecondPrintChartJs(data) {
 var general = data.fatturato_by_agent;
  console.log("fatturato by agent : ", general.type);
 var chiave = Object.keys(general["data"]); // restituisce un array contenente le proprietà enumerabili di un dato oggetto, nel medesimo ordine fornito da un ciclo for...in
 console.log("chiave 2 ",chiave);
 var valore = Object.values(general["data"]); //restituisce un array di valori di proprietà enumerabili propri di un determinato oggetto, nello stesso ordine di quello fornito da un ciclo for ... in
 console.log("valore 2 ", valore);

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
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',
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



//primo esperimento riuscito ma adesso ho unito le funzioni get data in una
//function getData() {
// $.ajax({
  // url: "server.php",
   //method: "GET",
 //  success: function(data) {
   //    printChartJs(data);
    //   console.log("data", data);
  // },
  // error: function(error) {
    // console.log("error", error);
   //}
 //});
//}
