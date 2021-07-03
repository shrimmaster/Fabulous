import React, { Component } from "react";
import { StyleSheet, View, FlatList, Text,TextInput,TouchableOpacity } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import firebase from "firebase";
import MyHeader from "../components/MyHeader";
import SwipeableFlatlist from "../components/SwipeableFlatlist";
import db from "../config";

export default class AchievmentsScreen extends Component {
  constructor(){
    super();

  this.state={
    text:"",
  }
  }
  render(){
     return(
       <View style={styles.container}>
       <TextInput style={styles.inputBox}
       onChangeText={text=>{this.setState({text:text});
       }}
        value={this.state.text}
       />
       <TouchableOpacity style={styles.addButton}>
       <Text style={style.buttonText}></Text>
       </TouchableOpacity>

       </View>
     )
  }
 
  
}

const styles= StyleSheet.create ({
 container:{
   flex:1,
 backgroundColor:'pink',
 inputBox:{
   marginTop:50,
   width:"80%",
   alignSelf:"center",
   height:40,
   textAlign:"center",
   borderWidth:4,
  outline:'none'

 }
 }
})