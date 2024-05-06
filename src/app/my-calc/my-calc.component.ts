import {Component} from '@angular/core';

interface CalcGroup {
  first: CalcVar
  second: CalcVar
  operation: CalcOperations
}

interface CalcVar {
  value: number
  midificator: CulcModifies
}

enum CalcOperations {
  'plus' = '+',
  'minus' = '-',
  'multiply' = '*',
  'divide' = '/'
}

enum CulcModifies {
  'cos' = 'cos',
  'sin' = 'sin',
  'square' = 'square',
  'none' = 'none'
}


@Component({
  selector: 'app-my-calc',
  templateUrl: './my-calc.component.html',
  styleUrl: './my-calc.component.css'
})
export class MyCalcComponent {
  public calcOperation = CalcOperations
  public calcModification = CulcModifies
  public calcGroups: CalcGroup[] = [
    {
      first: {
        value: 5,
        midificator: CulcModifies.none
      },
      second: {
        value: 5,
        midificator: CulcModifies.none
      },
      operation: CalcOperations.plus
    }
  ]
   public history: string[] =[]
  public operationsBeetweenGroup: CalcOperations[] = []

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
