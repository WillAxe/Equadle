import { evaluate} from 'mathjs'
export function generateEquation(): string {
  const equationVariables: string[] = []

  function randomizeNumber(): number {
    const number = Math.floor(Math.random() * 10)
    return number
  }

  function randomizeOperator(): string | undefined {
    const operators: string[] = ['+', '-', '*']
    const operator = operators[Math.floor(Math.random() * operators.length)]
    return operator
  }
  
  // starting with a number
  equationVariables.push(randomizeNumber().toString())
  
  const equationLength = 4
  let previousWasOperator = false

  for(let i = 1; i < equationLength; i++){
    const isNumber = Math.random() < 0.5
    if(isNumber || previousWasOperator){
      equationVariables.push(randomizeNumber().toString())
      previousWasOperator = false
    } else {
      equationVariables.push(randomizeOperator()!)
      previousWasOperator = true
    }
  }
  
  //ending with a number
  equationVariables.push(randomizeNumber().toString())

  console.log(equationVariables)
  const eqAnswer = evaluate(equationVariables.join(''))
  console.log(eqAnswer)
  const fullEquation = equationVariables.join('') + '=' + eqAnswer
  console.log(fullEquation)
  return fullEquation
}
