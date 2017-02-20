import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/map";
import "rxjs/add/operator/take";

@Component({
  selector: 'app-hero-async-message',
  templateUrl: './hero-async-message.component.html',
  styleUrls: ['./hero-async-message.component.css']
})
export class HeroAsyncMessageComponent implements OnInit {

  message$: Observable <string>;

  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];

  constructor() {
    this.resend();
  }

  ngOnInit() {
  }

  resend() {
    this.message$ = Observable.interval(500)
      .map(i => this.messages[i])
      .take(this.messages.length);
  }

}
