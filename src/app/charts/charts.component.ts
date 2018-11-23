import {Component, HostListener, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Chart} from 'chart.js';
import {split} from 'ts-node';
import {forEach} from '@angular/router/src/utils/collection';
import {DrawService} from '../draw.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  firstCanvas: Chart;
  secondCanvas: Chart;
  id = 'header';

  constructor(private _data: DataService, private _draw: DrawService) {
  }

  ngOnInit() {
    this.firstCanvas = this._draw.draw('firstCanvas', 'line', '');
    this.secondCanvas = this._draw.draw('secondCanvas','pie', '');
  }

  scroll(el) {
    el.scrollIntoView({block: 'start', behavior: 'smooth'});
  }

  @HostListener('window:scroll', [])
  onScroll(event: Event): void {
    let first = document.getElementById('first');
    let second = document.getElementById('second');
    let third = document.getElementById('third');

    let headerBtn = document.getElementById('headerBtn');
    let firstBtn = document.getElementById('firstBtn');
    let secondBtn = document.getElementById('secondBtn');
    let thirdBtn = document.getElementById('thirdBtn');

    let firstTitle = document.getElementById('firstTitle');
    let secondTitle = document.getElementById('secondTitle');
    let thirdTitle = document.getElementById('thirdTitle');

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
