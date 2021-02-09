import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoMachineComponent } from './bingo-machine.component';

describe('BingoMachineComponent', () => {
  let component: BingoMachineComponent;
  let fixture: ComponentFixture<BingoMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BingoMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
