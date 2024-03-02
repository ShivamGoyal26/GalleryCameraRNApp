import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const App = () => {
  const [image, setImage] = useState(null);

  const pickImageFromGallery = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
      });
      if (result?.assets?.length) {
        setImage(result.assets[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const pickImageFromCamera = () => {
    console.log('Picking image from gallery');
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.screen}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={pickImageFromGallery}
            // onPress={() => {
            //   pickImageFromGallery();
            // }}
            style={styles.button}>
            <Text>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={pickImageFromCamera}
            // onPress={() => {
            //   pickImageFromCamera();
            // }}
            style={styles.button}>
            <Text>Camera</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'pink',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
});

export default App;
