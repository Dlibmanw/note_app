var assert = {
  isTrue: function(assertionToCheck){
    if(!assertionToCheck){
      throw new Error("Assertion FAILED"+ assertionToCheck + "is not truthy")
    }
    else console.log("Test Passing")
  }
}
assert.isTrue()