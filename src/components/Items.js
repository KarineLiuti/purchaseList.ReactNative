import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Items extends Component {
  render() {
    return (
      <View style={styles.item}>
        <View style={styles.itemPhoto}>
          <Image source={{ uri: this.props.listItem.foto }} style={{ width: 100, height: 100 }} />
        </View>
        <View style={styles.itemDescriptions}>
          <Text style={styles.itemTitle}>{this.props.listItem.titulo}</Text>
          <Text style={styles.itemPrice}>$ {this.props.listItem.valor}</Text>
          <Text>{this.props.listItem.local_anuncio}</Text>
          <Text>{this.props.listItem.data_publicacao}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    borderWidth: 0.5,
    borderColor: '#FFF',
    borderBottomColor: '#DCDCDC',
    borderRightColor: '#DCDCDC',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#FFF'
  },
  itemDescriptions: {
    padding: 10,
    flex: 1
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'blue'
  },
  itemPhoto: {
    width: 102,
    height: 102
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
