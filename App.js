/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import  React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HeaderScreen from './components/Header/header';
import ScanerScreen from './components/screens/scaning';
import HelpScreen from './components/screens/help';
import HistoryScreen from './components/screens/history';
import { ImageBackground } from 'react-native';

const Drawer = createDrawerNavigator();

const App = (props) => {
  toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
<NavigationContainer>
  <HeaderScreen  style={{backgroundColor:'#3a455c', hight:'100'}}/>
      <Drawer.Navigator initialRouteName="ScanerScreen">
        {/* <Drawer.Screen name="ScanerScreen" component={ScanerScreen} /> */}
        <Drawer.Screen name="HelpScreen" component={HelpScreen} />
        <Drawer.Screen name="HistoryScree" component={HistoryScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
   );
};

export default App;
