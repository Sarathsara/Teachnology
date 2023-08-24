import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, TextInput } from "react-native";

const Login = (props) => {
  const [list, setList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setList(json.products);
        setFilteredProducts(json.products);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const navigateToDetails = (product) => {
    props.navigation.navigate("Details", { product });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = list.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
    setFilteredProducts(filtered);
  };

  return (
    <View>
      <Text style={styles.txtt}>Cendrol Technologies Pvt Ltd</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search products..." 
        placeholderTextColor="black"
        color="black"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToDetails(item)}>
            <View>
              <Text style={styles.txt}>Product - {item.id}</Text>
              <Text style={styles.txt1}>{item.title}</Text>
              <Image style={{ height: 220, width: "100%" }} source={{ uri: item.thumbnail }} />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius:15,
    fontSize:20
  },
  txt: {
    margin: 2,
    fontSize: 20,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
  txtt: {
    margin: 2,
    fontSize: 23,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    marginTop:10
  },
  txt1: {
    fontSize: 20,
    marginLeft: 5,
    color: "black",
    textAlign: "center",
    marginBottom: 5,
  },
});

export default Login;
