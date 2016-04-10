var app = angular.module('app', []);

app.controller('dataController', function($scope, $http) {
  $http.get("https://assignment-1-spring-2016-aliu83.c9users.io/Billionaire").then(function (response) {
    
      google.charts.load('current', {packages: ['corechart', 'bar']});
      google.charts.setOnLoadCallback(function() {
        formatDataTable(response.data);
      });
  });
});

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
