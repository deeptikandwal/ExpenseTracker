import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function IconButton({icon,size,color,onPress}){
    return <Pressable onPress={onPress}
    style={({pressed})=> pressed && styles.pressed}>
        <View>
        <Ionicons name={icon}
        size={size}
        color={color}></Ionicons>
        </View>
    </Pressable>
}

export default IconButton;

const styles=StyleSheet.create({
    buttonContainer:{
        borderRadius:24,
        margin:8,
        padding:8,
    },
    pressed:{
        opacity:0.75
    }
})