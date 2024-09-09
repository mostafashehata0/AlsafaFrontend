import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.css'],
})
export class ConstructionComponent {
  swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
  });
}
