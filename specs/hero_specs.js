var assert = require('assert');
var Hero = require('../hero');
var Food = require('../food');
var Task = require('../task');

describe("Hero", function(){
  var fitzgerald;
  var biscuit;
  var carrot;
  var find_facts;
  var like_things;
  var hug_penny;

  beforeEach(function(){
    fitzgerald = new Hero("Fitzgerald", 100, "biscuit", "Hi! I'm Fitzgerald");
    biscuit = new Food("biscuit", 10);
    carrot = new Food("carrot", 50);
    find_facts = new Task("find facts", 1, 5, 10);
    like_things = new Task("like things", 10, 10, 0);
    hug_penny = new Task("hug Penny", 1, 10, 100);
    fitzgerald.addTask(find_facts);
    fitzgerald.addTask(like_things);
    fitzgerald.addTask(hug_penny);
  });

    it("should have a name", function(){
      assert.strictEqual(fitzgerald.name, "Fitzgerald");
  });

  it("should have a health value", function(){
    assert.strictEqual(fitzgerald.health, 100);
  });

  it("should have a favourite food", function(){
    assert.strictEqual(fitzgerald.food, "biscuit");
  });

  it("should be able to talk", function(){
    assert.strictEqual(fitzgerald.talk, "Hello, I am Fitzgerald");
  });

  it("should have tasks", function(){
    assert.strictEqual(fitzgerald.tasks.length, 3);
  });

  it("should be able to eat food", function(){
    fitzgerald.eat(biscuit);
    assert.strictEqual(fitzgerald.health, 115);
  });

  it("should be able to eat two foods", function(){
    fitzgerald.eat(biscuit);
    fitzgerald.eat(biscuit);
    assert.strictEqual(fitzgerald.health, 130);
  });

  it("should be able to eat normal food", function(){
    fitzgerald.eat(carrot);
    assert.strictEqual(fitzgerald.health, 150);
  });

  xit("should be able to order tasks by difficulty", function(){
    assert.strictEqual(fitzgerald.tasks, [FILL IN]);
  });

  xit("should be able to order tasks by difficulty", function(){
    assert.strictEqual(fitzgerald.tasks, [FILL IN]);
  });

  xit("should be able to order tasks by difficulty", function(){
    assert.strictEqual(fitzgerald.tasks, [FILL IN]);
  });

});
