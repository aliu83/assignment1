var app = angular.module('app', []);


google.load("visualization", "1", {packages:["corechart"]});

app.controller('MainCtrl', ['$scope', '$http',  function($scope, $http) {
  $http.get("/data").success(function (data) {
        formatDataTable(data);
  });
}]);

function formatDataTable(chartdata) {
  var data = [];
  var header = ['Name', 'Billions'];
     
  data.push(header);
  
for (var i = 0; i < chartdata.length; i++) {
    var temp = [];
    temp.push(chartdata[i].NAME); 
    temp.push(parseInt(chartdata[i].NET_WORTH));
  
    data.push(temp);
  }
  
  var g_data = google.visualization.arrayToDataTable(data);
  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  chart.draw(g_data, getOptions());
}

function getOptions()
{
     var options = {
        title: 'Top 5 billionaires in 2016',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Net worth in billions',
          minValue: 0
        },
        vAxis: {
          title: 'Name'
        }
      };

    return options;
}