import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import HabitsScreen from '../screens/HabitsScreen';
import ProgressScreen from '../screens/ProgressScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Colors from '../theme/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

export type RootBottomStackParamsList = {
  Home: undefined;
  Progress: undefined;
  Habits: undefined;
  Profile: undefined;
};

const BottomStack = createBottomTabNavigator<RootBottomStackParamsList>();

const RootBottomTabNavigation = () => {
  return (
    <BottomStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.Kournikova,
        tabBarInactiveTintColor: Colors.black_white,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          left: 20,
          right: 20,
          bottom: 20,
          borderRadius: 8,
          height: 54,
          paddingTop: 8,
          paddingBottom: 8,
          backgroundColor: Colors.Valhalla,
        },
      }}>
      <BottomStack.Screen
        name="Home"
        component={HomeScreen}
        options={focused => ({
          title: 'Home',

          tabBarIcon: ({color, focused}) => (
            <Icon name={'home'} size={focused ? 28 : 24} color={color} />
          ),
        })}
      />

      <BottomStack.Screen
        name="Progress"
        component={ProgressScreen}
        options={() => ({
          title: 'Progress',

          tabBarIcon: ({color, focused}) => (
            <Icon
              name={'calendar-today'}
              size={focused ? 28 : 24}
              color={color}
            />
          ),
        })}
      />

      <BottomStack.Screen
        name="Habits"
        component={HabitsScreen}
        options={() => ({
          title: 'Habbits',
          tabBarIcon: ({color, focused}) => (
            <Icon name={'auto-graph'} size={focused ? 28 : 24} color={color} />
          ),
        })}
      />

      <BottomStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={() => ({
          title: 'Profile',
          tabBarIcon: ({color, focused}) => (
            <Icon name={'person'} size={focused ? 28 : 24} color={color} />
          ),
        })}
      />
    </BottomStack.Navigator>
  );
};

export default RootBottomTabNavigation;
