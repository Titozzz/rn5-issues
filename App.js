import React from 'react';
import {SafeAreaView, View, Button, StatusBar} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationNativeContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <NavigationNativeContainer>
          <Stack.Navigator screenOptions={{animationEnabled: false}}>
            <Stack.Screen
              options={{headerShown: false}}
              name="boop"
              component={({navigation}) => (
                <View>
                  <Button
                    title="go To 2"
                    onPress={() => {
                      navigation.navigate('boop2');
                    }}>
                    boop
                  </Button>
                </View>
              )}
            />
            <Stack.Screen
              name="boop2"
              component={({navigation}) => (
                <View>
                  <Button
                    title="go To 3"
                    onPress={() => {
                      navigation.navigate('boop3');
                    }}>
                    boop
                  </Button>
                </View>
              )}
            />
            <Stack.Screen
              name="boop3"
              component={({navigation}) => <View></View>}
            />
          </Stack.Navigator>
        </NavigationNativeContainer>
      </SafeAreaView>
    </>
  );
};

export default App;
