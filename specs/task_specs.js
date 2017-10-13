var assert = require('assert');
var Task = require('../task');

describe("Task", function(){

  var find_facts;

  beforeEach(function(){
    find_facts = new Task("Find Facts", 5, 5, 10, false);
  });

  it("should have a title", function(){
    assert.strictEqual(find_facts.title, "Find Facts");
  });

  it("should have a difficulty level", function(){
    assert.strictEqual(find_facts.difficulty, 5);
  });

  it("should have an urgency level", function(){
    assert.strictEqual(find_facts.urgency, 5);
  });

  it("should have a reward", function(){
    assert.strictEqual(find_facts.reward, 10);
  });

  it("should be initially incomplete", function(){
    assert.strictEqual(find_facts.completed, false);
  });
});
