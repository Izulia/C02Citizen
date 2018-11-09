import {Component, HostListener, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Chart} from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  chart: Chart;
  id = 'header';

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

  scroll(el) {
    this.id = el.id;
    el.scrollIntoView({block: 'start', behavior: 'smooth'});
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    let header = document.getElementById('header');
    let first = document.getElementById('first');
    let second = document.getElementById('second');
    let third = document.getElementById('third');

    let headerBtn = document.getElementById('headerBtn');
    let firstBtn = document.getElementById('firstBtn');
    let secondBtn = document.getElementById('secondBtn');
    let thirdBtn = document.getElementById('thirdBtn');

    if (window.scrollY + window.innerHeight >= third.offsetTop + window.innerHeight / 2) {
      headerBtn.classList.remove('active');
      firstBtn.classList.remove('active');
      secondBtn.classList.remove('active');
      thirdBtn.classList.add('active');
    }
    else if (window.scrollY + window.innerHeight >= second.offsetTop + window.innerHeight / 2) {
      headerBtn.classList.remove('active');
      firstBtn.classList.remove('active');
      secondBtn.classList.add('active');
      thirdBtn.classList.remove('active');
    }
    else if (window.scrollY + window.innerHeight >= first.offsetTop + window.innerHeight / 2) {
      headerBtn.classList.remove('active');
      firstBtn.classList.add('active');
      secondBtn.classList.remove('active');
      thirdBtn.classList.remove('active');
    }
    else {
      headerBtn.classList.add('active');
      firstBtn.classList.remove('active');
      secondBtn.classList.remove('active');
      thirdBtn.classList.remove('active');
    }
  }
}
