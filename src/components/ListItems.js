import React, { Component } from 'react';
import {
  View
} from 'react-native';
import axios from 'axios';
import Items from './Items';

export default class ListItems extends Component {
  // componentWillMount() {
  //   console.log('Vou chamar!');
  //   axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
	// 		.then((response) => { console.log(response); })
	// 		.catch(() => { console.log('Erro ao recuperar os dados'); });
  // }
  render() {
    return (
      <View>
        <Items />
        <Items />
        <Items />
      </View>
    );
  }
}
