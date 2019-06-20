import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  title = 'The flim Auditor';
  loading = true;

  ngAfterViewInit() {
    this.loading = false;
}
}
