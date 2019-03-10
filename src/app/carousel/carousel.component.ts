import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carousel',
  template: `
    <div>
      <div *ngFor = "let slide of slides">
        <img [src]="slide.image">
        <div>
          <h2>{{slide.name}}</h2>
          {{slide.description}}
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {

  slides: CarouselSlide;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:4200/assets/carousel.json')
      .subscribe(data => {
        console.log(data)
        this.slides = data;
    });
  }
}

class CarouselSlide {
  id: string;
  name: string;
  image: string;
  description: string;
}
