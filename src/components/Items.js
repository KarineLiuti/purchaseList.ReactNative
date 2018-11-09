import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
          <View style={styles.descriptionWithIcon}>
            <Icon name={'location-on'} color="#FF5300" size={20} /> 
            <Text style={styles.itemDetail}>{this.props.listItem.local_anuncio}</Text>
          </View>
          <View style={styles.descriptionWithIcon}>
            <Icon name={'date-range'} color="#FF5300" size={20} /> 
            <Text style={styles.itemDetail}>{this.props.listItem.data_publicacao}</Text>
          </View>
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
    fontWeight: 'normal',
    fontSize: 16,
    color: '#368ee0'
  },
  itemPhoto: {
    width: 102,
    height: 102
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#075AAB'
  },
  descriptionWithIcon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: -5,
    marginTop: 5
  },
  itemDetail: {
    paddingTop: 2,
    marginLeft: 3
  }
});
