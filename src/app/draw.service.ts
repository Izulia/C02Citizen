import {Injectable} from '@angular/core';
import {Chart} from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class DrawService {

  constructor() {
  }

  draw(idCanvas, type, data) {
    let chart: Chart;

    switch (type) {
      case 'line':
        chart = this.line(idCanvas, data);
        break;
      case 'pie':
        chart = this.pie(idCanvas, data);
        break;
      default :
        chart = this.line(idCanvas, data);
        break;
    }

    return chart;
  }

  line(idCanvas, data) {
    return new Chart(idCanvas, {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            data: [5, 10, 15, 20, 25, 30],
            borderColor: '#3cba9f',
            fill: false
          },
          {
            data: [10, 5, 15, 5, 25, 50],
            borderColor: '#ffcc00',
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
              max: 100
            }
          }],
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
              max: 100
            }
          }]
        },
      },
    });
  }

  pie(idCanvas, data) {
    return new Chart(idCanvas, {
      type: 'pie',
      data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            data: [5, 10, 15, 20, 25, 30],
            borderColor: '#333333',
            backgroundColor: ['#ff6666', '#66ff66', '#6666ff', '#ffff66', '#66ffff', '#ff66ff'],
            fill: false
          },
        ]
      },
    });
  }
}
