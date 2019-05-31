import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import {  NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: PostComponent},
      {path: ':id', component: PostComponent, pathMatch: 'full'}
    ]),
    MarkdownModule.forChild()
  ]
})
export class PostModule {}
