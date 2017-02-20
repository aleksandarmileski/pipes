import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {
  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle: boolean = true;


  get format() {
    return this.toggle
      ? 'shortDate'
      : 'fullDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
