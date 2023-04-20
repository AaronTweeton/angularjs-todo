class Todo {
  constructor(text, done = false) {
    this.text = text;
    this.done = done;
  }
}

const TodoList = {
  controller: class Controller {
    constructor() {
      this.todos = [
        new Todo("learn AngularJS", true),
        new Todo("build an AngularJS app"),
      ];
    }

    addTodo() {
      this.todos.push(new Todo(this.todoText));
      this.todoText = "";
    }

    remaining() {
      return this.todos.filter((todo) => !todo.done).length;
    }

    archive() {
      this.todos = this.todos.filter((todo) => !todo.done);
    }
  },
  templateUrl: "./todo.template.html",
};

angular.module("todoApp", []).component("todoList", TodoList);
