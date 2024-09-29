import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
     flex: 1, // Use flex to make the container adapt to the screen size
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: width * 0.05, // 5% padding
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  logo: {
    width: width * 0.1, // 10% of screen width
    height: width * 0.1, // Maintain aspect ratio
    marginLeft: -width * 0.03, // Adjust if needed
  },
  finallogo: {
    width: width * 0.5, // 10% of screen width
    height: width * 0.5, // Maintain aspect ratio
    marginLeft: -width * 0.05,
     // Adjust if needed
  },
  wyc: {
    width: width * 0.5, // 50% of screen width
    height: width * 0.5, // Maintain aspect ratio
    marginLeft: -width * 0.05, // Adjust horizontal position if needed
    position: 'absolute', // Ensure it's positioned absolutely
    bottom: height * 0.08, //
  },
  logops: {
    width: width * 0.15, // 15% of screen width
    height: width * 0.1, // Maintain aspect ratio
    marginLeft: -width * 0.1, // Adjust if needed
  },
  title: {
    fontSize: width * 0.05, // Scalable font size
    color: '#FFD700',
    marginBottom: height * 0.02, // 2% margin
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: height * 0.02, // 2% margin
  },
  iconButton: {
    backgroundColor: '#4A8F74',
    padding: width * 0.05, // 5% padding
    borderRadius: width * 0.05, // Maintain rounded corners
  },
  cameraButton: {
    marginRight: -width * 0.05, // Adjust as needed
  },
  galleryButton: {
    marginLeft: width * 0.05, // 5% margin
  },
  guidelineButton: {
    alignSelf: 'center',
    marginTop: height * 0.02, // 2% margin
    backgroundColor: '#4A8F74',
    padding: width * 0.05, // 5% padding
    borderRadius: width * 0.05, // Maintain rounded corners
    width: '100%',
  },
  guidelineText: {
    color: '#FFD700',
    fontSize: width * 0.05, // Scalable font size
    fontWeight: 'bold',
  },
  initiateButton: {
    marginTop: height * 0.02, // 2% margin
    backgroundColor: '#FFD700',
    padding: width * 0.05, // 5% padding
    borderRadius: width * 0.05, // Maintain rounded corners
  },
  initiateText: {
    color: '#2E7D46',
    fontSize: width * 0.04, // Scalable font size
  },
  blobIcon: {
    width: width * 0.7, // 70% of screen width
    height: height * 0.25, // 25% of screen height
    position: 'absolute',
    bottom: -9,
    left: -width * 0.1, // Adjust if needed
  },
  BlobIcon: {
    width: width * 0.7, // 70% of screen width
    height: height * 0.7, // 25% of screen height
    position: 'absolute',
    bottom: -9,
    left: -width * 0.4, // Adjust if needed
  },
  vector5: {
    width: width * 0.4, // 40% of screen width
    height: height * 0.25, // 25% of screen height
    position: 'absolute',
    bottom: -height * 0.05, // Adjust if needed
    left: -width * 0.1, // Adjust if needed
  },
  uploadedImage: {
    width: width * 0.75, // 75% of screen width
    height: width * 0.75, // Maintain aspect ratio
    marginBottom: height * 0.02, // 2% margin
  },
  image: {
    width: width * 0.75, // 75% of screen width
    height: width * 0.75, // Maintain aspect ratio
    marginBottom: height * 0.02, // 2% margin
    borderRadius: width * 0.02, // Rounded corners
    backgroundColor: '#ccc',
  },
  text: {
    fontSize: width * 0.05, // Scalable font size
    color: '#E4A951',
    fontStyle: 'oblique',
    fontWeight: 'bold',
  },
  spinner: {
    marginTop: height * 0.02, // 2% margin
  },
  vectorIcon: {
    width: width * 0.5, // 80% of screen width
    height: height * 0.5, // 70% of screen height
    position: 'absolute',
    top: height * 0.01, // 43% from top
    left: -width * 0.5, // Adjust if needed
  },
  vectorIcon1: {
    width: width * 0.3, // 80% of screen width
    height: height * 0.3, // 70% of screen height
    position: 'absolute',
    top: height * 0.7, // 43% from top
    left: width * 0.5, // Adjust if needed
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  psvector: {
    width: width * 0.7, // 70% of screen width
    height: height * 0.6, // 60% of screen height
    top: height * 0.52, // 52% from top
    left: width * 0.2, // Adjust if needed
    zIndex: 1,
  },
  pscontainer: {
    width: width * 0.9, // 90% of screen width
    height: height * 0.9, // 90% of screen height
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E7D46',
    position: 'relative',
  },
  errorImage: {
    width: '100%',
    height: height * 0.3, // 30% of screen height
    marginVertical: height * 0.02, // 2% margin
    borderRadius: width * 0.02, // Rounded corners
  },
  buttonContainer: {
    flexDirection: 'column', // Stack buttons vertically
    alignItems: 'center', // Center align buttons horizontally
    width: '100%', // Full width
    paddingHorizontal: width * 0.05, // 5% horizontal padding
  },
  guidelineButton: {
    backgroundColor: '#D4E181',
    padding: width * 0.05, // 5% padding
    borderRadius: width * 0.05, // Rounded corners
    marginBottom: height * 0.02, // 2% space between buttons
    width: '100%', 
  },
  goBackButton: {
    backgroundColor: '#D4E181',
    padding: width * 0.05, // 5% padding
    borderRadius: width * 0.05, // Rounded corners
  },
  buttonText: {
    color: '#000000',
    fontSize: width * 0.04, // Scalable font size
    fontWeight: 'normal',
  },
  resultDetails: {
    fontSize: width * 0.05, // Scalable font size
    backgroundColor: '#D4E181',
    padding: width * 0.05, // 5% padding
    borderRadius: width * 0.02, // Rounded corners
  },
  textt: {
    fontSize: width * 0.04, // Scalable font size
    color: '#FFFFFF',
    marginBottom: height * 0.015, // 1.5% margin
  },
});

export default styles;
