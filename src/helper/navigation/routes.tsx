import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/homeScreen';
import SearchScreen from '../../screens/searchScreen';
import ProductScreen from '../../screens/productScreen';
import { RootStackParamList } from './rootStackParam';
import colors from '../../assets/style/colors';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.headerBackground },
        headerTintColor: colors.headerText,
        headerTitleStyle: { fontWeight: '600' },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
}
