import {Component} from '@angular/core';
import {group} from "@angular/animations";

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
  public history: string[] = []
  public operationsBeetweenGroup: CalcOperations[] = []

  public result?: number


  public calcGroup() {

  }

  public calcValueWithModificator(value: CalcVar): number {
    switch (value.midificator) {
      case CulcModifies.none:
        return value.value;
      case CulcModifies.cos:
        return Math.cos(value.value);
      case CulcModifies.sin:
        return Math.cos(value.value);
      case CulcModifies.square:
        return Math.pow(value.value, 2);
    }
  }

  public calc(first: number, second: number, operation: CalcOperations): number {
    switch (operation) {
      case CalcOperations.plus:
        return first + second;

      case CalcOperations.minus:
        return first - second;

      case CalcOperations.multiply:
        return first * second;

      case CalcOperations.divide:
        return first / second;

    }
  }

  public addGroup() {
    this.calcGroups.push({
      first: {
        value: 0,
        midificator: CulcModifies.none
      },
      second: {
        value: 0,
        midificator: CulcModifies.none
      }, operation: CalcOperations.plus
    })
    this.operationsBeetweenGroup.push(this.calcOperation.plus)
  }

  public removeGroup(index: number) {
    this.calcGroups.splice(index, 1)
  }

  protected readonly group = group;
}
