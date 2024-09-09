import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-direciana-drilling',
  templateUrl: './direciana-drilling.component.html',
  styleUrls: ['./direciana-drilling.component.css'],
})
export class DirecianaDrillingComponent {
  swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
  });
}
