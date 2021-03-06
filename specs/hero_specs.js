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
    find_facts = new Task("find facts", 5, 1, 10);
    like_things = new Task("like things", 10, 5, 0);
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

  it("should be able to order tasks by difficulty", function(){
    assert.deepEqual(fitzgerald.sortTasksByDifficulty(), [hug_penny, find_facts, like_things]);
  });

  it("should be able to order tasks by urgency", function(){
    assert.deepEqual(fitzgerald.sortTasksByUrgency(), [find_facts, like_things, hug_penny]);
  });

  it("should be able to order tasks by reward", function(){
    assert.deepEqual(fitzgerald.sortTasksByReward(), [hug_penny, find_facts, like_things]);
  });

  it("should be able to complete a task", function(){
    fitzgerald.completeTask(hug_penny);
    assert.strictEqual(hug_penny.completed, true);
  });

  it("should be able to complete a different task", function(){
    fitzgerald.completeTask(like_things);
    assert.strictEqual(like_things.completed, true);
  });

  it("should be able to view completed tasks", function(){
    fitzgerald.completeTask(hug_penny);
    assert.deepEqual(fitzgerald.viewCompletedTasks(), [hug_penny]);
  });

  it("should be able to view uncompleted tasks", function(){
    fitzgerald.completeTask(hug_penny);
    assert.deepEqual(fitzgerald.viewUncompletedTasks(), [find_facts, like_things]);
  });



});
