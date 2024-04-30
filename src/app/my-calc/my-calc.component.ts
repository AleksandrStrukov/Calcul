import {Component} from '@angular/core';

@Component({
  selector: 'app-my-calc',
  templateUrl: './my-calc.component.html',
  styleUrl: './my-calc.component.css'
})
export class MyCalcComponent {
  public first: number = 1
  public second: number = 1
  public operation: string = '+'
  public operations: string[] = ['+', '-', '*', '/']
  public result?: number

  public calc() {
    switch (this.operation) {
      case '+':
        this.result = this.first + this.second;
        break
      case '-':
        this.result = this.first - this.second;
        break
      case '*':
        this.result = this.first * this.second;
        break
      case '/':
        this.result = this.first / this.second;
        break
    }
  }
}
