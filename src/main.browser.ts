import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from 'app/services/in-memory-data.service';

import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
// import {enableProdMode} from '@angular/core';

import {ToDoList} from './app/components/todolist/todolist.component';

// enableProdMode()

bootstrap(ToDoList, [
  HTTP_PROVIDERS,
  { provide: LocationStrategy, useClass: HashLocationStrategy },
  { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
  { provide: SEED_DATA, useClass: InMemoryDataService }      // in-mem s
])
.catch(err => console.error(err));
