import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule } from '@angular-redux/store'
import { fromJS, Map } from 'immutable'

import { AppComponent } from './app.component';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  //constructor(ngRedux: NgRedux<IAppState>) {
  constructor(ngRedux: NgRedux<Map<string, any>>) {
    //fromJS creates an immutable object of type Map
    //from JS is used when you have complex objects in state
    ngRedux.configureStore(rootReducer, fromJS(INITIAL_STATE))
  }
}
