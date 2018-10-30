import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import ListItems from './src/components/ListItems';

class purchaseList extends Component {
  render() {
    return (
      <ListItems />
    );
  }
}

AppRegistry.registerComponent('purchaseList', () => purchaseList);
