import { TextInput, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStlyes";

function Input({ label, textInputConfig }) {
// You can pass an array to the style prop to apply multiple styles. When there is a conflict, the last one in the list takes precedence.
    let inputLineStyles=[styles.textInput]

    if(textInputConfig && textInputConfig.multiline){
        inputLineStyles.push(styles.inputLine)
    }
    return <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={inputLineStyles}
        {...textInputConfig} />
    </View>
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 16
    },
    label: {
        fontSize: 15,
        color: GlobalStyles.colors.primary400,
        marginBottom: 4,
    },
    textInput: {
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius:6,
        fontSize:18,
        padding:6,
        color:GlobalStyles.colors.primary500
    },
    inputLine:{
        minHeight:100,
        textAlignVertical:'top'
    }
})