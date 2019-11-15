import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class TaskItem extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity style={{ marginTop: -2 }} onPress={() => this.props.onFinishedItem(this.props.item.id)}>
                        <Text> {(this.props.item.isFinished) ? `✅` : `🕘`} </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ color: 'black' }}>{this.props.item.title}</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <TouchableOpacity style={{ marginTop: -2 }} onPress={() => this.props.onDeleteItem(this.props.item.id)}>
                        <Text>{`❌`}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 5,
        borderColor: 'gray',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowColor: 'gray',
        elevation: 2
    }
})

