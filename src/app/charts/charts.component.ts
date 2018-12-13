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
  thirdCanvas: Chart;
  fourthCanvas: Chart;
  id = 'header';

  constructor(private _data: DataService, private _draw: DrawService) {
  }

  ngOnInit() {
    this.firstCanvas = this._draw.draw('firstCanvas', 'bar', ['MERCEDES', 'LAMBORGHINI', 'ROLLS ROYCE', 'FORD', 'BENTLEY'], [1, 0.73, 0.43, 0.4, 0.38], 'bad');
    this.secondCanvas = this._draw.draw('secondCanvas', 'bar', ['ASTON MARTIN', 'LOTUS', 'MAZDA', 'LADA', 'CHEVROLET'], [0.027, 0.03, 0.07, 0.08, 0.12], 'good');
    this.thirdCanvas = this._draw.draw('thirdCanvas', 'bar', ['ROLLS ROYCE', 'ASTON MARTIN', 'MERCEDES', 'JAGUAR', 'LOTUS'], [342, 324, 227, 219, 214], 'bad');
    this.fourthCanvas = this._draw.draw('fourthCanvas', 'bar', ['BMW I', 'ALFA ROMEO', 'FORD-CNG-TECHNIK', 'MERCEDES BENZ', 'LEXUS'], [0, 4, 5, 5, 48], 'good');
  }

  showInfos() {
    let infos = document.getElementById('infos');
    let blur = document.getElementById('blur');
    if (infos.classList.contains('infosActive')) {
      infos.classList.remove('infosActive');
      blur.classList.remove('blurActive');
    } else {
      infos.classList.add('infosActive');
      blur.classList.add('blurActive');
    }
  }

  scroll(el) {
    el.scrollIntoView({block: 'start', behavior: 'smooth'});
  }

  @HostListener('window:scroll', [])
  onScroll(event: Event): void {
    let first = document.getElementById('first');
    let second = document.getElementById('second');
    let third = document.getElementById('third');
    let fourth = document.getElementById('fourth');

    let headerBtn = document.getElementById('headerBtn');
    let firstBtn = document.getElementById('firstBtn');
    let secondBtn = document.getElementById('secondBtn');
    let thirdBtn = document.getElementById('thirdBtn');
    let fourthBtn = document.getElementById('fourthBtn');

    let firstTitle = document.getElementById('firstTitle');
    let secondTitle = document.getElementById('secondTitle');
    let thirdTitle = document.getElementById('thirdTitle');
    let fourthTitle = document.getElementById('fourthTitle');

    if (window.scrollY + window.innerHeight >= fourth.offsetTop + window.innerHeight / 2) {
      headerBtn.classList.remove('active');
      firstBtn.classList.remove('active');
      secondBtn.classList.remove('active');
      thirdBtn.classList.remove('active');
      fourthBtn.classList.add('active');
    } else if (window.scrollY + window.innerHeight >= third.offsetTop + window.innerHeight / 2) {
      headerBtn.classList.remove('active');
      firstBtn.classList.remove('active');
      secondBtn.classList.remove('active');
      thirdBtn.classList.add('active');
      fourthBtn.classList.remove('active');
    } else if (window.scrollY + window.innerHeight >= second.offsetTop + window.innerHeight / 2) {
      headerBtn.classList.remove('active');
      firstBtn.classList.remove('active');
      secondBtn.classList.add('active');
      thirdBtn.classList.remove('active');
      fourthBtn.classList.remove('active');
    } else if (window.scrollY + window.innerHeight >= first.offsetTop + window.innerHeight / 2) {
      headerBtn.classList.remove('active');
      firstBtn.classList.add('active');
      secondBtn.classList.remove('active');
      thirdBtn.classList.remove('active');
      fourthBtn.classList.remove('active');
    } else {
      headerBtn.classList.add('active');
      firstBtn.classList.remove('active');
      secondBtn.classList.remove('active');
      thirdBtn.classList.remove('active');
      fourthBtn.classList.remove('active');
    }
  }
}
