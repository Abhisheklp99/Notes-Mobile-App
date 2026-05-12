#safe Area View
#useSafeAreaInsets
#intialWindowMatrics

#stylesheets
create,compose ,flatten


#responsive design
Dimension =>useWindowDimensions
useColorScheme



screenheight -status screem(top) - navigationbar(bottom) =usbale screen

SafeAreaView -depreceated and only wokrs on ios 11th version not on android
to

===To contro our content we use safereaview from expo






// import { Text } from "@react-navigation/elements";
// import React, { useState } from "react";
// import { ScrollView, StyleSheet, TextInput, View} from "react-native";

// import { SafeAreaView } from "react-native-safe-area-context";


// function UnSafeScreen(){
//   return(
//     <View style={{flex:1,backgroundColor:"#1c1c1c"}}>
//       <Text style={{ color: "#fff", fontSize: 18, padding: 16 }}> Header (bleeds under notch!) </Text> <Text style={{ color: "#aaa", padding: 16 }}> This content might be hidden behind the status bar in dark mode. </Text> 
//     </View>
//   )
// }


// function SafeScreen(){
//   return(
//     <SafeAreaView  
//     style={{
//        backgroundColor:"#1c1c1c",flex:1
//     }}
//     edges={"top","bottom"}>
//       <Text style={{ color: "#fff", fontSize: 18, padding: 16 }}> Header (bleeds under notch!) </Text> <Text style={{ color: "#aaa", padding: 16 }}> This content might be hidden behind the status bar in dark mode. </Text> 
//     </SafeAreaView>
//   )
// }


// const index = () => {
//   const [email, setEmail] = useState("");

//   return (
//    <>
//   <SafeScreen/>
//    </>
//   );
// };



// export default index;


import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

const index = () => {
  const insets=useSafeAreaInsets();
  return (
    <View
    style={{
             flex:1,
             paddingTop:insets.top +12,
             paddingBottom:insets.bottom,
          }}
    >
      <StatusBar barStyle={"dark-content"} />
      <Text>Home Screen</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})
