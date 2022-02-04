function receivesAFunction(thing) {
    return thing();
  }

function returnsANamedFunction() {
    return function namedFunction() {};
    
 }

 function returnsAnAnonymousFunction() {
     return function(){};
 }
