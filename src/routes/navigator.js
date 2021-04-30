import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import  Home from '../screens/home'
import  NewCustomer from '../screens/NewCustmor'
import  Login from '../screens/Login'
import  List from '../screens/list'
import  Dashboard from '../screens/dashboard'
import Cart from '../screens/cart'
import Forget from '../screens/forgetpassword'
import Payment from '../screens/Payment'
import Bill from '../screens/Bill'
import History from '../screens/History'
import  Admin from '../screens/Admin'
import  NewAdmin from '../screens/NewAdmin'
import  Product from '../screens/Product'
import  StockDetails from '../screens/StockDetails'
const AppStack = createStackNavigator();
export default function Navigator(){

    return (
    <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: true }} >
    <AppStack.Screen name="User Login" component={Login} />
    <AppStack.Screen name="Sign Up" component={NewCustomer} />
    <AppStack.Screen name="Home" component={Home} />
    <AppStack.Screen name="Scan Products" component={List} />
    <AppStack.Screen name="Search Product" component={Dashboard} />
     <AppStack.Screen name="Forget" component={Forget} />
    <AppStack.Screen name="Cart" component={Cart} /> 
    <AppStack.Screen name="Payment" component={Payment} />
    <AppStack.Screen name="Bill" component={Bill} />
    <AppStack.Screen name="History" component={History} />
    <AppStack.Screen name="Admin" component={Admin} />
    <AppStack.Screen name="NewAdmin" component={NewAdmin} />
    <AppStack.Screen name="StockDetails" component={StockDetails} />
    <AppStack.Screen name="Product" component={Product} />
    </AppStack.Navigator>
    </NavigationContainer>
    );
}