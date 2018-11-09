
import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View
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
      <View>
        <View style={styles.toolBar}>
          <Text style={styles.toolBarTitle}>Purchase List</Text>
        </View>
          <ScrollView style={styles.itemsContent}>
            { this.state.listItems.map(item => (<Items key={item.titulo} listItem={item} />))}
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemsContent: {
    backgroundColor: '#f9ffff'
  },
  toolBar: { 
    height: 50, 
    backgroundColor: '#1075D7',
    marginBottom: 2, 
    elevation: 2, 
    flexDirection: 'row', 
    padding: 5 
  },
  toolBarTitle: { 
    flex: 1, 
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 16
  }
});

