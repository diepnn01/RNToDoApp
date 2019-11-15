import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button
} from 'react-native';

export default class AddTaskView extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            newTaskText: '',
        }
    }

    onAddNewTask = () => {
        const newTaskName =  this.state.newTaskText;
        if(newTaskName === '') {
            return;
        }

        this.props.onAddNewTask(newTaskName);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 18, marginBottom: 10 }}>To Do App</Text>
                <View style={{flexDirection:"row"}}>
                    <View style={{ flex:1, flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput 
                        style={[{ flex: 1 }, styles.inputText ]} 
                        value={`${this.state.newTaskText}`}
                        underlineColorAndroid="transparent"
                        onSubmitEditing={this.onAddNewTask}
                        onChangeText={text => this.setState({newTaskText: text})}
                        placeholder="Add task"
                        returnKeyType="done"
                        />
                    </View>
                    <Button style={styles.addButton} title="Add" onPress={() => {
                        this.onAddNewTask()
                    }} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...Platform.select({
            ios: {
              height: 94,
              paddingTop: 20,
            },
            android: {
              height: 74,
            }  
          }),
          paddingHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.2,
          shadowColor: 'gray',
          elevation: 2
    },
    inputText: {
        height: 30,
        padding: 5,
        borderRadius: 5,
        borderColor: 'lightgray',
        borderWidth: 1,
        fontSize: 15
    },
    addButton: {
        marginLeft: 10,
        borderRadius: 5,
        backgroundColor: '#2196F3',
        padding: 7
    },

})