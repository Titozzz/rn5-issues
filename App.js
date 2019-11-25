import React, {useEffect} from 'react';
import {SafeAreaView, View, Button, StatusBar, Text} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationNativeContainer} from '@react-navigation/native';
import {useIsFocused} from '@react-navigation/core';

const Stack = createStackNavigator();
const Stack2 = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <NavigationNativeContainer>
          <Stack.Navigator screenOptions={{animationEnabled: false}}>
            <Stack.Screen
              options={{headerShown: false}}
              name="S1"
              component={() => (
                <Tab.Navigator>
                  <Tab.Screen
                    name="S1-T1"
                    component={({navigation}) => {
                      const isFocused = useIsFocused();
                      console.log('S1-T1 focused:', isFocused);
                      useEffect(() => {
                        console.log('MOUNT S1-T1');
                        return () => {
                          console.log('UNMOUNT S1-T1');
                        };
                      }, []);
                      return (
                        <View>
                          <Button
                            title="Go To S2"
                            onPress={() => {
                              navigation.resetRoot({
                                index: 1,
                                routes: [
                                  {
                                    name: 'S1',
                                    state: {
                                      routes: [
                                        {
                                          name: 'S1-T1',
                                        },
                                      ],
                                    },
                                  },
                                  {name: 'S2'},
                                ],
                              });
                            }}
                          />
                        </View>
                      );
                    }}
                  />
                  <Tab.Screen
                    name="S1-T2"
                    component={({navigation}) => {
                      const isFocused = useIsFocused();
                      console.log('S1-T2 focused:', isFocused);
                      useEffect(() => {
                        console.log('MOUNT S1-T2');
                        return () => {
                          console.log('UNMOUNT S1-T2');
                        };
                      }, []);
                      return (
                        <View>
                          <Button
                            title="Go To S2"
                            onPress={() => {
                              navigation.resetRoot({
                                index: 1,
                                routes: [
                                  {
                                    name: 'S1',
                                    state: {
                                      routes: [
                                        {
                                          name: 'S1-T1',
                                        },
                                      ],
                                    },
                                  },
                                  {name: 'S2'},
                                ],
                              });
                            }}
                          />
                        </View>
                      );
                    }}
                  />
                </Tab.Navigator>
              )}
            />
            <Stack.Screen
              name="S2"
              component={() => {
                const isFocused = useIsFocused();
                console.log('S2 focused:', isFocused);
                useEffect(() => {
                  console.log('MOUNT S2');
                  return () => {
                    console.log('UNMOUNT S2');
                  };
                }, []);
                return (
                  <View>
                    <Text>{'beep'}</Text>
                  </View>
                );
              }}
            />
          </Stack.Navigator>
        </NavigationNativeContainer>
      </SafeAreaView>
    </>
  );
};

export default App;
