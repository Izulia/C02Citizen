import {Injectable} from '@angular/core';
import {Chart} from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class DrawService {

  constructor() {
  }

  draw(idCanvas, type, label, data, karma = 'bad') {
    let chart: Chart;

    switch (type) {
      case 'line':
        chart = this.line(idCanvas, label, data);
        break;
      case 'pie':
        chart = this.pie(idCanvas, label, data);
        break;
      case 'bar':
        chart = this.bar(idCanvas, label, data, karma);
        break;
      default :
        chart = this.line(idCanvas, label, data);
        break;
    }

    return chart;
  }

  line(idCanvas, label, data) {
    return new Chart(idCanvas, {
      type: 'line',
      data: {
        labels: label,
        datasets: [
          {
            data: data,
            borderColor: '#3cba9f',
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
              max: 2
            }
          }],
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
              max: 2
            }
          }]
        },
      },
    });
  }

  pie(idCanvas, label, data) {
    return new Chart(idCanvas, {
      type: 'pie',
      data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            data: [5, 10, 15, 20, 25, 30],
            borderColor: '#333333',
            backgroundColor: ['#ff6666', '#ffffff'],
            fill: false
          },
        ]
      },
    });
  }

  bar(idCanvas, label, data, karma) {
    let backgroundColors = [];

    if (karma === 'bad') {
      backgroundColors = ['#ff2222', '#ff3333', '#ff4444', '#ff5555', '#ff6666'];
    } else {
      backgroundColors = ['#22ff22', '#33ff33', '#44ff44', '#55ff55', '#66ff66'];
    }

    return new Chart(idCanvas, {
      type: 'bar',
      data: {
        labels: label,
        datasets: [
          {
            data: data,
            borderColor: '#aaaaaa',
            backgroundColor: backgroundColors,
            fill: false
          },
        ]
      },
    });
  }
}
