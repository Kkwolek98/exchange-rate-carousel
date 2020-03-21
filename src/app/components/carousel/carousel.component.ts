import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public slideData;

  public slideIndex: number = 0;
  public slides: Array<Array<string>> = [
    ["GBP", "EUR", "https://cdn.getyourguide.com/img/tour_img-2010672-148.jpg"],
    ["CHF", "USD", "https://i.ytimg.com/vi/HBr2yVf9L-M/maxresdefault.jpg"],
    ["USD", "GBP", "https://eyeradio.org/wp-content/uploads/2019/04/WH.jpg"]
  ]; // I would put there objects instead of arrays

  constructor() {
    this.slideData = this.slides[this.slideIndex];
  }

  ngOnInit() {
    const carouselTimer = timer(5000, 5000);
    carouselTimer.subscribe(val => this.nextSlide());
  }

  previousSlide() {
    this.slideIndex = this.slideIndex == 0 ? this.slides.length - 1 : this.slideIndex - 1;
    this.slideData = this.slides[this.slideIndex];
  }

  nextSlide() {
    this.slideIndex = this.slideIndex != (this.slides.length - 1) ? this.slideIndex + 1 : 0;
    this.slideData = this.slides[this.slideIndex];
  }

}
