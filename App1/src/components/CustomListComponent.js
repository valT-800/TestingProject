import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


const CustomListComponent = ({title, subtitle1, subtitle2, event, testID}) => {
    return(
        <TouchableOpacity
        style ={styles.listItem}       
        onPress = {event}
        testID = {testID}
        >
            <View style = {{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text style = {styles.title}>{title}</Text>
                <Text style = {styles.subtitle1}>{subtitle1}</Text>
                <Text style = {styles.subtitle2}>{subtitle2}</Text>
            </View>

            
        </TouchableOpacity>
        
    )
}
const styles  = StyleSheet.create(
    {
        listItem: {
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            height: 50,
            width: 310,
            borderWidth: 1,
            borderRadius: 5,
            padding: 5,
            borderColor: 'rgba(200,200,200,0.5)',
            borderStyle: 'solid',
        },
        title: {
            marginLeft: 10,
            fontSize: 17,
            fontWeight: '500',
            textAlign: 'center',
            color: 'darkslategrey'
            
        },
        subtitle1: {
            marginLeft: 15,
            fontSize:14,
            fontWeight: '500',
            textAlign: 'center',
            color: 'slategrey'
        },
        subtitle2: {
            marginLeft: 15,
            fontSize:14,
            fontWeight: '500',
            textAlign: 'center',
            alignSelf: 'flex-end',
            color: 'slategrey'
        },
    }
)
export default CustomListComponent;