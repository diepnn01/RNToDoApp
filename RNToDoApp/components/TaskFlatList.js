import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    FlatList,
} from 'react-native';

import TaskItem from './TaskItem';

export default class TaskFlatList extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    renderITem = (item) => {
        return (
            <TaskItem
                item={item}
                onFinishedItem={this.props.onFinishedItem}
                onDeleteItem={this.props.onDeleteItem}
            />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.listData}
                    extraData={this.props}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => this.renderITem(item)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
})
