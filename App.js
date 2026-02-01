import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform, Text } from 'react-native';
import { BlurView } from 'expo-blur';

import QuestBoardScreen from './screens/QuestBoardScreen';
import DigitalCollectiblesScreen from './screens/DigitalCollectiblesScreen';
import PlayerProfileScreen from './screens/PlayerProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.topHeader}>
        <Text style={styles.appName}>mainquest</Text>
      </View>
      <NavigationContainer>
        <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            borderTopWidth: 1,
            borderTopColor: 'rgba(255, 255, 255, 0.1)',
            elevation: 0,
            height: 90,
            paddingBottom: 25,
            paddingTop: 10,
          },
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: '#999999',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
        }}
      >
        <Tab.Screen 
          name="QuestBoard" 
          component={QuestBoardScreen}
          options={{
            tabBarLabel: 'Quest Board',
            tabBarIcon: ({ color, size }) => (
              <View style={[styles.tabIcon, { borderColor: color }]}>
                <View style={[styles.swordIcon, { backgroundColor: color }]} />
              </View>
            ),
          }}
        />
        <Tab.Screen 
          name="Collectibles" 
          component={DigitalCollectiblesScreen}
          options={{
            tabBarLabel: 'Collectibles',
            tabBarIcon: ({ color, size }) => (
              <View style={[styles.tabIcon, styles.bingoIcon, { borderColor: color }]}>
                <View style={[styles.bingoDot, { backgroundColor: color }]} />
              </View>
            ),
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={PlayerProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <View style={[styles.tabIcon, styles.profileIcon, { borderColor: color }]}>
                <View style={[styles.profileCircle, { backgroundColor: color }]} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    ...(Platform.OS === 'web' && {
      minHeight: '100vh',
      overflow: 'hidden',
      maxWidth: 375,
      margin: '0 auto',
      backgroundColor: '#000000',
    }),
  },
  topHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: 10,
    paddingHorizontal: 20,
    zIndex: 1000,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  appName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: 0.5,
  },
  tabIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swordIcon: {
    width: 12,
    height: 12,
    borderRadius: 2,
    transform: [{ rotate: '45deg' }],
  },
  bingoIcon: {
    borderRadius: 4,
  },
  bingoDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  profileIcon: {
    borderRadius: 12,
  },
  profileCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

