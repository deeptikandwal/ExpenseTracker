import { View, Text, Pressable, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStlyes";

function CustomButton({ children, onPress, mode, style }) {
    return <View style={style}>
        <Pressable onPress={onPress}
        style={({pressed})=> pressed && styles.pressed}>
            <View style={[styles.button, mode == 'flat' && styles.flatButton]}>
                <Text style={[styles.text, mode == 'flat' && styles.flattext]}>{children}
                </Text>
            </View>
        </Pressable>
    </View>
}

export default CustomButton;

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        width:120,
        paddingRight: 24,
        paddingLeft: 24,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: GlobalStyles.colors.primary400,
        margin: 18
    },
    flatButton: {
        backgroundColor: 'transparent'
    },
    text: {
        color: 'white',
        textAlign: "center",
    },
    flattext: {
        color: GlobalStyles.colors.primary200,
        color: 'white',
    },
    pressed: {
        opacity: 0.75
    }
})