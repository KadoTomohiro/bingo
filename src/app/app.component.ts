import { Component } from '@angular/core';
import {range} from "rxjs";
import {toArray} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  number: number;
  results: number[] = [];
  holes: number[];

  constructor() {
    this.initNumbers();
  }
  show(chooseNumber: number) {
    this.number = chooseNumber;
    this.results.push(chooseNumber);
  }

  drawed(num: number): boolean {
    return this.results.includes(num);
  }
  private initNumbers() {
    range(1, 75)
      .pipe(
        toArray<number>()
      )
      .subscribe(nums => this.holes = nums);
  }
}
