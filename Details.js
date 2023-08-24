import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
const Details = (props) => {
    const product = props.route.params.product;
    return (
        <View>
            <Text style={styles.txt}>{product.title}</Text>
            <Text style={styles.txt}>Price: Rs - {product.price}</Text>
            <Text style={styles.txt}>DiscountPercentage: {product.discountPercentage}</Text>
            <Text style={styles.txt}>Rating: {product.rating}</Text>
            <Text style={styles.txt}>Stock:  {product.stock}</Text>
            <Text style={styles.txt}>Brand:  {product.brand}</Text>
            <Text style={styles.txt}>Category:  {product.category}</Text>
            <Image style={{ height: 220, width: "100%",marginTop:10,marginBottom:10}} source={{ uri: product.thumbnail }} />
            <Text style={styles.txt}>Description :</Text>
            <Text style={styles.des}>{product.description}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    txt: {
        margin: 2,
        marginLeft: 10,
        fontSize: 20,
        color: "black",
    },
    txt1: {
        fontSize: 20,
        marginLeft: 10,
        color: "black",
    },
    des:{
        borderColor:"black",
        borderWidth:1,
        margin: 2,
        marginLeft: 10,
        fontSize: 20,
        color: "black",
        padding:10,
        marginTop:10
    }
})
export default Details;
