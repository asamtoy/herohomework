var Hero = function(name, health, food){
  this.name = name;
  this.health = health;
  this.food = food;
  this.talk = "Hello, I am " + this.name;
  this.tasks = [];
}

Hero.prototype.eat = function(food){
  if (food.name === this.food){
      this.health += (food.value * 1.5);
    } else {
      this.health += food.value;
    }
}

Hero.prototype.addTask = function(task){
  this.tasks.push(task);
};

module.exports = Hero;


// - A Hero has a name
// - A Hero has health
// - A Hero has a favourite food
// - A Hero can talk saying their name
// - A Hero has a collection of tasks to complete
