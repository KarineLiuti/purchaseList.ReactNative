
import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet
} from 'react-native';
import Items from './Items';
import axios from 'axios';

export default class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = { listItems: [] };
  }
  componentWillMount() {
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
			.then((response) => { this.setState({ listItems: response.data }); })
			.catch((err) => { console.log('Erro ao recuperar os dados', err); });
  }
  render() {
    return (
      <ScrollView style={styles.itemsContent}>
        { this.state.listItems.map(item => (<Items key={item.titulo} listItem={item} />))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  itemsContent: {
    backgroundColor: '#f9ffff'
  }
});

