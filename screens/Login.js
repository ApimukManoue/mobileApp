import React, { useState,useEffect } from 'react';
import {Modal,View,Text,TextInput,StyleSheet,TouchableOpacity,BackHandler} from 'react-native';

export default function Login({navigation}) {

  const handleExit = () => {
    if (Platform.OS === 'android') {
      BackHandler.exitApp(); // ปิดแอปทันที
    } else {
      Alert.alert('ไม่สามารถปิดแอปบน iOS ได้');
    }
  };
  
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  useEffect(()=>setModalVisible(true), []);

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      alert('Login Success!');
      setModalVisible(false);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.openButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Open Login Modal</Text>
      </TouchableOpacity> */}

      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.title}>Login</Text>
            <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={styles.input}/>
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input}/>

            {/* <Button title="Login" onPress={handleLogin} /> */}

            <TouchableOpacity style={styles.openButton} onPress={handleLogin}>
              <Text style={styles.openText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.closeButton} onPress={handleExit}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  openButton: {
    alignItems: 'center',
    backgroundColor: '#3f51b5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // ทำให้พื้นหลังโปร่ง
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    marginBottom: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  closeButton: {
    marginTop: 15,
    alignItems: 'center',
  },
  openText: {
    color: '#f5f5f5',
  },
  closeText: {
    color: 'red',
  },
});
