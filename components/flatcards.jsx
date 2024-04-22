import React from "react";
import { StyleSheet, Text, View } from "react-native";


export  const FlatCards = () =>{
    return (
        <View style={styles.FlatCards}>
            <Text style={styles.headingText}>
                FlatCards
            </Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardone]}>
                    <Text>
                        Red
                    </Text>
                </View>
                <View style={[styles.card, styles.cardtwo]}>
                    <Text>
                        blue
                    </Text>
                </View>
                <View style={[styles.card, styles.cardthree]}>
                    <Text>
                        green

                    </Text>
                </View>
            </View>
        </View>
    )
} 


const styles = StyleSheet.create({
    FlatCards:{
        backgroundColor:"black"
    },
    headingText:{
        fontSize: 24,
        fontWeight: "bold",
        color: "grey",
        paddingHorizontal: 8,
        
    },
    container:{
        flex:1,
        margin:3,
        flexDirection:"row",

    },
    cardone:{
        backgroundColor: "red"
    },
    cardtwo:{
        backgroundColor:"blue"
    },
    cardthree:{
        backgroundColor:"green"
    },
    card:{
        margin:5,
        width:100,
        height:100,
        flex:1,
        justifyContent: "center",
        alignItems:"center"
      }
})