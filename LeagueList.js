import React, { Component } from "react";
import { Platform, StyleSheet, FlatList, Text, View, Alert } from "react-native";

export default class HomeActivity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FlatListItems: [
        { key: "Post" },
        { key: "Post" },
        { key: "Post" },
        { key: "Post" },
        { key: "Post" },
        { key: "Post" },
        { key: "Post" },
        { key: "Post" },
        { key: "Post" },
        { key: "Post" },
        { key: "Post" },
        { key: "Post" },
        { key: "Post" },
        { key: "Post" },
        { key: "Post" },
        { key: "Post" },
        { key: "Post" },
        { key: "Post" },
        { key: "Post" },
        { key: "Post" },
      ]
    };
  }

  FlatListItemSeparator = () => {
    return (
      <View style={{ height: 1, width: "100%", backgroundColor: "#607D8B" }} />
    );
  };

  GetItem(item) {
    Alert.alert(item);
  }

  render() {
     return (
       <View style={styles.container}>
         <FlatList
            data={ this.state.FlatListItems }
            ItemSeparatorComponent = {this.FlatListItemSeparator}
            renderItem={({item}) => <Text style={styles.item} onPress={this.GetItem.bind(this, item.key)} > {item.key} </Text>}
         />
       </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e5e5e5"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 45,
  }
});