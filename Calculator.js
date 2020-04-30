"use strict";

// function getEl(id) {
//   let ans = document.querySelector(id);
//   return ans;
// }

// let ans = new getEl(".operator");
// console.log(ans);

// Here calculator class is declared.
class Calculator {
  //This will be the value of number which is given when someone give their first input
  constructor() {
    this.currentValue = undefined;

    // this history of past input and operations in sign form eg +,-,*,/.
    //Type [123,+,453,/]  array of number and sign
    this.history = [];

    //this the state of of operation which will be happen
    // when equal is pressed
    this.currentFunction = "";

    //this is the answer that will be ommiteed
    this.ans = 0;
  }

  /*
  
 
  
  */

  //this returns the ans at the current stage of the calculation
  getAns() {
    return this.ans;
  }

  /*
  
  
  */

  //this function pushes input and function to history
  addToHistory(...expressionToAdded) {
    //expressionToAdded is data which is to added in the "this.history".
    //Types: (currentFunction = signs , history = value to operted or second
    //param or input given by the user )

    //pushes the given value to the history
    for (let expression of expressionToAdded) {
      if (expression != NaN) {
        this.history.push(expression);
      }
    }
  }
  /*
  
 
  
  */

  //this will makes ans expression of history in proper string format without any ','.
  makeExpression() {
    return this.history.toString().split(",").join(" ");
  }
  /*
  
  
  */

  //this fuction changes the currentFunction to user input;
  updateCurrentFunction(value) {
    this.currentFunction = value;
  }
  /*
  

  
  */

  //this function is everything that should be updated when a operation is finished
  //takes two parameter first is thing that has to be updated eg: the current value need to be changing
  update(whatToUpdate, historyToBeAdded) {
    //changes the current value so that operation can be done further
    this.currentValue = whatToUpdate;

    //Here we are adding things to the histoy first the sign and second history to be added which is the
    //2nd value given after in operations, the users 2nd input in the expression .
    this.addToHistory(this.currentFunction, historyToBeAdded);

    //for further different calculation we need to change the currentfunction as
    //user wishes , so we first assign it to undefined so that user can again chose the operation of its kind.
    this.currentFunction = undefined;

    //final thing is to return the ans, which is the current value of whole calculation
    return this.ans;
  }

  /*
  
  
  
  */

  //this function will take the second user input and then calculated it with current value ;
  //consider the the this.currentFunction to decide what to do;
  operations(valueToBeOperated) {
    //this checks that is in currrent state of this.currentValue is undefined or not
    //if current value is undefined we set the this to this.currentValue as users first input
    if (this.currentValue == undefined) {
      this.currentValue = valueToBeOperated;
      this.history.push(valueToBeOperated);
      return;
    }

    //this here actual implemetnation is done considering the this.currentFunction's value
    if (this.currentFunction == "+") {
      //here the ans is updated
      this.ans = this.add(valueToBeOperated, this.currentValue);
    }

    //this here actual implemetnation is done considering the this.currentFunction's value
    if (this.currentFunction == "-") {
      //here the ans is updated
      this.ans = this.sub(valueToBeOperated, parseFloat(this.currentValue));
    }

    //this here actual implemetnation is done considering the this.currentFunction's value
    if (this.currentFunction == "*") {
      //here the ans is updated
      this.ans = this.multiply(valueToBeOperated, this.currentValue);
    }

    //this here actual implemetnation is done considering the this.currentFunction's value
    if (this.currentFunction == "/") {
      //here the ans is updated
      this.ans = this.divide(valueToBeOperated, this.currentValue);
    }

    // when either of the above is finished then this return the value of computation
    //and updates all the necessary thing to maintain the logic
    return this.update(this.ans, valueToBeOperated);
  }
  /*
  
  
  */

  //BASIC OPERATIONS

  //ADD
  add(valueToBeOperated, currentValue) {
    return parseFloat(currentValue) + parseFloat(valueToBeOperated);
  }

  //SUBTRACT
  sub(valueToBeOperated, currentValue) {
    return parseFloat(currentValue) - parseFloat(valueToBeOperated);
  }

  // MULTIPLY
  multiply(valueToBeOperated, currentValue) {
    return parseFloat(currentValue) * parseFloat(valueToBeOperated);
  }

  //DIVIDE
  divide(valueToBeOperated, currentValue) {
    return parseFloat(currentValue) / parseFloat(valueToBeOperated);
  }
  /*
  
  
  */

  // makes the object with everything being as if object is just intialized
  clear() {
    this.currentValue = undefined; //cv has to be zero
    this.history = []; //history
    this.currentFunction = undefined; //cf  should be undefind
    this.ans = 0;
  }
}

// let calculator = new Calculator();

// calculator.operations(10);
// calculator.currentFunction = "+";

// console.log(calculator.operations(9));

// modules.export = Calculator;
