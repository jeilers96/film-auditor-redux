import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  sideCards: any[];
  blogs: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('../assets/blogs.json')
      .subscribe(data => {
        this.blogs = data;
        this.blogs = this.blogs.reverse();
    });
    this.http.get<any[]>('../assets/side-carousel.json')
      .subscribe(data => {
        this.sideCards = data;
    });
  }

}

class Blog {
  id: string;
  name: string;
  image: string;
  description: string;
  date: string;
}

class SideCard {
  id: string;
  name: string;
  image: string;
  description: string;
}
