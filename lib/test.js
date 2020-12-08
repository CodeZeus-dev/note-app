'use strict';

var globalDefinition;

(function(exports) {
  function it(definition, fn) {
    try {
      globalDefinition = definition;
      fn();
    } catch (error) {
      console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + (definition + ": failed"));
      console.error(error);
    }
  }

  function expect(x) {

    class Test {
      constructor(expectation) {
        this.expectation = expectation;
      }
  
      // Basic test for equality, i.e. of primitive variables
      toEqual(actual) {
        if (actual === this.expectation) {
          this.#logPassMessage();
        } else {
          this.#logFailMessage(actual);
        }
      }
  
      // Testing one array equal to another
      toEqualArray(actualArray) {
        if (JSON.stringify(this.expectation) === JSON.stringify(actualArray)) {
          return this.#logPassMessage();
        } else {
          return this.#logFailMessage(actualArray);
        }
      }
  
      // Testing object equality
      toBeEquivalentTo(actualObject) {
      var expProps = Object.getOwnPropertyNames(this.expectation);
      var actProps = Object.getOwnPropertyNames(actualObject);
      if (expProps.length != actProps.length) {
        this.#logFailMessage(actualObject);
      }
      for (var i = 0; i < expProps.length; i++) {
        var propName = expProps[i];
        if (this.expectation[propName] !== actualObject[propName]) {
          this.#logFailMessage(actualObject);
        }
      }
        this.#logPassMessage();
      }

      toContain(actualElement) {
        if (this.expectation.includes(actualElement)) {
          this.#logPassMessage();
        } else {
          this.#logFailMessage(actualElement);
        }
      }

      toBeInstanceOf(actualClass) {
        if (this.expectation instanceof actualClass) {
          this.#logPassMessage();
        } else {
          this.#logFailMessage(actualClass);
        }
      } // The actual Class should be the expectation and vice versa!!! Look into it

      // Keeps code dry, deals with creating the message to be printed to console if the test fails
      #logFailMessage(actual) {
        console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + (globalDefinition + ": failed"));
        console.log('\x1b[31m%s\x1b[0m', "Expected: ");
        console.log(this.expectation);
        console.log('\x1b[31m%s\x1b[0m', "But instead got: ");
        console.log(actual);
        console.log("--------------------");
      }
  
      #logPassMessage() {
        console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + (globalDefinition + ": passed"));
        console.log("--------------------");
      }
  
    }
  
    return new Test(x);
  }

  function double(doubleName) {
    Object.entries(arguments[1]).forEach(([key, val]) => arguments[1][key] = function() {
        return val;
    });

    return arguments[1];
  }

  exports.it = it;
  exports.expect = expect;
  exports.double = double;
})(this)
