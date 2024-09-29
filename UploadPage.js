import React from 'react';
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { uploadImageAndMetadata } from '../src/firebaseFunctions'; // Import Firebase function
import styles from '../styles/styles.js'; // Ensure the path is correct

const UploadPage = () => {
  const navigation = useNavigation();

  const handleUpload = async (image) => {
    const metadata = {
      uploadedAt: new Date().toISOString(),
      description: 'Cow image for weight prediction',
    };

    // Adjust the image object to include a name
    const imageFile = {
      uri: image.uri,
      name: image.uri.split('/').pop() || 'uploaded_image.jpg', // Get the file name
    };

    try {
      // Upload the image and metadata to Firebase
      await uploadImageAndMetadata(imageFile, metadata);

      // Navigate to the prediction screen
      navigation.navigate('PredictionScreen', { imageUri: image.uri });
    } catch (error) {
      console.error('Error during image upload:', error);
    }
  };

  // Function to pick image from gallery
  const pickImageFromGallery = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'You need to allow gallery permissions to upload images.');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled && result.assets) {
        handleUpload(result.assets[0]); // Call the handleUpload function with the selected image
      }
    } catch (error) {
      console.error('Error picking image from gallery:', error);
    }
  };

  // Function to capture image from camera
  const pickImageFromCamera = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'You need to allow camera permissions to take a photo.');
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled && result.assets) {
        handleUpload(result.assets[0]); // Call the handleUpload function with the captured image
      }
    } catch (error) {
      console.error('Error capturing image from camera:', error);
    }
  };

  return (
    <LinearGradient colors={['#459877', '#132B22']} style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/Frame2assets/cowicon.png')} style={styles.logo} />
        
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ position: 'absolute', right: 20, top: 20 }}>
          <Icon name="menu" size={40} color="#FFD700" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>How would you like to upload your image?</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.iconButton, styles.cameraButton]}
          onPress={pickImageFromCamera}
          activeOpacity={0.7}
        >
          <Icon name="camera-outline" size={50} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.iconButton, styles.galleryButton]}
          onPress={pickImageFromGallery}
          activeOpacity={0.7}
        >
          <Icon name="image-outline" size={50} color="#fff" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.guidelinebutton}
        onPress={() => navigation.navigate('Guidelines')}
        activeOpacity={0.7}
      >
        <Text style={styles.guidelineText}>Guidelines for Annotations</Text>
      </TouchableOpacity>

      <Image source={require('../assets/Frame2assets/Subtract.png')} style={styles.blobIcon} resizeMode="contain" />
    </LinearGradient>
  );
};

export default UploadPage;
