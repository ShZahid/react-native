import React from 'react'
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HorizantelScroll() {
  return (
    <View style={styles.FlatCards}>
        <Text  style={styles.headingText}>
            HorizentalScroll
        </Text>
        <ScrollView horizontal= {true} >
            <View style={styles.container} >
        <View style={[styles.card, ]}>
                    <Text>
                        Scroll
                    </Text>
                </View>
                <View style={[styles.card,  ]}>
                    <Text>
                        to
                    </Text>
                </View>
                <View style={[styles.card,]}>
                    <Text>
                        see
                    </Text>
                </View>
                <View style={[styles.card,]}>
                    <Text>
                        more
                    </Text>
                </View>
                <View style={[styles.card,]}>
                    <Text>
                        ...
                    </Text>
                </View>
                <View style={[styles.card,]}>
                    <Text>
                        stop
                    </Text>
                </View>
                <View style={[styles.card,]}>
                    <Text>
                        ..
                    </Text>
                </View>
                </View>
        </ScrollView>
      
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
    card:{
        margin:5,
        width:100,
        height:100,
        flex:1,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor:"grey"
      }
})
