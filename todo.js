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
      return incompleteTodos(this.todos).length;
    }

    archive() {
      this.todos = incompleteTodos(this.todos);
    }
  },
  templateUrl: "./todo.template.html",
};

function incompleteTodos(todos) {
  return todos.filter((todo) => !todo.done);
}

angular.module("todoApp", []).component("todoList", TodoList);
