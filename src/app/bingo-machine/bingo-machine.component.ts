import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {range} from "rxjs";
import {toArray} from "rxjs/operators";

@Component({
  selector: 'app-bingo-machine',
  templateUrl: './bingo-machine.component.html',
  styleUrls: ['./bingo-machine.component.css']
})
export class BingoMachineComponent implements OnInit {

  @Output() draw = new EventEmitter<number>();
  numbers: number[];

  constructor() {
  }

  ngOnInit(): void {
    this.initNumbers();
  }

  start() {

  }

  stop() {
    const index = Math.floor(Math.random() * this.numbers.length);
    const chooseNumber = this.numbers[index];
    console.log(index, chooseNumber);
    this.numbers.splice(index, 1);
    this.draw.emit(chooseNumber);
  }

  private initNumbers() {
    range(1, 75)
      .pipe(
        toArray<number>()
      )
      .subscribe(nums => this.numbers = nums);
  }

}
