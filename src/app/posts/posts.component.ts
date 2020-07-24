import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  courses$: Observable<any>;

  constructor(public service: PostsService) {
    this.courses$ = this.service.blogs;
  }

  ngOnInit(): void {}
}
