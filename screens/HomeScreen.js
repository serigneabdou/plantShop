import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";
import React from "react";
import COLORS from "../constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import CategoryList from "./CategoryList";
import plants from "../constants/plants";
import CardCategory from "./CardCategory";
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.contentHome}>
      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Welcome to </Text>
          <Text
            style={{ fontSize: 38, fontWeight: "bold", color: COLORS.green }}
          >
            Plant Shop
          </Text>
        </View>
        <Entypo name="shopping-cart" size={28} color="black" />
      </View>
      <View
        style={{ marginTop: 20, flexDirection: "row", marginHorizontal: 10 }}
      >
        <View style={styles.searchContainer}>
          <AntDesign
            name="search1"
            size={24}
            color="black"
            style={{ marginLeft: 20 }}
          />
          <TextInput placeholder="Recherche" style={styles.input} />
        </View>
        <View style={styles.sortBtn}>
          <MaterialIcons name="sort" size={28} color={COLORS.white} />
        </View>
      </View>
      <CategoryList />
      <FlatList
        //columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={plants}
        renderItem={({ item }) => <CardCategory plant={item} />}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  contentHome: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.dark,
    flex: 1,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    backgroundColor: COLORS.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
export default HomeScreen;
