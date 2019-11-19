import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {FunctionComponent} from 'react';

export type NavigatorParamList1 = {
  Foo: {a: string};
  Bar: undefined;
};

export type NavigatorParamList2 = {
  Hello: {b: number};
  World: undefined;
};

interface Props {
  navigation: CompositeNavigationProp<
    StackNavigationProp<NavigatorParamList1, 'Foo'>,
    BottomTabNavigationProp<NavigatorParamList2>
  >;
}

interface Props2 {
  navigation: StackNavigationProp<NavigatorParamList1, 'Foo'>;
}

export const Lol: FunctionComponent<Props> = props => {
  props.navigation.setParams({});
  props.navigation.navigate('a');

  return null;
};

export const Lol2: FunctionComponent<Props2> = props => {
  props.navigation.setParams({});
  props.navigation.navigate('a');

  return null;
};
