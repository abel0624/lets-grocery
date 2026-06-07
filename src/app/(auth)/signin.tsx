import { supabase } from "@/utils/supabase";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const HandleSignIn = async () => {
    setLoading(true);
    try {
      await supabase.auth.signInWithPassword({
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        {/* App Title */}
        <Text style={styles.title}>Let’s Grocery</Text>
        <Text style={styles.subtitle}>Login to your account</Text>
        <Image
          source={require("@/assets/images/appImages/Home.png")}
          style={{
            width: 350,
            height: 350,
            resizeMode: "contain",
            borderRadius: 10,
          }}
        />

        <KeyboardAvoidingView>
          {/* Email Input */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          {/* Password Input */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* Login Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={HandleSignIn}
            disabled={loading}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

        {/* Footer */}
        <Text style={styles.footerText}>
          Don’t have an account?
          <Link href="/signup">
            <Text> Sign up</Text>
          </Link>{" "}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
  },
  innerContainer: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2ecc71",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 30,
    color: "#555",
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#2ecc71",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  footerText: {
    textAlign: "center",
    marginTop: 20,
    color: "#666",
  },
});
