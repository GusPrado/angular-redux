import { IAppState } from './store';
import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store'
import {INCREMENT} from './actions'
import { Map } from 'immutable'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-demo';
  //syntax to support/access immutable objects
  @select(s => s.get('counter')) count

  //@select('counter') count
  //to access messaging.newMessages inside Store:
  // @select(['messaging', 'newMessages']) newMessages
  // @select((s: IAppState) => s.messaging.newMessages) newMessages

  constructor(private ngRedux: NgRedux<Map<string, any>>) {
    //@select replaces this code below:
    // ngRedux.subscribe(() => {
    //   const store = ngRedux.getState()
    //   this.counter = store.counter
    // })
  }

  increment() {

    this.ngRedux.dispatch({ type: INCREMENT })
  }
}
