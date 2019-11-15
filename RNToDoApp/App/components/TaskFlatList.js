import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    FlatList,
} from 'react-native';

import Connect from 'react-redux';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';

class TaskFlatList extends Component {

    constructor(props) {
        super(props);
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
        console.log(this.props);
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

export default connect()(TaskFlatList);
