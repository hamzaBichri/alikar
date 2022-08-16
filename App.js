import * as React from 'react';
import {Button, View, Text} from 'react-native';
import { createStackNavigator, HeaderBackButton } from "react-navigation-stack";
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import QuizOne from './quiz/QuizOne';
import QuizTow from './quiz/QuizTow';
import QuizThree from './quiz/QuizThree';
import Result from './quiz/Result';

const Drawer = createDrawerNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="QuizOne"
          component={QuizOne}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="QuizTow"
          component={QuizTow}
          options={{headerShown: true}}
        />
         <Drawer.Screen
          name="QuizThree"
          component={QuizThree}
          options={{headerShown: true}}
        />
         <Drawer.Screen
          name="Result"
          component={Result}
          options={{headerShown: true}}
        />
 
      </Drawer.Navigator>
    </NavigationContainer>
  );

}
