import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Chart} from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  chart : Chart;

  constructor(private _data: DataService) {
  }

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['TEST', 'TEST 2'],
        datasets: [
          {
            data: [510, 670, 950],
            borderColor: "#3cba9f",
            fill: false
          },
          {
            data: [410, 570, 9000],
            borderColor: "#ffcc00",
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
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      },
    });
  }
}
