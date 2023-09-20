/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  ImageComponent,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { GlobalStyles } from './constants/GlobalStlyes';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-ionicons';
import IconButton from './components/UI/IconButton';
import ExpensesContextProvider from './store/expenses-context';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator()
  const Bottom = createBottomTabNavigator()

  function ExpensesOverview() {
    return <Bottom.Navigator screenOptions={({ navigation }) => ({
      headerStyle: {
        backgroundColor: GlobalStyles.colors.primary400,
      },
      headerRight: ({ tintColor }) => {
        return <IconButton icon={'add'}
          size={24}
          color={GlobalStyles.colors.white}
          onPress={() => navigation.navigate('Manage Expenses')}></IconButton>
      },
      headerTintColor: GlobalStyles.colors.white,
      tabBarStyle: {
        backgroundColor: GlobalStyles.colors.primary400,
      },
      tabBarActiveTintColor: GlobalStyles.colors.white
    })}>
      <Bottom.Screen name='Recent Expenses'
        component={RecentExpenses}
        options={{
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => <Ionicons name="hourglass"
            size={size}
            color={color} />
        }
        }
      />
      <Bottom.Screen name="All Expenses"
        component={AllExpenses}
        options={{
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => <Ionicons name="calendar"
            size={size}
            color={color} />
        }
        } />
    </Bottom.Navigator>
  }
  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor={GlobalStyles.colors.primary400}
      />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary400,
            },
            headerTintColor: GlobalStyles.colors.white,
          }}>
            <Stack.Screen name='Expenses overview'
              component={ExpensesOverview}
              options={{
                headerShown: false,
              }} />
            <Stack.Screen name='Manage Expenses'
              component={ManageExpenses}
              options={{
                presentation: 'modal'
              }} />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },

  highlight: {
    fontWeight: '700',
  },
});

export default

  App;
