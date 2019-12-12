
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
 new Chart(ctx, {
  type:"bar",
  data:{
   label:moment.months(),
   data:data
  }
 });
}

function init() {
  getData();
}
$(document).ready(init);
