import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import COLORS from "../constants/Colors";

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const categories = ["POPULAR", "ORGANIC", "INDOORS", "SYNTHETIC"];
  return (
    <View style={styles.categoryContainer}>
      {categories.map((item, index) => (
        <TouchableOpacity key={index} onPress={()=> setSelectedCategory(index)} activeOpacity={0.8}>
          <Text
            style={[
              styles.categoryText,
              selectedCategory == index && styles.selectedCategory,
            ]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 10,
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
  categoryText: {
    color: "gray",
    fontWeight: "bold",
  },
  selectedCategory: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
});
export default CategoryList;
