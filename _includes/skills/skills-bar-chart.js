Chart.defaults.global.defaultFontFamily = 'Montserrat';

var skills = {{ include.skills | jsonify }};
var skillsElement = document.getElementById("skills-chart");

if (skillsElement && skills.length > 1) {
  var labels = [];
  var levels = [];
  var backgroundColors = [];
  var borderColors = [];

  for (var i = 0; i < skills.length; i++) {
    var item = skills[i];

    if (item.level == null || item.level <= 1) {
      continue
    }

    labels.push(item.name);
    levels.push(item.level);
    backgroundColors.push('rgba(0, 147, 201, 1)');
    borderColors.push('rgba(0, 147, 201, 1)');
  }

  var skillsChart = new Chart(skillsElement.getContext('2d'), {
    type: 'horizontalBar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Skills',
        data: levels,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      }]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          ticks: {
            max: 5,
            min: 1,
            stepSize: 1
          }
        }]
      }
    }
  });
}