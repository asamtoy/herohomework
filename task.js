var Task = function(title, difficulty, urgency, reward){
  this.title = title;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completed = false;
}

module.exports = Task;

//
// - A task has a difficulty level
// - A task has an urgency level
// - A task has a reward
// - A task should be able to be marked as completed
