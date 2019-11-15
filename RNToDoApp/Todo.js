import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import TaskFlatList from './components/TaskFlatList';
import AddTaskView from './components/AddTaskView';

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

    onDeleteItem = (id) => {
        console.log('delete task');
        let newTaskList = this.state.data.filter((item) => item.id != id);
        this.setState({ data: newTaskList });
    }

    onFinishedItem = (id) => {
        console.log('finish task');
        let taskList = this.state.data;
        let index = taskList.findIndex(item => item.id === id)
        taskList[index].isFinished = true;
        this.setState({ data: taskList });
    }

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
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.containter}>
                    <AddTaskView onAddNewTask={this.addNewTask} />
                    <TaskFlatList
                        listData={this.state.data}
                        onFinishedItem={this.onFinishedItem}
                        onDeleteItem={this.onDeleteItem}
                    />
                </View>
            </SafeAreaView>
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