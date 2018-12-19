// Import the screens
import Main from './components/Main';
import Chat from './components/Chat';
// Import React Navigation
import { createStackNavigator, createAppContainer } from 'react-navigation'
// Create the navigator
const AppNavigator = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat },
});
const AppContainer = createAppContainer(AppNavigator);
// Export it as the root component
export default AppContainer

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>We will create an amazing app!</Text>
//         <Text>We look forward!</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
