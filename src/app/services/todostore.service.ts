import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Todos } from 'app/services/mock-todo';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ToDoStore {
    private todoUrl = 'http://localhost:8080/todos'

    constructor(
        private http: Http
    ) { }

    private handleError(error: any) {
        console.error("An error has occurred", error);
        return Promise.reject(error.message || error);
    }

    //Getter/Setter

    getTodos(): Promise<string[]> {
		return this.http.get(this.todoUrl)
						.toPromise()
						.then(function(response) {
                            console.log(response.json());
                            return response.json();
                        })
						.catch(this.handleError);		
	}

}