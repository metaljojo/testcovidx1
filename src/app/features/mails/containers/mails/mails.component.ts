import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css']
})
export class MailsComponent implements OnInit {

  ROOT_URL = 'https://jsonplaceholder.typicode.com';
  posts$: Observable<any>;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    console.log('loading posts...')
    this.loadPosts();
  }

  loadPosts() {
    this.posts$ = this.http.get(this.ROOT_URL + '/posts')
  }

  goPost(post) {
    this.router.navigate(['posts', post.id])
  }

}
