const TodoList = {
  controller: class Controller {
    constructor() {
      this.todos = [
        { text: "learn AngularJS", done: true },
        { text: "build an AngularJS app", done: false },
      ];
    }

    addTodo() {
      this.todos.push({ text: this.todoText, done: false });
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
