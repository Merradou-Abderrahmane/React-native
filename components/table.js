import React from "react";
import { View, Text, StyleSheet } from "react-native";

class Table extends React.Component {
  render() {
    return (
        <View>
        <Text> {this.props.name}</Text>
        <Text> {this.props.age}</Text>

        </View>
    )
  }
}

export default Table;
