import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStlyes";
import { getFormattedDate } from "../../util/DateUtil";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({ id, description, date, amount }) {
    const navigation = useNavigation()
    function longPressHandlerName() {
        //first- route name second route parameters
        navigation.navigate('Manage Expenses',{
            navigateId:id
        })
    }
    return <Pressable onPress={longPressHandlerName}
        style={({ pressed }) => pressed && stlyes.pressed}>
        <View style={stlyes.expenseItem}>
            <View>
                <Text style={[stlyes.textBase, stlyes.description]}>{description}</Text>
                <Text>{getFormattedDate(date)}</Text>
            </View>
            <View style={stlyes.priceContainer}>
                <Text style={stlyes.amount}>${amount.toFixed(2)}</Text>
            </View>
        </View>
    </Pressable>
}

export default ExpenseItem;

const stlyes = StyleSheet.create({
    pressed: {
        opacity: 0.75
    },
    expenseItem: {
        padding: 12,
        marginVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 3,
        borderRadius: 5,
        shadowColor: GlobalStyles.colors.gray50,
        shadowRadius: 4,
        backgroundColor: GlobalStyles.colors.primary20
    },
    textBase: {
        color: GlobalStyles.colors.primary50
    },
    description: {
        marginBottom: 4,
        fontSize: 16,
        fontWeight: 'bold'
    },
    priceContainer: {
        paddingHorizontal: 4,
        paddingVertical: 4,
        backgroundColor: GlobalStyles.colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    amount: {
        color: GlobalStyles.colors.primary400,
        fontWeight: "bold"
    }
})