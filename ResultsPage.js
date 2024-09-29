import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/styles.js'; // Ensure this path is correct

const ResultsPage = ({ route }) => {
  const { imageUri } = route.params || {};
  console.log('Received imageUri in ResultsPage:', imageUri); // Debugging log

  return (
    <LinearGradient colors={['#459877', '#132B22']} style={styles.container}>
      <View style={styles.header}>
        {/* Add header content if needed */}
      </View>

      <View style={styles.contentContainer}>
        
        
        {imageUri ? (
          <Image
            source={{ uri: imageUri }}
            style={styles.image} // Ensure this style is defined in your styles
            resizeMode="contain" // Adjust as needed for better image display
          />
        ) : (
          <Text style={styles.text}>No image provided</Text>
        )}
        
        {/* Add more result details here */}
        <View style={styles.resultDetails}>
        <Text style={styles.resultDetails}>Prediction Result</Text>
          <Text style={styles.resultDetails}>   Weight:</Text>
          {/* Display additional result details here */}
        </View>
      </View>
    </LinearGradient>
  );
};



export default ResultsPage;
