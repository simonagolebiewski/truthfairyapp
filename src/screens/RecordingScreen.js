import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';

const RecordingScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [recording, setRecording] = useState(false);
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.front);
    
    useEffect(() => {
        (async () => {
          const { status } = await Camera.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);

      if (hasPermission === null) {
        return <View />;
      }
      if (hasPermission === false) {
        return <Text>Access to camera denied</Text>;
      }

    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
            <Text style={{ fontSize: 48 }}>Record</Text>
            <Camera style={styles.camera} type={type} ref={ref => { setCameraRef(ref) }}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    setType(
                    type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                }}>
                <MaterialIcons name="flip-camera-ios" size={24} color="white" />
                </TouchableOpacity>
            </View>
            </Camera>
            <TouchableOpacity 
                style={{alignSelf: 'center'}} 
                onPress={ async() => {
                        if(!recording){
                            setRecording(true)
                        let video = await cameraRef.recordAsync();
                        console.log('video', video);
                        } else {
                            setRecording(false)
                            cameraRef.stopRecording()
                        }
                    }}>
                <View style={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'}}
                    >
                    <MaterialCommunityIcons name="record-circle" size={40} color={ recording ? "blue":'red' }/>
                </View>
          </TouchableOpacity>
        </SafeAreaView>
    );
    
};

RecordingScreen.navigationOptions = {
    title: 'Record',
    tabBarIcon: <FontAwesome name="video-camera" size={20} />
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
    },
    button: {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
  });

export default RecordingScreen;