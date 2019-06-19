import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {

  private subscription: Subscription;
  post: string;
  postData: any;
  recommended: any[];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.post = './assets/blog/' + params['id'] + '.md';
      this.http.get<any[]>('../assets/blogs.json').subscribe(data => {
        this.recommended = data.filter(x => x.id !== params['id'] && x.id !== 'my-rating-system')
                                .sort(() => Math.random() - 0.5)
                                .splice(0, 2);
        this.recommended.push(data.filter(x => x.id === 'my-rating-system')[0]);
        this.postData = data.filter(x => x.id === params['id'])[0];
      });
    });
  }

}
