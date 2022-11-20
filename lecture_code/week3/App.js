import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RoundedButton = ({ onPress, disabled, buttonColor, text, textColor }) => (
  <TouchableOpacity
    style={[
      styles.buttonBorder,
      { borderColor: buttonColor, opacity: disabled ? 0.4 : 1 },
    ]}
    onPress={onPress}
    disabled={disabled}
    activeOpacity={0.4}
  >
    <View style={[styles.buttonInnerView, { backgroundColor: buttonColor }]}>
      <Text style={[styles.buttonText, { color: textColor }]}>{text}</Text>
    </View>
  </TouchableOpacity>
);

export default function App() {
  const [running, setRunning] = useState(false);
  const [elapsedSecs, setElapsedSecs] = useState(0);

  useEffect(() => {
    let intervalRef = null;
    if (running) {
      intervalRef = setInterval(() => {
        setElapsedSecs((prevElapsedSecs) => prevElapsedSecs + 1);
      }, 1000);
    }
    return () => clearInterval(intervalRef);
  }, [running]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{elapsedSecs}</Text>
      <StatusBar style="auto" />
      <View style={styles.buttons}>
        <RoundedButton
          onPress={() => setElapsedSecs(0)}
          buttonColor="grey"
          text="Reset"
          textColor="white"
          disabled={true}
        />
        {running ? (
          <RoundedButton
            onPress={() => setRunning(false)}
            buttonColor="maroon"
            text="Stop"
            textColor="red"
          />
        ) : (
          <RoundedButton
            onPress={() => setRunning(true)}
            buttonColor="green"
            text="Start"
            textColor="lime"
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 80,
    fontWeight: "200",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  buttonText: { fontSize: 20, fontWeight: "500" },
  buttonBorder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonInnerView: {
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: "center",
    alignItems: "center",
  },
});
