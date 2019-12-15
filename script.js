function getData() {

 $.ajax({
   url: "server.php",
   method: "GET",
   success:function(data) {

             printChartJs(data);
              console.log("primaData :", data.fatturato); //debug
             SecondPrintChartJs(data);
              console.log("SecondData :", data.fatturato_by_agent);//debug
             thirdPrintChartJs(data);
             console.log("thirdData: ", data.team_efficiency);//debug

   },
   error: function(error) {
     console.log("error", error);
   }
 });
}

function printChartJs(data) {
 var general1 = data.fatturato;
  console.log("fatturato : ", general1.type);//debug
 var valore1 = Object.values(general1["data"]);
  console.log("valore 1",valore1);//debug
 var ctx = document.getElementById("myChart").getContext("2d");
 var myChart = new Chart(ctx, {
  type:general1["type"],
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
  console.log("fatturato by agent : ", general.type);//debug
 var chiave = Object.keys(general["data"]);
  console.log("chiave 2 ",chiave);//debug
 var valore = Object.values(general["data"]);
  console.log("valore 2 ", valore);//debug

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

function thirdPrintChartJs(data) {
 var general3 = data.team_efficiency;//debug
  console.log("team_efficiency :", general3);//debug
 var chiave3 = Object.keys(general3["data"]);
  console.log("chiave 3 : ", chiave3);//debug
 var valore3 = Object.values(general3["data"]);
  console.log("valore tre di1: ", valore3[0]);//debug
  console.log("valore tre di2: ", valore3[1]);//debug
  console.log("valore tre di3: ", valore3[2]);//debug
 var ctx = document.getElementById("myChart3").getContext("2d");
 var myChart = new Chart(ctx, {
  type:general3["type"],
  data:{
   labels:moment.months(),
   datasets:[
    {
    data:valore3[0],
    label:chiave3[0],
    backgroundColor:'rgba(153, 102, 255, 0.2)',
    borderColor: 'rgba(153, 102, 255, 1)',
   },
   {
    data:valore3[1],
    label:chiave3[1],
    backgroundColor:'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgba(75, 192, 192, 1)',
   },
   {
    data:valore3[2],
    label:chiave3[2],
    backgroundColor:'rgba(255, 206, 86, 0.2)',
    borderColor: 'rgba(255, 206, 86, 1)',
   }]
  }
 });
}

function init() {
  getData();
}
$(document).ready(init);
