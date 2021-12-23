import React, {useState} from 'react';
import {StyleSheet, View, Modal, Platform,Dimensions,Text, Image, TextInput} from 'react-native';
const {width, height} = Dimensions.get('window');
import * as Colors from '../constants/ColorDefs';

const SearchBar = (props) =>{
    const {onFocus = () =>{}, onEndEditing= () =>{}, initialText = ''} = props;
    const [searchText, setSearchText] = useState(initialText)
    return(
<View
    style={{
      backgroundColor: "red",
      borderRadius: 25,
      overflow: "hidden",
      width: "100%",
      height: 50,
      marginTop:44
    }}
  >
    <TextInput
      style={styles.seatchTextField}
      textAlign={"left"}
      underlineColorAndroid="transparent"
      value={searchText}
      keyboardType={"default"}
      autoCapitalize="none"
      autoCompleteType="off"
      autoCorrect={false}
      clearButtonMode='always'
      placeholderTextColor={Colors.LIGHTGRAY}
      placeholder="Enter moivie name"
      onFocus={() => {
        onFocus()
      }}
      onChangeText={(value) => {
        console.log("value", value);
        setSearchText(value)
      }}
      onBlur={() => {}}
      onEndEditing={() => {
        onEndEditing(searchText)
      }}
    />
  </View>
    )
    
}



export default SearchBar


const styles  = StyleSheet.create({
   
    seatchTextField: {
      fontSize: 20,
      fontWeight: "400",
      height: "100%",
      flex: 1,
      backgroundColor: Colors.WHITE,
      paddingHorizontal:20
    }
  })