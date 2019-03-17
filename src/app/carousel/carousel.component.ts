import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carousel',
  template: `
    <ng-container *ngFor="let slide of slides">
      <div *ngIf="slide.id == slideIndex">
        <img [src]="slide.image">
        <div class="slide-info">
          <h2>{{slide.name}}</h2>
          {{slide.description}}
        </div>
      </div>
    </ng-container>
    <a class="prev" (click)="plusSlides(-1)">&#10094;</a>
    <a class="next" (click)="plusSlides(1)">&#10095;</a>
  `,
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {

  slides:  Observable<Array<CarouselSlide>>;
  slideIndex: number;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('../assets/carousel.json')
      .subscribe(data => {
        console.log(data)
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

class CarouselSlide {
  id: string;
  name: string;
  image: string;
  description: string;
}
