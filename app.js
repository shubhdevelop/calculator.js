"use strict";

const value = {
  one: 1,
  two: 2,
  three: 3,
  four4: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  zero: 0,
};

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
    this.currentValue = 10;

    // this history of past input and operations in sign form eg +,-,*,/.
    //Type [123,+,453,/]  array of number and sign
    this.history = [];

    //this the state of of operation which will be happen
    // when equal is pressed
    this.currentFunction = "/";

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
      this.history.push(expression);
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

  //this function will take the second user input and then calculated it with current value ;
  //consider the the this.currentFunction to decide what to do;
  operations(valueToBeOperated) {
    if (this.currentValue == undefined) {
      this.currentValue = valueToBeOperated;
      return;
    }

    if (this.currentFunction == "+") {
      this.ans = this.add(valueToBeOperated, parseFloat(this.currentValue));
    }
    if (this.currentFunction == "-") {
      this.ans = this.sub(valueToBeOperated, parseFloat(this.currentValue));
    }
    if (this.currentFunction == "*") {
      this.ans = this.multiply(
        valueToBeOperated,
        parseFloat(this.currentValue)
      );
    }
    if (this.currentFunction == "/") {
      if (this.valueToBeOperated == 0) {
        return "not possible";
      }
      this.ans = this.divide(valueToBeOperated, parseFloat(this.currentValue));
    }

    return this.update(this.ans, valueToBeOperated);
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

  //BASIC OPERATIONS

  //ADD
  add(valueToBeOperated, currentValue) {
    return currentValue + valueToBeOperated;
  }

  //SUBTRACT
  sub(valueToBeOperated, currentValue) {
    return currentValue - valueToBeOperated;
  }

  // MULTIPLY
  multiply(valueToBeOperated, currentValue) {
    return currentValue * valueToBeOperated;
  }

  //DIVIDE
  divide(valueToBeOperated, currentValue) {
    return currentValue / valueToBeOperated;
  }
  /*
  
  
  */

  // makes the object with everything being as if object is just intialized
  clear() {
    this.currentValue = 0; //cv has to be zero
    this.history = []; //history
    this.currentFunction = undefined; //cf  should be undefind
    this.ans = 0;
  }
}

let calc = new Calculator();
