import { Component } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

// import { Observable, Subject, ReplaySubject, fromEvent, of, range } from 'rxjs';
// import { map, filter, switchMap, debounce, debounceTime } from 'rxjs/operators';
import { map, debounce, debounceTime } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../node_modules/bootstrap/dist/css/bootstrap.min.css','./app.component.css']
})

export class AppComponent {
  title = 'app';

  constructor () {
    let clicks = fromEvent(document, 'click').debounceTime(2000);
    clicks.subscribe(x => console.log(x));    
  }
}


