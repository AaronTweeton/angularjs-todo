const TodoList = {
  controller,
  templateUrl: "./todo.template.html",
};

function controller() {
  var todoList = this;
  todoList.todos = [
    { text: "learn AngularJS", done: true },
    { text: "build an AngularJS app", done: false },
  ];

  todoList.addTodo = () => {
    todoList.todos.push({ text: todoList.todoText, done: false });
    todoList.todoText = "";
  };

  todoList.remaining = () => {
    var count = 0;
    todoList.todos.forEach((todo) => {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  todoList.archive = () => {
    var oldTodos = todoList.todos;
    todoList.todos = [];
    oldTodos.forEach((todo) => {
      if (!todo.done) todoList.todos.push(todo);
    });
  };
}

angular.module("todoApp", []).component("todoList", TodoList);
