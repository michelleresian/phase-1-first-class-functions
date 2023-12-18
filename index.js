function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }

  function returnsANamedFunction()
  {
    return function NamedFunction(){}
  }

  function returnsAnAnonymousFunction()
  {
    return function(){}
  }