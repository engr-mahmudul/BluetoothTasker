import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'

import SearchingLayout from './src/components/SearchingLayout'

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
      // Hide the component after 10 seconds
      const timer = setTimeout(() => {
          setIsVisible(false);
      }, 10000); // 10 seconds

      // Cleanup the timer when the component unmounts
      return () => clearTimeout(timer);
  }, []);

  return(
    <View style={styles.container}>
      {
        isVisible ? <SearchingLayout /> : <Text> Searching Completed</Text>
      }
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"white"
  }
})