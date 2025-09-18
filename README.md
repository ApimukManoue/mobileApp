React Native
1.ติดตั้ง Node.js
2.ติดตั้ง react native expo cli

    npm install -g expo-cli --force
    
3.สร้างแอป 

    expo init <appName>
    เลือก blank 
    cd mobileApp
    npm start
    
4.ที่ Mobile ติดตั้ง Expo Go
5.ต้องอยู่ในเครือข่ายเดียวกัน เปิด Expo Go App แล้วสแกน QR Code
6.ไปที่ mobileApp/App.js ลองแก้ไขโค้ด จะเห็นการเปลี่ยนแปลงที่หน้าจอมือถือ

7....Nativewind...

8.การเลื่อนไปมาระหว่างจอ ไปที่ ReactNative (https://reactnative.dev/docs/navigation) ติดตั้ง

	npm install @react-navigation/native @react-navigation/native-stack
 
  Expo project ติดตั้ง 
  
	npx expo install react-native-screens react-native-safe-area-context

9.สร้างโฟล์เดอร์เก็บหน้าจอต่างๆ   ชื่อ screens และสร้างหน้าจอต่างๆแบบฟังค์ชั่นคอมโปเนนท์ นั้นเช่น

	Splash.js , Home.js , About.js .... 

10.ที่ไฟล์ App.js ประกาศหน้าจอทั้งหมดในนั้น

	import Splash from './screens/Splash';
	import Home from './screens/Home';
	import About from './screens/About';

11อิมพอร์ต NavigationContainer , createNativeStackNavigator 

	import { NavigationContainer } from '@react-navigation/native';
	import { createNativeStackNavigator } from '@react-navigation/native-stack';

  แล้วสร้างอ็อบเจค Stack 

	const Stack = createNativeStackNavigator();

	return (
   	 <NavigationContainer>
    	  <Stack.Navigator initialRouteName="Splash" >
       		   <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
       		   <Stack.Screen name="Home" component={Home} />
       		   <Stack.Screen name="About" component={About} />
     	    </Stack.Navigator>
   	 </NavigationContainer>
  );

  หมายเหตุ 
	-เมื่อเปิดแอ็ป หน้าจอที่แสดงเป็นอันดับแรกคือบนสุด หรือหากต้องการกำหนดเลยก็ initialRouteName="Splash"
	-หากไม่ต้องการโชว์ title ให้ 
		options={{ headerShown: false }}   
	-Stack.Screen  ประกาศหน้าจอโดยมี prop
	        name='...' ตั้งชื่อเพื่อการเรียกใช้ภายหลัง
			component={...} เมื่อมีการเรียก name ให้เรียกคอมโปเนนท์ ... นี้มา 


			 

	การเรียกใช้
		ให้ใส่ prop {navigation} ในฟังค์ชั่นคอมโปเนนท์(จอ) ทุกจอ เช่น

			export default function About({navigation}) {
  				return (
   					 <View>
    				  <Text>About</Text>
    				 </View>
  				)
			}

		ที่หน้าจอที่จะเรียกใช้ สร้างฟังค์ชันสำหรับการเรียกใช้ ในที่นี้จะใช้แอโรว์ฟังชั่น (สร้างนอกก่อน return() ) เช่น

			const  goHome = ()=>{navigation.navigate('Home')}

		หรือจะทำ callback function เลยก็ได้ ()=>{navigation.navigate('Home')}
			

		ที่เหตุการณ์ต่างๆเรียกช้ฟังค์ชั่น ... ตย.
				return (
    				<View>
      					<Text className="text-center text-blue-700 text-lg font-bold"> Splash</Text>
      					<Text onPress={() => navigation.navigate('Home')}>Home</Text>
      					<Text onPress={() => navigation.navigate('About')}>About</Text>
    				</View>
				)

		การย้อนกลับหน้าจอก่อนหน้า goBack()  ()=>{navigation.goBack()}

		การโยนข้อมูลไปหน้าที่เราเรียก ทำได้โดยส่งข้อมูลไปเป็นพารามิเตอร์ตัวที่สองของเมธอด navigate() ดังนี้

					()=>{navigation.navigate('Home',data)}

			แต่ต้องสร้าง data ก่อน ดังนี้

					const data = {id:1,name:"Apimuk",sname:"Manoue"}

		การอ่านข้อมูลที่โยนมา ทำได้โดยการเพิ่ม route ต่อจาก navigation เพื่อรับค่าที่โยนมา ({navigation,route})
		แล้วอ่านค่าจาก route.params. เช่น

			export default function About({navigation,route}) {
				const {id,name,sname} = route.params;
				return (
					<View>		
						<Text>About</Text>
						<Text>id:{id}</Text>
						<Text>name:{name}</Text>
						<Text>sname:{sname}</Text>
					</View>
				)
			}





12 แต่งหน้าจอ Splash 

	ก็อบ Fox.png ไปวาง ในโฟลเดอร์ assets

        import { StyleSheet } from 'react-native';

	const styles = StyleSheet.create({
  		container: {
    				flex: 1,
    				backgroundColor: '#fff',
    				alignItems: 'center',
    				justifyContent: 'center',
  	},
	});


	<View style={styles.container}>


	import {Image} from 'react-native';


	const styles = StyleSheet.create({
  		container: {
    				flex: 1,
    				backgroundColor: '#fff',
    				alignItems: 'center',
    				justifyContent: 'center',
  			   },
		SplashIMG:{
 				width:200,
    				height:200
  
  			   }
	});


	<Image style={styles.SplashIMG} source={require('../assets/Fox.png')}/>


	import { useEffect } from "react";

	
	
  		useEffect(() => {
 		   setTimeout(() => {
 		     navigation.navigate('Signin');
  		  }, 3000);
 		 }, []);


	import Signin from './screens/Signin';


	<Stack.Screen name="Signin" component={Signin} />





	
	

 
  

    

  



        



