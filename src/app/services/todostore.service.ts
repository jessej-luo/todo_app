import { Injectable } from '@angular/core';

@Injectable()
export class ToDoStore {
    todos: Array<String>;

    //Getter/Setter
    getTodos() {
        return this.todos;
    }

    constructor() { }

    addTodo(todo: String) {
        this.todos.push(todo);
    }



}