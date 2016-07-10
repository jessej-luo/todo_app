import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'todo-list',
    templateUrl: 'todolist.component.html',
    styleUrls: ['todolist.component.css']
})

export class ToDoList implements OnInit {
    newItem: "New Item";
    constructor() { }

    ngOnInit() { }

}