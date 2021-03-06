// import React, { Component } from "react";
// import { connect } from "react-redux";
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   NavigatorIOS
// } from "react-native";
//
// import FontAwesome, { Icons } from "react-native-fontawesome";
// import { unauthUser } from "../../actions";
// import Items from "../item/items";
// import UserProfile from "../user/userProfile";
// import EditUser from '../user/EditUser';
// import Photo from '../photo/photo';
//
// import Swiper from "react-native-swiper";
//
// var styles = StyleSheet.create({
//   wrapper: {},
//   slide1: {
//     flex: 1,
//     alignSelf: "stretch"
//   },
//   slide2: {
//     flex: 1,
//     alignSelf: "stretch"
//   },
//   slide3: {
//     flex: 1,
//     alignSelf: "stretch",
//     backgroundColor: "white"
//   },
//   text: {
//     color: "#fff",
//     fontSize: 30,
//     fontWeight: "bold"
//   }
// });
//
// class InterestSwipe extends Component {
//   render() {
//     return (
//       <Swiper
//         style={styles.wrapper}
//         index={2}
//         showsPagination={false}
//         loop={false}
//         showsButtons={false}
//       >
//         <View style={styles.slide1}>
//           <UserProfile />
//         </View>
//         <View style={styles.slide2}>
//           <Items />
//         </View>
//         <View style={styles.slide3}>
//         </View>
//       </Swiper>
//     );
//   }
// }
//
// export default connect()(InterestSwipe);
