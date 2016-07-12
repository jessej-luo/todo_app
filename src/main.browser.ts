
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
// import {enableProdMode} from '@angular/core';

import {ToDoList} from './app/components/todolist/todolist.component';

// enableProdMode()

bootstrap(ToDoList, [
  HTTP_PROVIDERS,
  { provide: LocationStrategy, useClass: HashLocationStrategy },
])
.catch(err => console.error(err));
