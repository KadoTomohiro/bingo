import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css']
})
export class BallComponent implements OnInit {

  @Input() number: number;
  constructor() { }

  ngOnInit(): void {
  }

}
