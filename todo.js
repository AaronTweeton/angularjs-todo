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
      return getRemaining(this.todos);
    }

    archive() {
      this.todos = filteredTodos(this.todos);
    }
  },
  templateUrl: "./todo.template.html",
};

function getRemaining(todos) {
  var count = 0;
  todos.forEach((todo) => {
    count += todo.done ? 0 : 1;
  });
  return count;
}

function filteredTodos(todos) {
  var oldTodos = todos;
  todos = [];
  oldTodos.forEach((todo) => {
    if (!todo.done) {
      todos.push(todo);
    }
  });
  return todos;
}

angular.module("todoApp", []).component("todoList", TodoList);
