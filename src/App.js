import React from 'react';
import CardItem from './component/CardItem/Card'
import productData from './Product.json'
import SearchBar from './component/SearchBarItem/searchBar'
import { FlatList, StyleSheet, Text,View} from 'react-native';

export default function App() {
  const renderProducts = ({ item }) => <CardItem products={item} />
 
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Patika Store</Text>
            <FlatList
                numColumns={2}
                ListHeaderComponent={() => (<SearchBar />)}
                keyExtractor={item => item.id.toString()}
                data={productData}
                renderItem={renderProducts}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    color: 'purple'
  }
});