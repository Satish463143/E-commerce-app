import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import satish from '../assets/images/satish.jpg'

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={satish} resizeMode='cover' style={styles.image}>       
     
      <Text style={styles.textColor}>app</Text>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container :{
    flex:1,
    width:'97%',
    flexDirection:'column',
    margin:'auto'
  },
  textColor:{
    color:'white',
    fontSize:40,
    fontWeight:'600'    
  },
  image:{
    width:'100%',
    height:'100vh',
    flex:1,
    justifyContent:'center',
    resizeMode:'cover'
  }
})