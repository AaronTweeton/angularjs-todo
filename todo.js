const TodoList = {
  controller,
  templateUrl: "./todo.template.html",
};

function controller() {
  this.todos = [
    { text: "learn AngularJS", done: true },
    { text: "build an AngularJS app", done: false },
  ];

  this.addTodo = () => {
    this.todos.push({ text: this.todoText, done: false });
    this.todoText = "";
  };

  this.remaining = () => {
    var count = 0;
    this.todos.forEach((todo) => {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  this.archive = () => {
    var oldTodos = this.todos;
    this.todos = [];
    oldTodos.forEach((todo) => {
      if (!todo.done) this.todos.push(todo);
    });
  };
}

angular.module("todoApp", []).component("todoList", TodoList);
