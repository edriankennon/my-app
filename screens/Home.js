import {
    View,
    Text,
    Pressable,
    ImageBackground,
    Dimensions,
  } from "react-native";
  import React from "react";
  import { LinearGradient } from "expo-linear-gradient";
  import COLORS from "../constants/colors";
  import Button from "../components/Button";
  
  const Home = ({ navigation }) => {
    return (
      <LinearGradient
        style={{
          flex: 1,
        }}
        colors={[COLORS.secondary, COLORS.primary]}
      >
        <View style={{ flex: 1 }}>
          {/* content  */}
  
          <View
            style={{
              paddingHorizontal: 22,
              position: "absolute",
              top: 100,
              width: "100%",
            }}
          >
            <ImageBackground
              style={{
                height: 170,
                marginTop: 30,
                marginBottom: 90,
              }}
              resizeMode="contain"
              source={require("../assets/sunrise.png")}
            />
  
            <Text
              style={{
                fontSize: 50,
                fontWeight: 800,
                color: COLORS.white,
              }}
            >
              Welcome,
            </Text>
            <Text
              style={{
                fontSize: 46,
                fontWeight: 800,
                color: COLORS.white,
              }}
            >
              Back!
            </Text>
  
            <Button
              title="Log out"
              onPress={() => navigation.navigate("Login")}
              style={{
                marginTop: 22,
                width: "100%",
              }}
            />
          </View>
        </View>
      </LinearGradient>
    );
  };
  
  export default Home;
  