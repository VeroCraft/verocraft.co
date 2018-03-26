Chart.defaults.global.defaultFontFamily = 'Montserrat';

var scores = {{ include.scores | jsonify }};
var codewarsElement = document.getElementById("codewars-chart");

if (codewarsElement && scores.length > 1) {
  var scoreLabels = ["Start"];

  for (var i = 0; i < scores.length; i++) {
    scoreLabels.push("Week " + (i + 1));
  }

  scores.splice(0, 0, 0);

  var codewarsChart = new Chart(codewarsElement.getContext('2d'), {
    type: 'line',
    data: {
      labels: scoreLabels,
      datasets: [{
        label: '',
        data: scores,
        backgroundColor: ['rgba(0, 147, 201, 0.0)'], //R: 0 G: 147 B: 201
        borderColor: ['rgba(0, 147, 201, 1)'],
        borderWidth: 3,
        lineTension: 0
      }]
    },
    options: {
      legend: {
        display: false
      },
      showLines: true,
      fill: false
    }
  });
}