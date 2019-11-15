import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Provider from 'react-redux';

import TaskFlatList from './App/components/TaskFlatList';
import AddTaskView from './App/components/AddTaskView';

// Appstate
let appState = {
    data: [
        { id: 1, title: 'Go to the office', isFinished: true },
        { id: 2, title: 'Prepare tasks for today', isFinished: false },
        { id: 3, title: 'Team meeting', isFinished: false },
        { id: 4, title: 'Commit tasks changed', isFinished: false },
    ]
}

// Actions
const finishTask = (taskId) => {
    return ({
        type: 'FINISH',
        taskId: taskId
    });
}

const deleteTask = (taskId) => {
    return ({
        type: 'DELETE',
        taskId: taskId
    });
}


// Reducers
const taskListReducer = (state = appState, action) => {
    switch (action.type) {
        case 'FINISH':
            let taskList = this.state.data;
            let index = taskList.findIndex(item => item.id === action.taskId)
            taskList[index].isFinished = true;
            return { ...state, data: taskList };
        case 'DELETE':
            let newTaskList = this.state.data.filter((item) => item.id !== action.taskId);
            return { ...state, data: newTaskList };
    }

    return state;
}

const store = createStore(taskListReducer, appState)

class ToDo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, title: 'Go to the office', isFinished: true },
                { id: 2, title: 'Prepare tasks for today', isFinished: false },
                { id: 3, title: 'Team meeting', isFinished: false },
                { id: 4, title: 'Commit tasks changed', isFinished: false },
            ]
        }
    }

    // onDeleteItem = (id) => {
    //     console.log('delete task');
    //     let newTaskList = this.state.data.filter((item) => item.id != id);
    //     this.setState({ data: newTaskList });
    // }

    // onFinishedItem = (id) => {
    //     console.log('finish task');
    //     let taskList = this.state.data;
    //     let index = taskList.findIndex(item => item.id === id)
    //     taskList[index].isFinished = true;
    //     this.setState({ data: taskList });
    // }

    addNewTask = (name) => {
        let currentList = this.state.data
        let newId = currentList.length + 1;
        let newData = [...currentList, { id: newId, title: name, isFinished: false }];
        this.setState({
            data: newData,
        })
    }

    render() {
        return (
            <Provider store={this.store}>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.containter}>
                        <AddTaskView onAddNewTask={this.addNewTask} />
                        <TaskFlatList/>
                    </View>
                </SafeAreaView>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        backgroundColor: 'white'
    }
})

export default ToDo;