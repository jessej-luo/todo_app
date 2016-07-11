import { Component, OnInit } from '@angular/core';
import { ToDoStore} from 'app/services/todostore.service';

@Component({
    selector: 'todo-list',
    templateUrl: 'todolist.component.html',
    styleUrls: ['todolist.component.css'],
    providers: [ToDoStore]
})

export class ToDoList implements OnInit {
    newItem: "New Item";
    todos: any;

    constructor(
        private todoStore: ToDoStore
    ) { }

    getTodos() {
        return this.todoStore.getTodos().then(
            todos => this.todos = todos);
    }

    ngOnInit() {
        this.todos = this.getTodos();
     }

}