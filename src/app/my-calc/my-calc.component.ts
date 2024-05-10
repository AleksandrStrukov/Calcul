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
  public history: string[] = []
  public operationsBeetweenGroup: CalcOperations[] = []

  public result?: number


  public calcGroup() {
    let result = 0
    let tempHistory: string[] = []
    this.calcGroups.forEach((group, i) => {
      if (i === 0) {
        result = this.calc(this.calcValueWithModificator(group.first), this.calcValueWithModificator(group.second), group.operation)

      } else {
        let tempResult = this.calc(this.calcValueWithModificator(group.first), this.calcValueWithModificator(group.second), group.operation)
        result = this.calc(result, tempResult, this.operationsBeetweenGroup[i - 1])

      }
      tempHistory.push(
        `(
          ${group.first.midificator !== CulcModifies.none ? group.first.midificator : ''} ${group.first.value}
          ${group.operation}
          ${group.second.midificator !== CulcModifies.none ? group.second.midificator : ''} ${group.second.value}

          )`
      )
    })

    tempHistory.push(`= ${result}`)
    this.history.push(tempHistory.join(' '))
    this.result = result
  }

  public calcValueWithModificator(value: CalcVar): number {
    switch (value.midificator) {
      case CulcModifies.none:
        return value.value;
      case CulcModifies.cos:
        return Math.cos(value.value);
      case CulcModifies.sin:
        return Math.sin(value.value);
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
    this.operationsBeetweenGroup.push(CalcOperations.plus)
  }

  public removeGroup(index: number) {
    this.calcGroups.splice(index, 1)
  }

}
