import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Platform,Linking } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';




export default function HomeScreen() {
  const handleGetStartedPress = () => {
    const url = 'https://edu-app-vert.vercel.app/'; // Replace with your actual URL
    Linking.openURL(url).catch((err) => console.error('Failed to open URL:', err));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Learn Together</Text>
        <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStartedPress}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: '#333333',
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#A1CEDC',
    height: 600,
  },
  reactLogo: {
    height: 178,
    width: 290,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  getStartedButton: {
    backgroundColor: '#333333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  getStartedText: {
    fontSize: 16,
    color: '#A1CEDC',
  },
  titleContainer: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#33333',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  stepContainer: {
    padding: 16,
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
  },
  boldText: {
    fontWeight: '600',
  },
});
