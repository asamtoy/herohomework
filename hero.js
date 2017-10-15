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

Hero.prototype.sortTasksByDifficulty = function(){
  return this.tasks.sort(function (a, b) {
    return a.difficulty - b.difficulty;
  });
};

  Hero.prototype.sortTasksByUrgency = function(){
    return this.tasks.sort(function (a, b) {
      return a.urgency - b.urgency;
    });
  };

  Hero.prototype.sortTasksByReward = function(){
    return this.tasks.sort(function (a, b) {
      return b.reward - a.reward;
    });
  };

  Hero.prototype.completeTask = function(task){
    task.completed = true;
    return task;
  };

  Hero.prototype.viewCompletedTasks = function(){
    var completedTasks = [];
    for (var i = 0; i < this.tasks.length ; i++) {
    if (this.tasks[i].completed === true) {
        completedTasks.push(this.tasks[i]);
    };
  };
  return completedTasks;
};
    // var completedTasks = this.tasks.filter(function(task){
    //   return task.completed = true;
    // });
// };

Hero.prototype.viewUncompletedTasks = function(task){
  var uncompletedTasks = [];
  for (var i = 0; i < this.tasks.length ; i++) {
  if (this.tasks[i].completed === false) {
      uncompletedTasks.push(this.tasks[i]);
    };
  };
  return uncompletedTasks;
}


//   var uncompletedTasks = this.tasks.filter(function(task){
//     return task.completed === false;
//   });
//   return uncompletedTasks;
// };
module.exports = Hero;
