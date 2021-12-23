
import React from "react";
import {
  StyleSheet,
  View,
  Modal,
  Platform,
  Dimensions,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import * as Colors from "../constants/ColorDefs";

const ListHeader = props => {
    const {genreName, count,color = Colors.CLR_313131} = props
    return (
      <View
        style={{
          height: 44,
          alignItems: 'center',
          flexDirection: 'row',
          width:'100%'
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color,
          }}>
          {genreName}
        </Text>
        <Text
          style={{
            marginLeft: 3,
            fontSize: 16,
            color,
          }}>
          {`(${count})`}
        </Text>
      </View>
    );
  };


  export default ListHeader