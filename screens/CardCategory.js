import { View, Text, StyleSheet, Dimensions, Image,TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get("screen").width / 2 - 20;
const CardCategory = ({ plant }) => {
    const navigation= useNavigation()
  return (
   <TouchableOpacity>
   <View style={styles.contentCard}>
   <View style={{ alignItems: "flex-end" }}>
     <View
       style={[
         styles.favorite,
         {
           backgroundColor: plant.like
             ? "rgba(245,42,42,0.2)"
             : "rgba(0,0,0,0.2)",
         },
       ]}
     >
       <MaterialIcons
         name="favorite"
         size={20}
         color={plant.like ? COLORS.red : COLORS.dark}
       />
     </View>
   </View>
   <View style={{ height: 100, alignItems: "center" }}>
     <Image source={plant.img} style={{ flex: 1, resizeMode: "contain" }} />
   </View>
   <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 10 }}>
     {plant.name}
   </Text>
   <View
     style={{
       flexDirection: "row",
       justifyContent: "space-between",
       marginTop: 5,
     }}
   >
     <Text style={{ fontSize: 18, fontWeight: "bold" }}>${plant.price}</Text>
     <View
       style={{
         height: 25,
         width: 25,
         backgroundColor: COLORS.green,
         borderRadius: 5,
         justifyContent: "center",
         alignItems: "center",
       }}
     >
       <Text
         style={{ fontSize: 20, color: COLORS.white, fontWeight: "bold" }}
       >
         +
       </Text>
     </View>
   </View>
 </View>
   </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  contentCard: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  favorite: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default CardCategory;
