import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carousel',
  template: `
  <div class="carousel-container">
    <ng-container *ngFor="let slide of slides">
      <a href="/post/{{slide.link}}">
        <div *ngIf="slide.id == slideIndex">
          <img [src]="slide.image">
          <div class="slide-info">
            <h2>{{slide.name}}</h2>
            <span class="slide-desc">{{slide.description}}</span>
          </div>
        </div>
      </a>
    </ng-container>
    <a class="prev" (click)="plusSlides(-1)">&#10094;</a>
    <a class="next" (click)="plusSlides(1)">&#10095;</a>
  </div>
  `,
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {

  slides:  any;
  slideIndex: number;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('../assets/carousel.json')
      .subscribe(data => {
        this.slides = data;
    });
    this.slideIndex = 1;
  }

  plusSlides(slideVariation: number) {
    const slideMod = slideVariation + this.slideIndex;

    if(slideMod < 1) {
      this.slideIndex = this.slides.length;
    } else if(slideMod > this.slides.length) {
      this.slideIndex = 1;
    } else {
      this.slideIndex = slideVariation + this.slideIndex;
    }
  }
}
