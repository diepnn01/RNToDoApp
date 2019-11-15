/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';



// State
let appState = { number: 1, histories: [], errorMsg: '' };

// Actions

const add = {
  type: "ADD",
  value: 1
}

const sub = {
  type: "SUB",
  value: 1
}

const createAction = (number) => {
  return { type: 'ADD', value: number }
}

// Reducer
const numberReducer = (state = appState, action) => {

  switch (action.type) {
    case 'ADD':
      const newValue = state.number + action.value
      state = {
        ...state,
        histories: [...state.histories, newValue],
        number: newValue
      }
      state.number += action.value;
      break;
    case "SUB":
      const newVal = state.number - action.value
      state = {
        ...state,
        histories: [...state.histories, newVal],
        number: newVal
      }
      break;
  }
  return state;
}

const errorReducer = (state = appState, action) => {

  switch(action.type) {
    case 'LESS_THAN_ERROR':
      state = {
        ...state,
        errorMsg: 'Number can not be less than error'
      }
      break;
    default:
      break;
  }

  return state;
}

// Middleware
const logger = store => next => action => {
  next(action);
  console.log('state', store.getState());
  alert(`State updated ${ JSON.stringify(store.getState())}`);
}

const checkIsZero = store => next => action => {
  
  const currentNumber = store.getState().number.number;
  if(currentNumber == 0) {
    next({type:'LESS_THAN_ERROR'});
  } else {
    next(action);
  }

  console.log('Current Number', currentNumber);
}


// Store
const reducers = combineReducers({number: numberReducer, error: errorReducer});
const store = createStore(reducers, applyMiddleware(thunk, logger, checkIsZero));


// store.dispatch(sub);
// store.dispatch(sub);
// Test

const addAfter2s = () => {
  return dispatch => {
    setTimeout(() => store.dispatch(sub), 3000)
  }
}

store.dispatch(addAfter2s());



class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 30 }} >Diepnn</Text>
        </View>
      </SafeAreaView>
    )
  }
};

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: Colors.lighter,
  }
});

export default App;
