var assert = require('assert');
var Food = require('../food.js');

describe("Food", function(){
  var biscuit;

  beforeEach(function(){
    biscuit = new Food("biscuit", 10);
  });

it('should have a name', function () {
	assert.strictEqual(biscuit.name, "biscuit");
  });

  it("should have a value", function(){
    assert.strictEqual(biscuit.value, 10);
  });
});
