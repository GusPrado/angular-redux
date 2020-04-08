import { tassign } from 'tassign'
import { Map } from 'immutable'
import {INCREMENT} from './actions'
import { stat } from 'fs'

export interface IAppState {
  counter: number
  // messaging?: {
  //   newMessages: number
  // }
}

export const INITIAL_STATE: IAppState = {
  counter: 0
  // messaging: {
  //   newMessages: 5
  // }
}

export function rootReducer(state: Map<string, any>, action): Map<string, any> {

  switch (action.type) {
    case INCREMENT:
      //return { counter: state.counter + 1 }
    //return Object.assign({}, state, { counter: state.counter + 1, isValid: true })
    // safer way to mutate state (cant inject non pre existent
    // state prop like above Object.assign method)
    /** Use tassign OR immutable objects approach**/
    //return tassign(state, { counter: state.counter + 1 })
    return state.set('counter', state.get('counter') + 1)
  }
  return state
}
