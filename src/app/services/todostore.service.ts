import { Injectable } from '@angular/core';
import { Todos } from 'app/services/mock-todo'
@Injectable()
export class ToDoStore {
    todos: Array<string>;

    //Getter/Setter
    getTodos() {
        return Todos;
    }

    constructor() { }

    addTodo(todo: string) {
        this.todos.push(todo);
    }
}